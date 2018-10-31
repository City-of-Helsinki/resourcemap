import React from 'react';
import styled from 'styled-components';
import Img from 'components/Img';
import SvgMap from 'components/SvgMap';
import Icons from 'images/oodi-icons-descriptions.svg';
import { Wrapper, Content } from './wrappers';
import H1 from 'components/H1';
import VagancyList from 'components/VagancyList';

const MapContainer = props => {
  const {
    spaces,
    highlighted,
    currentSpace,
    roomRef,
    handleSpaceClick,
  } = props;

  let title;
  highlighted ? (title = `: ${highlighted}`) : (title = '');

  return (
    <Wrapper>
      <Content>
        <H1>Oodi{title} </H1>
        <VagancyList />
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

export default MapContainer;
