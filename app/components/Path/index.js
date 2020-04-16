import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import theme from 'theme';
import './styles.css';

// eslint-disable-next-line react/prop-types
const TakenPattern = ({ id, color }) => (
  <pattern
    id={id}
    width="3"
    height="3"
    patternTransform="rotate(-45 0 0)"
    patternUnits="userSpaceOnUse"
  >
    <rect
      width="3"
      height="3"
      style={{
        fill: 'white',
      }}
    />
    <line
      x1="0"
      y1="0"
      x2="0"
      y2="10"
      style={{
        stroke: color,
        strokeWidth: 5,
      }}
    />
  </pattern>
);

const TakenPatternClicked = () => (
  <TakenPattern id="takenPatternClicked" color={theme.colors.taken} />
);

const TakenPatternHighlighted = () => (
  <TakenPattern id="takenPatternHighlighted" color="#7b060a" />
);

const Path = ({ path, onClick, id, className }) => {
  const isString = typeof path === 'string';
  const config = {
    id,
    pointerEvents: 'visible',
    cursor: 'pointer',
    className: classNames('roomPath', className),
    onClick: event => onClick(event, id),
  };
  const isClicked = className.includes('clicked');
  const isHighlighted = className.includes('is-highlighted');
  const isTaken = className.includes('taken');

  const content = isString ? (
    <path {...config} d={path} />
  ) : (
    React.createElement(path, config)
  );

  return (
    <svg>
      {(isClicked || isHighlighted) && isTaken && (
        <defs>
          {/* These patterns end up having duplicate ids. This is not 
            ideal and it caused some inconsistent behaviour while 
            developing. */}
          {isClicked && <TakenPatternClicked />}
          {isHighlighted && <TakenPatternHighlighted />}
        </defs>
      )}
      {content}
    </svg>
  );
};

Path.propTypes = {
  id: PropTypes.any,
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  className: PropTypes.any,
  onClick: PropTypes.any.isRequired,
};

export default Path;
