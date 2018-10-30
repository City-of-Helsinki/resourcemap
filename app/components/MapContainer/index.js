import React from 'react';
import styled from 'styled-components';
import Img from 'components/Img';
import SvgMap from 'components/SvgMap';
import Tooltip from 'components/Tooltip';
import Icons from 'images/oodi-icons-descriptions.svg';
import { Wrapper, Content } from './wrappers';
import H1 from 'components/H1';

const MapContainer = props => {
	const {
		spaces,
		highlighted,
		currentSpace,
		tooltipState,
		x,
		y,
		roomRef,
		onTooltipClick,
		handleSpaceClick,
	} = props;

	let title;
	highlighted ? (title = `: ${highlighted}`) : (title = '');

	return (
		<Wrapper>
			<Content>
				<H1>Oodi{title} </H1>
				<SvgMap
					rooms={spaces}
					onSpaceClick={handleSpaceClick}
					highlighted={highlighted}
					roomRef={roomRef}
					currentSpace={currentSpace}
				/>
				{tooltipState.visible && (
					<Tooltip
						content={currentSpace}
						x={x}
						y={y}
						onClick={onTooltipClick}
					/>
				)}
				<Img src={Icons} alt="Kartta ikonit" />
			</Content>
		</Wrapper>
	);
};

export default MapContainer;
