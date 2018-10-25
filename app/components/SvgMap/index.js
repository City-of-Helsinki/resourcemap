import React from 'react';
import Room from 'components/Room';
import styled from 'styled-components';

const Div = styled.div`
	position: relative;
	display: block;
	border: 1px solid red;
	svg {
		max-width: 100%;
	}
`;

const SvgMap = props => {
	return (
		<Div>
			<svg
				width="2000px"
				height="456px"
				viewBox="0 0 2000 456"
				version="1.1"
			>
				<g
					id="Page-1"
					stroke="none"
					strokeWidth="1"
					fill="none"
					fillRule="evenodd"
				>
					<g id="Oodi_Pohjakartta_2krs" fillRule="nonzero">
						<g
							id="structures"
							fill="#FFFFFF"
							fillRule="nonzero"
							stroke="#000000"
							strokeWidth="3"
						>
							{props.structures.map(item => (
								<Room
									key={item.id}
									name={item.name}
									svgtype={item.svgtype}
									info={item.info}
									available={item.available}
									id={item.id}
									d={item.d}
									onRoomClick={() => false}
								/>
							))}
						</g>
						<g
							id="spaces"
							fill="#FFFFFF"
							fillRule="nonzero"
							stroke="#000000"
							strokeWidth="3"
							transform="translate(96.000000, 6.000000)"
						>
							{props.rooms.map(item => (
								<Room
									key={item.id}
									name={item.name}
									svgtype={item.svgtype}
									info={item.info}
									available={item.available}
									id={item.id}
									d={item.d}
									category={item.category}
									onRoomClick={props.onRoomClick}
									highlighted={props.highlighted}
								/>
							))}
						</g>

						<g
							id="ikonit"
							transform="translate(119.000000, 18.000000)"
						>
							{props.icons.map(item => (
								<Room
									key={item.id}
									name={item.name}
									svgtype={item.svgtype}
									info={item.info}
									available={item.available}
									id={item.id}
									d={item.d}
									onRoomClick={props.onRoomClick}
								/>
							))}
						</g>
					</g>
				</g>
			</svg>
		</Div>
	);
};

export default SvgMap;
