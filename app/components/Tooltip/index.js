import React from 'react';
import PropTypes from 'prop-types';
import groupBy from 'lodash/groupBy';
import { FormattedMessage, injectIntl } from 'react-intl';
import get from 'lodash/get';
import dateFormat from 'dateformat';

import SpaceAvailability from 'constants/SpaceAvailability';
import Rooms from 'constants/Rooms';
import getSpaceAvailability from 'utils/getSpaceAvailability';
import getLocalizedString from 'utils/getLocalizedString';
import {
  getClosestAvailableSlot,
  getNextReservedSlot,
} from 'utils/resourceSlots';
import VacancyLabel from 'components/VacancyLabel';
import CloseButton from 'components/CloseButton';
import categoryMessages from 'components/ButtonList/categoryMessages';
import TooltipRowItems from './TooltipRowItems';
import TooltipGroup from './TooltipGroup';
import TooltipGrid from './TooltipGrid';
import {
  TooltipWrapper,
  TooltipContainer,
  Title,
  Row,
  RowLabel,
  Icon,
} from './wrappers';
import messages from './messages';
import spaceTypeMessages from './spaceTypeMessages';
import UserIcon from './icons/UserIcon';

const TooltipContentTypes = Object.freeze({
  DESCRIPTION: 'tooltipDescription',
  ROW: 'tooltipRow',
  ROW_ITEMS: 'tooltipRowItems',
  GROUP: 'tooltipGroup',
  GRID: 'tooltipGrid',
});

const SpaceContentTypes = Object.freeze({
  EMPTY: 'spaceEmpty',
  SINGLE: 'spaceSingle',
  GROUPS: 'spaceGroup',
  GRID: 'spaceGrid',
  UNKNOWN: 'spaceUnknown',
});

const ALLOWED_AVAILABILITIES = [
  SpaceAvailability.AVAILABLE,
  SpaceAvailability.TAKEN,
  SpaceAvailability.CLOSED,
];
const ROOMS_WITH_GRID = [Rooms.WORKSTATION_1, Rooms.WORKSTATION_2];

function getAvailableCount(spaces) {
  const available = spaces.filter(space => {
    const availability = getSpaceAvailability(space);

    return availability === SpaceAvailability.AVAILABLE;
  });

  return available.length;
}

function getSpaceContentType(content) {
  if (content.length === 0) {
    return SpaceContentTypes.EMPTY;
  }

  if (content.length === 1) {
    return SpaceContentTypes.SINGLE;
  }

  const { room } = content.find(space => space.room);

  if (ROOMS_WITH_GRID.includes(room)) {
    return SpaceContentTypes.GRID;
  }

  const spaceTypes = Object.keys(groupBy(content, 'type'));

  if (spaceTypes.length > 0) {
    return SpaceContentTypes.GROUP;
  }

  return SpaceContentTypes.UNKNOWN;
}

