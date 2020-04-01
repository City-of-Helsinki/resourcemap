import React from 'react';
import PropTypes from 'prop-types';
import Path from 'components/Path';

const Room = ({
  svgtype,
  available,
  category,
  onSpaceClick,
  highlighted,
  currentSpace,
  id,
  useRespa,
  ...props
}) => {
  // Generate classname.
  let className = '';

  // First check if this item is highlighted, but not necessarily opened.
  const classNameHighlighted = category === highlighted ? 'is-highlighted' : '';

  // Check also if this space is actually clicked and opened.
  if (currentSpace.id === id) {
    className = `${classNameHighlighted} clicked`;
  } else {
    className = classNameHighlighted;
  }

  // Concat to final classname.
  className = `${className} ${available}`;

  return (
    <Path
      {...props}
      available={available}
      id={id}
      useRespa={useRespa}
      className={className}
      onSpaceClick={onSpaceClick}
    />
  );
};

Room.propTypes = {
  svgtype: PropTypes.any,
  available: PropTypes.any,
  category: PropTypes.any,
  onSpaceClick: PropTypes.any,
  highlighted: PropTypes.any,
  currentSpace: PropTypes.any,
  id: PropTypes.any,
  useRespa: PropTypes.any,
};

export default Room;
