import React from 'react';
import PropTypes from 'prop-types';
import groupBy from 'lodash/groupBy';
import get from 'lodash/get';

import isResourceAvailable from 'utils/isResourceAvailable';
import Room from 'components/Room';

import MapIconsLayer from './svg/MapIcons';
import MapStructures from './svg/MapStructures';
import MapYouAreHere from './svg/MapYouAreHere';
import roomPaths from './roomPaths';

function getAvailability(spaces) {
  const totalCount = spaces.length;
  const availableCount = spaces.filter(space =>
    isResourceAvailable(space.data, new Date()),
  ).length;

  if (availableCount === totalCount) {
    return 'available';
  }

  if (availableCount === 0) {
    return 'taken';
  }

  return 'partlyAvailable';
}

const MapOfOodi = ({
  currentRoom,
  highlighted,
  onRoomClick,
  roomRef,
  spaces,
}) => {
  const rooms = Object.entries(groupBy(spaces, 'room'));

  return (
    <svg height="100%" viewBox="0 0 1400 320" version="1.1" ref={roomRef}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <MapStructures />
        <MapIconsLayer />
        <g>
          {rooms.map(([roomId, roomSpaces]) => {
            const paths = roomPaths[roomId];
            const availability = getAvailability(roomSpaces);
            const isOpened = roomId === get(currentRoom, 'id', null);
            const isHighlighted = roomSpaces
              .map(space => space.category)
              .includes(highlighted);

            return paths.map(path => (
              <Room
                key={path}
                availability={availability}
                id={roomId}
                isOpened={isOpened}
                isHighlighted={isHighlighted}
                onClick={onRoomClick}
                path={path}
              />
            ));
          })}
        </g>
        <MapYouAreHere />
      </g>
    </svg>
  );
};

MapOfOodi.propTypes = {
  currentRoom: PropTypes.any,
  highlighted: PropTypes.any,
  onRoomClick: PropTypes.any.isRequired,
  roomRef: PropTypes.any,
  spaces: PropTypes.arrayOf(PropTypes.any),
};

export default MapOfOodi;
