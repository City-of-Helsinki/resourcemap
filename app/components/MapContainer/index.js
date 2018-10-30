import React from 'react';
import styled from 'styled-components';
import Img from 'components/Img';
import SvgMap from 'components/SvgMap';
import Tooltip from 'components/Tooltip';
import Icons from 'images/oodi-icons-descriptions.svg';

const Wrapper = styled.div`
	width: 70%;
	display: flex;
	height: 100%;
	padding: 5%;
	align-items: center;
	position: relative;
`;

const Content = styled.div`
	position: relative;
	img {
		max-width: 60%;
	}
`;

const MapContainer = props => {
	const {
		spaces,
		structures,
		icons,
		highlighted,
		currentSpace,
		tooltipState,
		x,
		y,
		roomRef,
	} = props;

	return (
		<Wrapper>
			<Content>
				<h1>{highlighted}</h1>
				<SvgMap
					rooms={spaces}
					structures={structures}
					icons={icons}
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