function findSpaceData(spaces, spaceContentType) {
  switch (spaceContentType) {
    case SpaceContentTypes.SINGLE: {
      // Only a single space present so we can safely take the first
      // one.
      const space = spaces[0];
      const vacancyStatus = getSpaceAvailability(space);
      const hardCodedMaxPeopleCount = get(space, 'peopleCapacity', null);
      const maxPeopleCount = get(
        space,
        'data.people_capacity',
        hardCodedMaxPeopleCount,
      );
      const description = get(space, 'description', null);
      const name = get(space, 'data.name', space.name);
      const data = get(space, 'data', null);
      const closestFreeSlot = getClosestAvailableSlot(data);
      const nextReservedSlot = getNextReservedSlot(data);

      // Rooms.GROUP_ROOM_1 behaves in a special way where it's closed
      // until four (Helsinki time) each day, and then becomes available
      // for reservations. I attempted to find a more meaningful
      // abstraction for this, but could not think of anything safe.
      // I decided to go with a hacky approach for now, and expand on it
      // later if we get other similar rooms and can build a better
      // understanding about the correct abstraction.
      const isGroupRoom1 = space.room === Rooms.GROUP_ROOM_1;
      const hoursInHelsinki = Number(
        new Date().toLocaleString('fi-FI', {
          hour: '2-digit',
          hour12: false,
          timeZone: 'Europe/Helsinki',
        }),
      );
      const isBeforeFourOClock = hoursInHelsinki < 16;
      const showGroupRoom1SpecialLabel = isGroupRoom1 && isBeforeFourOClock;

      return {
        type: SpaceContentTypes.SINGLE,
        name,
        vacancyStatus,
        maxPeopleCount,
        description,
        closestFreeSlot,
        nextReservedSlot,
        showGroupRoom1SpecialLabel,
      };
    }
    case SpaceContentTypes.GROUP: {
      const { category } = spaces.find(space => space.category);

      const getIsSpaceGroupClosed = spacesInGroup => {
        const totalCount = spacesInGroup.length;
        const closedSpaces = spacesInGroup.filter(space => {
          const availability = getSpaceAvailability(space);

          return availability === SpaceAvailability.CLOSED;
        });

        // If all the spaces within the group are closed, label the
        // group as closed.
        return totalCount === closedSpaces.length;
      };

      const spacesByType = Object.entries(groupBy(spaces, 'type'));
      const groups = spacesByType.map(([spaceType, spacesWithType]) => {
        const totalCount = spacesWithType.length;
        const availableCount = getAvailableCount(spacesWithType);
        const isClosed = getIsSpaceGroupClosed(spacesWithType);

        return {
          id: spaceType,
          availableCount,
          totalCount,
          spaceType,
          isClosed,
        };
      });

      return {
        type: SpaceContentTypes.GROUP,
        category,
        groups,
      };
    }
    case SpaceContentTypes.GRID: {
      const spacesByType = Object.entries(groupBy(spaces, 'type'));

      if (spacesByType.length === 0 || spacesByType > 1) {
        throw Error(
          'The GRID SpaceContentType supports rendering of exactly one SpaceType group',
        );
      }

      // SpacesByType should be an array with exactly one item in it.
      // Because of this, we can:
      // (1) safely access the first item and
      // (2) safely ignore other items.
      const [spaceType, spacesWithType] = spacesByType[0];
      const maxPeopleCount = spaces.length;
      const someSpaceCanBeReserved = spaces.some(space => space.canBeReserved);
      const gridItems = spacesWithType.map((space, index) => ({
        id: space.id,
        label: index + 1,
        availability: getSpaceAvailability(space),
      }));

      return {
        type: SpaceContentTypes.GRID,
        spaceType,
        maxPeopleCount,
        someSpaceCanBeReserved,
        gridItems,
      };
    }
    case SpaceContentTypes.EMPTY:
      return {
        type: SpaceContentTypes.EMPTY,
      };
    case SpaceContentTypes.UNKNOWN:
      return {
        type: SpaceContentTypes.UNKNOWN,
      };
    default:
      return {};
  }
}

