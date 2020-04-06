import React from 'react';
import PropTypes from 'prop-types';
import SvgMap from 'components/MapOfOodi';

const MapContainer = props => {
  const {
    spaces,
    highlighted,
    currentSpace,
    roomRef,
    handleSpaceClick,
  } = props;

  return (
    <SvgMap
      rooms={spaces}
      onSpaceClick={handleSpaceClick}
      highlighted={highlighted}
      roomRef={roomRef}
      currentSpace={currentSpace}
    />
  );
};

MapContainer.propTypes = {
  spaces: PropTypes.any,
  highlighted: PropTypes.any,
  currentSpace: PropTypes.any,
  roomRef: PropTypes.any,
  handleSpaceClick: PropTypes.any,
};

export default MapContainer;
