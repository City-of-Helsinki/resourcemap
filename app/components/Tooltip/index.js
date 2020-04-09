import React from 'react';
import PropTypes from 'prop-types';
import groupBy from 'lodash/groupBy';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';
import get from 'lodash/get';

import isResourceAvailable from 'utils/isResourceAvailable';
import getSpaceAvailability from 'utils/getSpaceAvailability';
import getLocalizedString from 'utils/getLocalizedString';
import VacancyLabel from 'components/VacancyLabel';
import VacancyIcon from 'components/VacancyIcon';
import CloseButton from 'components/CloseButton';
import categoryMessages from 'components/ButtonList/categoryMessages';
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
      const { category } = content[0];

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
      const maxPeopleCount = get(space, 'data.people_capacity', null);
      const description = get(space, 'description', null);
      const name = get(space, 'data.name', space.name);

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
          <Row>
            <VacancyLabel variant="light" vacancy={vacancyStatus} />
          </Row>
        </>
      );
    }
  }
}

const Tooltip = ({ content, intl, onClick, visible, x, y }) => {
  const { locale } = intl;

  if (!visible) {
    return null;
  }

  const body = makeBody(content, locale);

  return (
    <TooltipContainer x={x} y={y}>
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
