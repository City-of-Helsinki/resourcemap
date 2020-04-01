import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './wrappers';

const Path = props => (
  <Wrapper
    id={props.id}
    d={props.d}
    pointerEvents="visible"
    cursor="pointer"
    className={props.className}
    onClick={event => props.onSpaceClick(event, { ...props })}
  />
);

Path.propTypes = {
  id: PropTypes.any,
  d: PropTypes.any,
  className: PropTypes.any,
  onSpaceClick: PropTypes.any,
};

export default Path;
