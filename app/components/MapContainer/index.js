import React from 'react';
import PropTypes from 'prop-types';
import MapOfOodi from 'components/MapOfOodi';

const MapContainer = ({
  currentRoom,
  handleRoomClick,
  highlighted,
  roomRef,
  spaces,
}) => (
  <MapOfOodi
    currentRoom={currentRoom}
    highlighted={highlighted}
    onRoomClick={handleRoomClick}
    roomRef={roomRef}
    spaces={spaces}
  />
);

MapContainer.propTypes = {
  currentRoom: PropTypes.any,
  handleRoomClick: PropTypes.any.isRequired,
  highlighted: PropTypes.any,
  roomRef: PropTypes.any,
  spaces: PropTypes.any,
};

export default MapContainer;
