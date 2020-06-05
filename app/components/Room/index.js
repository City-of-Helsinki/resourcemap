import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import SpaceAvailability from 'constants/SpaceAvailability';
import Rooms from 'constants/Rooms';
import Path from 'components/Path';

const ROOMS_WITH_NO_FILL_BASED_ON_AVAILABILITY = [Rooms.MACHINE_ROOM_1];

const Room = ({
  availability,
  id,
  isHighlighted,
  isOpened,
  onClick,
  ...props
}) => {
  const pathClassName = className(
    {
      'is-highlighted': isHighlighted,
      clicked: isOpened,
      'no-fill-based-on-availability': ROOMS_WITH_NO_FILL_BASED_ON_AVAILABILITY.includes(
        id,
      ),
    },
    availability,
  );

  return (
    <Path {...props} id={id} className={pathClassName} onClick={onClick} />
  );
};

Room.propTypes = {
  availability: PropTypes.oneOf(Object.values(SpaceAvailability)),
  id: PropTypes.string,
  isHighlighted: PropTypes.any,
  isOpened: PropTypes.any,
  onClick: PropTypes.any.isRequired,
};

export default Room;
