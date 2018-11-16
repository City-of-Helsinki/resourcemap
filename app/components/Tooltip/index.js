import React from 'react';
import styled from 'styled-components';
import { TooltipWrapper, TooltipContainer } from './wrappers';
import P from 'components/P';
import H3 from 'components/H3';
import VacancyLabel from 'components/VacancyLabel';
import CloseButton from 'components/CloseButton';

const Tooltip = props => {
  const showTooltip = props.visible;

  if (showTooltip) {
    return (
      <TooltipContainer x={props.x} y={props.y}>
        <TooltipWrapper className="animation-item">
          <CloseButton tooltip onClick={props.onClick} />
          <H3>{props.content.title}</H3>
          <VacancyLabel vacancy={props.content.available} />
          {/*
          <P className="small">
            Voit varata tämän tilan oven luona olevalta näytöltä.
          </P>*/}
        </TooltipWrapper>
      </TooltipContainer>
    );
  }

  return false;
};

export default Tooltip;
