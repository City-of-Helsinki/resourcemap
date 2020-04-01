import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import SvgMap from 'components/SvgMap';
import Icons from 'images/oodi-icons-descriptions.svg';
import H1 from 'components/H1';
import VacancyList from 'components/VacancyList';
import { Wrapper, Content } from './wrappers';

const MapContainer = props => {
  const {
    spaces,
    highlighted,
    currentSpace,
    roomRef,
    handleSpaceClick,
  } = props;

  let title;
  // eslint-disable-next-line no-unused-expressions
  highlighted ? (title = `: ${highlighted}`) : (title = '');

  return (
    <Wrapper>
      <Content>
        <H1>Oodi{title} </H1>
        <VacancyList />
        <SvgMap
          rooms={spaces}
          onSpaceClick={handleSpaceClick}
          highlighted={highlighted}
          roomRef={roomRef}
          currentSpace={currentSpace}
        />
        <Img src={Icons} alt="Kartta ikonit" />
      </Content>
    </Wrapper>
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
