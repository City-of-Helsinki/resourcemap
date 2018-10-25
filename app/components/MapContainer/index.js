import React from 'react';
import styled from 'styled-components';
import Img from 'components/Img';
import SvgMap from 'components/SvgMap';
import Tooltip from 'components/Tooltip';

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
		max-width: 100%;
	}
`;

class MapContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	// handleRoomClick2(item, x, y) {
	// 	console.log('roomie!', x, y);
	// 	const spaceItem = item;
	// 	let spaceTitle = spaceItem.name;
	// 	let showTooltip = false;

	// 	if (this.state.currentRoom.title === spaceTitle) {
	// 		showTooltip = false;
	// 		spaceTitle = '';
	// 	} else {
	// 		showTooltip = true;
	// 	}
	// }

	render() {
		// const { currentRoom, tooltipState, x, y } = this.state;
		const {
			spaces,
			structures,
			icons,
			highlighted,
			currentRoom,
			tooltipState,
			x,
			y,
			roomRef,
		} = this.props;

		return (
			<Wrapper>
				<Content>
					<SvgMap
						rooms={spaces}
						structures={structures}
						icons={icons}
						onRoomClick={this.props.handleRoomClick}
						highlighted={highlighted}
						roomRef={roomRef}
					/>
					{tooltipState.visible && (
						<Tooltip content={currentRoom} x={x} y={y} />
					)}
				</Content>
			</Wrapper>
		);
	}
}

export default MapContainer;