function makeTooltipViewModel(spaces, currentLocal) {
  const translate = translationObject =>
    getLocalizedString(translationObject, currentLocal);

  const spaceContentType = getSpaceContentType(spaces);
  const spaceData = findSpaceData(spaces, spaceContentType);

  switch (spaceData.type) {
    case SpaceContentTypes.SINGLE: {
      const {
        closestFreeSlot,
        description,
        name,
        nextReservedSlot,
        maxPeopleCount,
        vacancyStatus,
        showGroupRoom1SpecialLabel,
      } = spaceData;
      const content = [];

      if (maxPeopleCount) {
        content.push({
          type: TooltipContentTypes.ROW,
          id: 'maxPeopleCount',
          content: (
            <>
              <Icon>
                <UserIcon />
              </Icon>
              <RowLabel>{maxPeopleCount}</RowLabel>
            </>
          ),
        });
      }

      if (description) {
        content.push({
          type: TooltipContentTypes.DESCRIPTION,
          id: 'description',
          description: translate(spaceData.description),
        });
      }

      if (ALLOWED_AVAILABILITIES.includes(vacancyStatus)) {
        content.push({
          type: TooltipContentTypes.ROW,
          id: 'vacancyLabel',
          content: (
            <>
              <VacancyLabel variant="light" vacancy={vacancyStatus} />
              {showGroupRoom1SpecialLabel && (
                <FormattedMessage
                  {...messages.groupRoomOneSpecialLabel}
                  values={{ time: '16:00' }}
                />
              )}
            </>
          ),
        });
      }

      if (vacancyStatus === SpaceAvailability.AVAILABLE && nextReservedSlot) {
        content.push({
          type: TooltipContentTypes.ROW,
          id: 'availableUntil',
          content: (
            <RowLabel>
              <FormattedMessage
                {...messages.availableUntilTimeLabel}
                values={{
                  time: dateFormat(new Date(nextReservedSlot.start), 'HH:MM'),
                }}
              />
            </RowLabel>
          ),
        });
      }

      if (vacancyStatus === SpaceAvailability.TAKEN && closestFreeSlot) {
        content.push({
          type: TooltipContentTypes.ROW,
          id: 'availableNext',
          content: (
            <RowLabel>
              <FormattedMessage
                {...messages.nextAvailableTimeLabel}
                values={{
                  time: dateFormat(new Date(closestFreeSlot.start), 'HH:MM'),
                }}
              />
            </RowLabel>
          ),
        });
      }

      return {
        title: translate(name),
        content,
      };
    }
    case SpaceContentTypes.GROUP: {
      const { groups, category } = spaceData;
      const content = groups.map(group => ({
        type: TooltipContentTypes.GROUP,
        id: group.id,
        availableCount: group.availableCount,
        totalCount: group.totalCount,
        isClosed: group.isClosed,
        label: (
          <>
            <FormattedMessage {...spaceTypeMessages[group.spaceType]} />{' '}
            {group.availableCount}/{group.totalCount}{' '}
            <FormattedMessage {...messages.reservableStatusLabel} />
          </>
        ),
      }));

      return {
        title: <FormattedMessage {...categoryMessages[category]} />,
        content,
      };
    }
    case SpaceContentTypes.GRID: {
      const {
        maxPeopleCount,
        someSpaceCanBeReserved,
        spaceType,
        gridItems,
      } = spaceData;
      const halfwayThrough = Math.floor(gridItems.length / 2);
      const adjustedGridItemOrder = [
        ...gridItems.slice(halfwayThrough, gridItems.length).reverse(),
        ...gridItems.slice(0, halfwayThrough),
      ];

      return {
        title: <FormattedMessage {...spaceTypeMessages[spaceType]} />,
        content: [
          {
            type: TooltipContentTypes.ROW_ITEMS,
            id: 'info',
            items: [
              {
                id: 'maxPeopleCount',
                content: (
                  <>
                    <Icon>
                      <UserIcon />
                    </Icon>
                    <RowLabel>{maxPeopleCount}</RowLabel>
                  </>
                ),
              },
              {
                id: 'reservationStatus',
                content: (
                  <>
                    <RowLabel>
                      {someSpaceCanBeReserved && (
                        <FormattedMessage
                          {...messages.reservationStatusLabel}
                        />
                      )}
                      {!someSpaceCanBeReserved && (
                        <FormattedMessage
                          {...messages.notReservableStatusLabel}
                        />
                      )}
                    </RowLabel>
                  </>
                ),
              },
            ],
          },
          {
            type: TooltipContentTypes.GRID,
            id: 'grid',
            items: adjustedGridItemOrder,
          },
        ],
      };
    }
    case SpaceContentTypes.EMPTY:
    case SpaceContentTypes.UNKNOWN:
    default:
      return null;
  }
}

function makeBody(content, currentLocal) {
  const tooltipData = makeTooltipViewModel(content, currentLocal);

  if (!tooltipData) {
    return null;
  }

  return (
    <>
      <Title>{tooltipData.title}</Title>
      {tooltipData.content.map(contentItem => (
        <React.Fragment key={contentItem.id}>
          {contentItem.type === TooltipContentTypes.DESCRIPTION && (
            <Row>
              <RowLabel>{contentItem.description}</RowLabel>
            </Row>
          )}
          {contentItem.type === TooltipContentTypes.ROW && (
            <Row>{contentItem.content}</Row>
          )}
          {contentItem.type === TooltipContentTypes.ROW_ITEMS && (
            <TooltipRowItems items={contentItem.items} />
          )}
          {contentItem.type === TooltipContentTypes.GROUP && (
            <TooltipGroup
              availableCount={contentItem.availableCount}
              isClosed={contentItem.isClosed}
              label={contentItem.label}
            />
          )}
          {contentItem.type === TooltipContentTypes.GRID && (
            <TooltipGrid items={contentItem.items} />
          )}
        </React.Fragment>
      ))}
    </>
  );
}

const Tooltip = ({ content, intl, onClick, visible, x, y }) => {
  const { locale } = intl;
  const tooltip = React.useRef();

  const handleDocumentClick = event => {
    const { target } = event;
    const current = tooltip && tooltip.current;

    // Close self on outside click
    if (!(current && target instanceof Node && current.contains(target))) {
      onClick(event);
    }
  };

  const body = makeBody(content, locale);

  React.useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [handleDocumentClick]);

  if (!visible) {
    return null;
  }

  return (
    <TooltipContainer ref={tooltip} x={x} y={y}>
      <TooltipWrapper className="animation-item">
        <CloseButton tooltip onClick={onClick} />
        {body}
      </TooltipWrapper>
    </TooltipContainer>
  );
};

Tooltip.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.object,
      data: PropTypes.object,
    }),
  ),
  intl: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  x: PropTypes.number,
  y: PropTypes.number,
};

export default injectIntl(Tooltip);
