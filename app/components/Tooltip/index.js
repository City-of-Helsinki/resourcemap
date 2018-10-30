import React from 'react';
import styled from 'styled-components';
import { TooltipWrapper, TooltipContainer } from './wrappers';
import P from 'components/P';
import H3 from 'components/H3';
import VagancyIcon from 'components/VagancyIcon';
import CloseButton from 'components/CloseButton';

const Tooltip = props => {
	return (
		<TooltipContainer x={props.x} y={props.y}>
			<TooltipWrapper>
				<CloseButton tooltip />
				<H3>{props.content.title}</H3>
				<P>
					<VagancyIcon className={props.content.available} />
				</P>
				<P className="small">
					Voit varata tämän tilan oven luona olevalta näytöltä.
				</P>
			</TooltipWrapper>
		</TooltipContainer>
	);
};

export default Tooltip;
