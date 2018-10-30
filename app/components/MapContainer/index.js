import React from 'react';
import styled from 'styled-components';
import Img from 'components/Img';
import SvgMap from 'components/SvgMap';
import Tooltip from 'components/Tooltip';
import Icons from 'images/oodi-icons-descriptions.svg';
import { Wrapper, Content } from './wrappers';

const MapContainer = props => {
	const {
		spaces,
		highlighted,
		currentSpace,
		tooltipState,
		x,
		y,
		roomRef,
	} = props;

	let title;
	highlighted ? (title = `: ${highlighted}`) : (title = '');

	return (
		<Wrapper>
			<Content>
				<h1>Oodi{title} </h1>
				<SvgMap
					rooms={spaces}
					onSpaceClick={props.handleSpaceClick}
					highlighted={highlighted}
					roomRef={roomRef}
					currentSpace={currentSpace}
				/>
				{tooltipState.visible && (
					<Tooltip content={currentSpace} x={x} y={y} />
				)}
				<Img src={Icons} />
			</Content>
		</Wrapper>
	);
};

export default MapContainer;
