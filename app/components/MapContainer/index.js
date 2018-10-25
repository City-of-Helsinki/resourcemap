import React from 'react';
import styled from 'styled-components';
import Img from 'components/Img';
import SvgMap from 'components/SvgMap';
import Tooltip from 'components/Tooltip';

const Wrapper = styled.div`
	display: flex;
	height: 100%;
	padding: 5% 10% 5% 5%;
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
		this.state = {
			currentRoom: {
				title: 'Tilan nimi',
				available: 'Tietoa tilasta',
			},

			tooltipState: {
				current: null,
				visible: false,
			},
			x: 0,
			y: 0,
		};

		this.handleRoomClick = this.handleRoomClick.bind(this);
	}

	handleRoomClick(event, space) {
		let spaceItem = space;
		let spaceTitle = spaceItem.name;
		let showTooltip = false;

		const rect = event.target.getBoundingClientRect();
		const x = Math.round(rect.left);
		const y = Math.round(rect.top);
		const width = rect.width;
		const xPos = Math.round(x + rect.width / 2);

		console.log(rect.height);

		if (this.state.currentRoom.title === spaceTitle) {
			showTooltip = false;
			spaceTitle = '';
		} else {
			showTooltip = true;
		}

		this.setState(function(prevState, props) {
			return {
				tooltipState: {
					visible: showTooltip,
				},
				currentRoom: {
					title: spaceTitle,
					available: spaceItem.available,
				},
				x: xPos,
				y: y,
			};
		});
	}

	render() {
		const { currentRoom, tooltipState, x, y } = this.state;
		const { spaces, structures, icons, highlighted } = this.props;

		return (
			<Wrapper>
				<Content>
					<SvgMap
						rooms={spaces}
						structures={structures}
						icons={icons}
						onRoomClick={this.handleRoomClick}
						highlighted={highlighted}
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
