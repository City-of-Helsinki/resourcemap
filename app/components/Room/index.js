import React from 'react';
import PropTypes from 'prop-types';

import SpaceAvailability from 'constants/SpaceAvailability';
import Rooms from 'constants/Rooms';
import Path from 'components/Path';

const SPECIAL_COLORS = [
  Rooms.URBAN_WORKSHOP_1,
  Rooms.URBAN_WORKSHOP_2,
  Rooms.URBAN_WORKSHOP_3,
];

const Room = ({
  availability,
  id,
  isHighlighted,
  isOpened,
  onClick,
  ...props
}) => {
  // Generate classname.
  let className = '';

  // First check if this item is highlighted, but not necessarily opened.
  const classNameHighlighted = isHighlighted ? 'is-highlighted' : '';

  // Check also if this space is actually clicked and opened.
  if (isOpened) {
    className = `${classNameHighlighted} clicked`;
  } else {
    className = classNameHighlighted;
  }

  if (SPECIAL_COLORS.includes(id)) {
    className += ' special-colouring';
  }

  // Concat to final classname.
  className = `${className} ${availability}`;

  return <Path {...props} id={id} className={className} onClick={onClick} />;
};

Room.propTypes = {
  availability: PropTypes.oneOf(Object.values(SpaceAvailability)),
  id: PropTypes.string,
  isHighlighted: PropTypes.any,
  isOpened: PropTypes.any,
  onClick: PropTypes.any.isRequired,
};

export default Room;
