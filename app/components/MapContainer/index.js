import React from 'react';
import styled from 'styled-components';
import Img from 'components/Img';
import SvgMap from 'components/SvgMap';

const Wrapper = styled.div`
	display: flex;
	height: 100%;
	padding: 5% 10% 5% 5%;
	align-items: center;

	div {
		position: relative;
		display: block;
	}
	img {
		max-width: 100%;
	}
`;

class MapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			svgPolygons: [
				{
					dataInfo: '<p>Room 1</p>',
					id: '1',
					stroke: '#000000',
					fill: '#E7F6EA',
					points:
						'115 0 232.338083 0 232.338083 71.1340206 115 71.1340206',
					active: 'false',
				},
				{
					dataInfo: '<p>Room 2</p>',
					id: '2',
					stroke: '#000000',
					fill: '#E2DAFE',
					points: '233 0 350.338083 0 350.338083 141 233 141',
					active: 'false',
				},
				{
					dataInfo: '<p>Room 3</p>',
					id: '3',
					stroke: '#000000',
					fill: '#E7F6EA',
					points: '0 141 350.338083 141 350.338083 199 0 199',
					active: 'false',
				},
			],
		};

		// this.handleRoomClick = this.handleRoomClick.bind(this);
	}

	handleRoomClick(roomItem) {
		let room = roomItem.target;
	}

	render() {
		return (
			<Wrapper>
				<div>
					<SvgMap
						rooms={this.state.svgPolygons}
						onRoomClick={room => this.handleRoomClick(room)}
					/>
				</div>
			</Wrapper>
		);
	}
}

export default MapContainer;
