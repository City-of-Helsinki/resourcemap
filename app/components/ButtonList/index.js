import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import BookingButton from 'components/BookingButton';
import Categories from 'constants/Categories';
import Wrapper from './Wrapper';
import categoryMessages from './categoryMessages';

const categoriesInOrder = [
  Categories.LEARNING_SPACES,
  Categories.GROUP_ROOMS,
  Categories.WORKSPACES,
  Categories.STUDIOS,
  Categories.GAME_ROOMS,
  Categories.WORKSTATIONS,
  Categories.URBAN_WORKSHOP,
  Categories.MACHINE_ROOM,
  Categories.OTHER_SPACES,
];

const ButtonList = ({
  currentRoom,
  onSpaceCategoryClick,
  onSpaceNameClick,
  selectedCategory,
  spaces,
}) => (
  <Wrapper className="c-buttonlist">
    {categoriesInOrder.map(category => (
      <BookingButton
        key={category}
        category={category}
        className={category === selectedCategory ? 'btn--active' : 'btn'}
        currentRoom={currentRoom}
        id={category}
        items={spaces}
        onSpaceNameClick={onSpaceNameClick}
        onClick={() => onSpaceCategoryClick(category)}
        text={<FormattedMessage {...categoryMessages[category]} />}
      />
    ))}
  </Wrapper>
);

ButtonList.propTypes = {
  currentRoom: PropTypes.object,
  onSpaceCategoryClick: PropTypes.any,
  onSpaceNameClick: PropTypes.any,
  selectedCategory: PropTypes.string,
  spaces: PropTypes.any,
};

export default ButtonList;
