import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { injectIntl, FormattedMessage } from 'react-intl';
import groupBy from 'lodash/groupBy';
import get from 'lodash/get';

import Categories from 'constants/Categories';
import getLocalizedString from 'utils/getLocalizedString';
import spaceTypeMessages from 'components/Tooltip/spaceTypeMessages';
import {
  Wrapper,
  MainButton,
  SubButton,
  SubButtonWrapperWithTransition,
} from './wrappers';

const GROUP_BY_TYPE = [Categories.URBAN_WORKSHOP, Categories.MACHINE_ROOM];

const BookingButton = ({
  category,
  className,
  currentRoom,
  intl,
  items,
  onClick,
  onSpaceNameClick,
  text,
}) => {
  const { locale } = intl;
  const currentRoomId = get(currentRoom, 'id', null);
  const currentSpacesIds = get(currentRoom, 'spaces', []).map(
    space => space.id,
  );
  const isGroupedByType = GROUP_BY_TYPE.includes(category);
  const spacesInCategory = items.filter(
    item => item.category === category && className === 'btn--active',
  );

  const onButtonClick = item => {
    onSpaceNameClick(item);
  };

  const getButtonItemData = () => {
    if (isGroupedByType) {
      return Object.entries(groupBy(spacesInCategory, 'type')).map(
        ([spaceType, spaces]) => ({
          id: spaceType,
          label: <FormattedMessage {...spaceTypeMessages[spaceType]} />,
          isActive: spaces[0].room === currentRoomId,
          onClick: () => onButtonClick(spaces[0]),
        }),
      );
    }

    return spacesInCategory.map(space => ({
      id: space.id,
      label: getLocalizedString(get(space, 'data.name', space.name), locale),
      isActive: currentSpacesIds.includes(space.id),
      onClick: () => onButtonClick(space),
    }));
  };

  const buttonItemData = getButtonItemData();
  const buttonItems = buttonItemData.map(button => (
    <CSSTransition key={button.id} timeout={200} classNames="slide">
      <SubButton
        key={button.id}
        onClick={button.onClick}
        className={
          button.isActive
            ? 'sub-btn--active animation-item'
            : 'sub-btn animation-item'
        }
      >
        {button.label}
      </SubButton>
    </CSSTransition>
  ));

  return (
    <Wrapper>
      <MainButton onClick={onClick} className={className}>
        {text}
      </MainButton>
      <SubButtonWrapperWithTransition className="button-animations">
        {className === 'btn--active' && buttonItems}
      </SubButtonWrapperWithTransition>
    </Wrapper>
  );
};

BookingButton.propTypes = {
  onSpaceNameClick: PropTypes.any,
  category: PropTypes.string.isRequired,
  text: PropTypes.any,
  className: PropTypes.any,
  onClick: PropTypes.any,
  intl: PropTypes.any,
  items: PropTypes.any,
  currentRoom: PropTypes.object,
};

export default injectIntl(BookingButton);
