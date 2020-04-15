import React from 'react';
import PropTypes from 'prop-types';
import groupBy from 'lodash/groupBy';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';
import get from 'lodash/get';
import dateFormat from 'dateformat';

import SpaceAvailability from 'constants/SpaceAvailability';
import Rooms from 'constants/Rooms';
import isResourceAvailable from 'utils/isResourceAvailable';
import getSpaceAvailability from 'utils/getSpaceAvailability';
import getLocalizedString from 'utils/getLocalizedString';
import {
  getClosestAvailableSlot,
  getNextReservedSlot,
} from 'utils/resourceSlots';
import VacancyLabel from 'components/VacancyLabel';
import VacancyIcon from 'components/VacancyIcon';
import CloseButton from 'components/CloseButton';
import categoryMessages from 'components/ButtonList/categoryMessages';
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

const ALLOWED_AVAILABILITIES = [
  SpaceAvailability.AVAILABLE,
  SpaceAvailability.TAKEN,
  SpaceAvailability.CLOSED,
];

const ROOMS_WITH_GRID = [Rooms.WORKSTATION_1, Rooms.WORKSTATION_2];

function SubSpaceVacancyIcon({ availableCount, totalCount }) {
  return (
    <VacancyIcon
      className={classNames({
        available: availableCount === totalCount,
        taken: availableCount === 0,
        partlyAvailable: availableCount > 0 && availableCount < totalCount,
      })}
    />
  );
}

SubSpaceVacancyIcon.propTypes = {
  availableCount: PropTypes.number,
  totalCount: PropTypes.number,
};

function getAvailableCount(spaces) {
  const now = new Date();
  const available = spaces.filter(space => {
    if (!space || !space.data) {
      return false;
    }

    return isResourceAvailable(now, space.data);
  });

  return available.length;
}

function getType(content) {
  if (content.length > 1) {
    return 'group';
  }

  return '';
}

function makeBody(content, currentLocal) {
  if (content.length === 0) {
    return null;
  }

  const type = getType(content);
  const translate = translationObject =>
    getLocalizedString(translationObject, currentLocal);

  switch (type) {
    case 'group': {
      const groups = Object.entries(groupBy(content, 'type'));
      const { category, room } = content[0];

      if (ROOMS_WITH_GRID.includes(room)) {
        return <TooltipGrid groups={groups} />;
      }

      if (groups.length === 1) {
        const [spaceType, spaces] = groups[0];
        const totalCount = spaces.length;
        const availableCount = getAvailableCount(spaces);

        return (
          <>
            <Title>
              <FormattedMessage {...categoryMessages[category]} />
            </Title>
            <Row className="small light">
              <RowLabel>
                <FormattedMessage {...spaceTypeMessages[spaceType]} />
              </RowLabel>
            </Row>
            <Row className="small light">
              <SubSpaceVacancyIcon
                availableCount={availableCount}
                totalCount={totalCount}
              />
              <RowLabel>
                <FormattedMessage {...messages.reservableStatusLabel} />{' '}
                {availableCount}/{totalCount}
              </RowLabel>
            </Row>
          </>
        );
      }

      return (
        <>
          <Title>
            <FormattedMessage {...categoryMessages[category]} />
          </Title>
          {groups.map(([spaceType, spaces]) => {
            const totalCount = spaces.length;
            const availableCount = getAvailableCount(spaces);

            return (
              <Row key={spaceType}>
                <SubSpaceVacancyIcon
                  availableCount={availableCount}
                  totalCount={totalCount}
                />
                <RowLabel>
                  <FormattedMessage {...spaceTypeMessages[spaceType]} />{' '}
                  {availableCount}/{totalCount}{' '}
                  <FormattedMessage {...messages.reservableStatusLabel} />
                </RowLabel>
              </Row>
            );
          })}
        </>
      );
    }
    default: {
      const space = content[0];
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

      return (
        <>
          <Title>{translate(name)}</Title>
          {maxPeopleCount && (
            <Row>
              <Icon>
                <UserIcon />
              </Icon>
              <RowLabel>{maxPeopleCount}</RowLabel>
            </Row>
          )}
          {description && (
            <Row>
              <RowLabel>{translate(description)}</RowLabel>
            </Row>
          )}
          {ALLOWED_AVAILABILITIES.includes(vacancyStatus) && (
            <Row>
              <VacancyLabel variant="light" vacancy={vacancyStatus} />
            </Row>
          )}
          {vacancyStatus === SpaceAvailability.AVAILABLE && nextReservedSlot && (
            <Row>
              <RowLabel>
                <FormattedMessage
                  {...messages.availableUntilTimeLabel}
                  values={{
                    time: dateFormat(new Date(nextReservedSlot.start), 'HH:MM'),
                  }}
                />
              </RowLabel>
            </Row>
          )}
          {vacancyStatus === SpaceAvailability.TAKEN && closestFreeSlot && (
            <Row>
              <RowLabel>
                <FormattedMessage
                  {...messages.nextAvailableTimeLabel}
                  values={{
                    time: dateFormat(new Date(closestFreeSlot.start), 'HH:MM'),
                  }}
                />
              </RowLabel>
            </Row>
          )}
        </>
      );
    }
  }
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
