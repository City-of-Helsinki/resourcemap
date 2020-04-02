import React from 'react';
import H3 from 'components/H3';
import VacancyLabel from 'components/VacancyLabel';
import CloseButton from 'components/CloseButton';
import { TooltipWrapper, TooltipContainer } from './wrappers';

const Tooltip = props => {
  const showTooltip = props.visible;

  if (showTooltip) {
    return (
      <TooltipContainer x={props.x} y={props.y}>
        <TooltipWrapper className="animation-item">
          <CloseButton tooltip onClick={props.onClick} />
          <H3>{props.content.title}</H3>
          {props.content.useRespa && (
            <VacancyLabel variant="light" vacancy={props.content.available} />
          )}
        </TooltipWrapper>
      </TooltipContainer>
    );
  }

  return false;
};

export default Tooltip;
