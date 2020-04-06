import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Path = ({ path, ...props }) => {
  const isString = typeof path === 'string';
  const config = {
    id: props.id,
    pointerEvents: 'visible',
    cursor: 'pointer',
    className: classNames('roomPath', props.className),
    onClick: event => props.onSpaceClick(event, { ...props }),
  };

  if (isString) {
    return <path {...config} d={path} />;
  }

  return React.createElement(path, config);
};

Path.propTypes = {
  id: PropTypes.any,
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  className: PropTypes.any,
  onSpaceClick: PropTypes.any,
};

export default Path;
