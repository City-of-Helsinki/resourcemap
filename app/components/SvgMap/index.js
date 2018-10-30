import React from 'react';
import Room from 'components/Room';
import styled from 'styled-components';
import Icons from './icons';
import Structures from './structures';
import { Wrapper, Content } from './wrappers';

const SvgMap = props => {
	return (
		<Wrapper>
			<svg
				width="2000px"
				height="456px"
				viewBox="0 0 2000 456"
				version="1.1"
				ref={props.roomRef}
			>
				<g
					id="Page-1"
					stroke="none"
					strokeWidth="1"
					fill="none"
					fillRule="evenodd"
				>
					<g id="Oodi_Pohjakartta_2krs" fillRule="nonzero">
						<g id="structures" fill="#FFFFFF" fillRule="nonzero">
							<Structures />
						</g>
						<g
							id="spaces"
							fill="#FFFFFF"
							fillRule="nonzero"
							stroke="#000000"
							strokeWidth="3"
							transform="translate(99.000000, 9.000000)"
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
									onSpaceClick={props.onSpaceClick}
									highlighted={props.highlighted}
									currentSpace={props.currentSpace}
								/>
							))}
						</g>

						<g
							id="ikonit"
							fill="#000000"
							fillRule="nonzero"
							stroke="#000000"
							strokeWidth="0"
							transform="translate(24.000000, 18.000000)"
						>
							<Icons />
						</g>
					</g>
				</g>
			</svg>
		</Wrapper>
	);
};

export default SvgMap;
