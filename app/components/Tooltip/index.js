import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
	position: relative;
	background-color: white;
	border: 3px solid black;
	padding: 20px;
	&:after,
	&:before {
		top: 100%;
		left: 50%;
		border: solid transparent;
		content: ' ';
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
	}

	&:after {
		border-color: rgba(255, 255, 255, 0);
		border-top-color: #fff;
		border-width: 30px;
		margin-left: -30px;
	}
	&:before {
		border-color: rgba(0, 0, 0, 0);
		border-top-color: #000;
		border-width: 36px;
		margin-left: -36px;
	}

	p.small {
		font-size: 14px;
	}

	span {
		display: block;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: #00b62a;

		&.soon {
			background-color: #f5a623;
		}

		&.taken {
			background-color: #d0021b;
		}
	}
`;

const Tooltip = props => {
	console.log(props.content.title);
	const DivContainer = styled.div`
		display: block;
		position: absolute;
		width: 300px;
		left: ${props.x}px;
		top: ${props.y}px;

		transform: translate(-100px, -50px);

		&:after {
		}
	`;

	return (
		<DivContainer>
			<DivWrapper>
				<h3>{props.content.title}</h3>
				<p>
					<span className={props.content.available} />
				</p>
				<p className="small">
					Voit varata tämän tilan oven luona olevalta näytöltä.
				</p>
			</DivWrapper>
		</DivContainer>
	);
};

export default Tooltip;
