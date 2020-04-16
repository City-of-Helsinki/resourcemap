import React from 'react';
import PropTypes from 'prop-types';

import SpaceAvailability from 'constants/SpaceAvailability';
import Path from 'components/Path';

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
