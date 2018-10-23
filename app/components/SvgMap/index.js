import React from 'react';
import FloorPlan from 'images/oodi-structures-plan.svg';
import Room from 'components/Room';
import Img from 'components/Img';
import styled from 'styled-components';

const Div = styled.div`
	display: block;

	img {
		border: 2px solid;
		max-width: 100%;
		position: absolute;
	}
	svg {
		max-width: 100%;
	}
`;

const SvgMap = props => {
	const Alt = 'Floor plan';
	console.log('SvgMap says: room.props ', props.rooms);
	return (
		<Div>
			<svg
				width="2000px"
				height="456px"
				viewBox="0 0 2000 456"
				version="1.1"
			>
				<g
					id="Oodi_Pohjakartta_2krs"
					fill="#FFFFFF"
					fillRule="nonzero"
					stroke="#000000"
					strokeWidth="3"
				>
					{props.rooms.map(item => (
						<Room
							key={item.id}
							svgtype={item.svgtype}
							info={item.info}
							available={item.available}
							id={item.id}
							d={item.d}
							onRoomClick={props.onRoomClick}
						/>
					))}
				</g>
			</svg>
		</Div>
	);
};

export default SvgMap;
