import React from 'react';
import PropTypes from 'prop-types';
import Room from 'components/Room';
import Icons from './icons';
import Structures from './structures';

const SvgMap = props => (
  <svg width="100%" viewBox="0 0 2000 456" version="1.1" ref={props.roomRef}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Oodi_Pohjakartta_2krs" fillRule="nonzero">
        <Structures />
        <g
          id="spaces"
          fill="#FFFFFF"
          fillRule="nonzero"
          stroke="#000000"
          strokeWidth="3"
          transform="translate(99.000000, 9.000000)"
        >
          {props.rooms.map(item => (
            <Room
              key={item.id}
              name={item.name}
              svgtype={item.svgtype}
              info={item.info}
              available={item.available}
              useRespa={item.useRespa}
              id={item.id}
              d={item.d}
              category={item.category}
              onSpaceClick={props.onSpaceClick}
              highlighted={props.highlighted}
              currentSpace={props.currentSpace}
            />
          ))}
        </g>

        <Icons />
      </g>
    </g>
  </svg>
);

SvgMap.propTypes = {
  roomRef: PropTypes.any,
  rooms: PropTypes.arrayOf(PropTypes.any),
  onSpaceClick: PropTypes.any,
  highlighted: PropTypes.any,
  currentSpace: PropTypes.any,
};

export default SvgMap;
