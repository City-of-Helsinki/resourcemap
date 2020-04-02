import React from 'react';
import PropTypes from 'prop-types';
import Room from 'components/Room';

import MapIconsLayer from './svg/MapIcons';
import MapStructures from './svg/MapStructures';
import MapYouAreHere from './svg/MapYouAreHere';
import roomPaths from './roomPaths';

const MapOfOodi = props => (
  <svg width="100%" viewBox="0 0 1400 320" version="1.1" ref={props.roomRef}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <MapStructures />
      <MapIconsLayer />
      <g>
        {props.rooms.map(item => {
          const paths = roomPaths[item.id];

          return paths.map(path => (
            <Room
              key={path}
              name={item.name}
              svgtype={item.svgtype}
              info={item.info}
              available={item.available}
              useRespa={item.useRespa}
              id={item.id}
              path={path}
              category={item.category}
              onSpaceClick={props.onSpaceClick}
              highlighted={props.highlighted}
              currentSpace={props.currentSpace}
            />
          ));
        })}
      </g>
      <MapYouAreHere />
    </g>
  </svg>
);

MapOfOodi.propTypes = {
  roomRef: PropTypes.any,
  rooms: PropTypes.arrayOf(PropTypes.any),
  onSpaceClick: PropTypes.any,
  highlighted: PropTypes.any,
  currentSpace: PropTypes.any,
};

export default MapOfOodi;
