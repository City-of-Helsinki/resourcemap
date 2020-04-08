import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Path = ({ path, onClick, id, ...props }) => {
  const isString = typeof path === 'string';
  const config = {
    id,
    pointerEvents: 'visible',
    cursor: 'pointer',
    className: classNames('roomPath', props.className),
    onClick: event => onClick(event, id),
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
  onClick: PropTypes.any.isRequired,
};

export default Path;
