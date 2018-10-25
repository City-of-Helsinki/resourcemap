import React from 'react';
import styled from 'styled-components';
import BasicButton from 'components/BasicButton';

const MainButton = styled(BasicButton)`
	margin: 0 auto 1rem;
	display: block;
	width: 100%;
	max-width: 100%;
	overflow: hidden;
	white-space: nowrap;
	&:last-of-type {
		margin-bottom: 3rem;
	}

	&.btn {
		&--active {
			background-color: black;
			color: white;
		}
	}
`;

const SubButton = styled(MainButton)`
	font-size: 18px;
	line-height: 2rem;
	border-radius: 0;
	margin-bottom: 7px;
	background-color: #d8d8d8;
	&.btn {
		&--active {
			background-color: black;
			color: white;
		}
	}
`;

const BookingButton = props => {
	const { text, className, onClick, items, onSpaceNameClick } = props;
	const buttonCategory = text;
	// console.log(text, items);

	return (
		<React.Fragment>
			<MainButton onClick={onClick} className={className}>
				{props.text}
			</MainButton>
			{items.map(item => {
				if (
					buttonCategory === item.category &&
					className === 'btn--active'
				) {
					return (
						<SubButton
							key={item.id}
							onClick={() => props.onSpaceNameClick(item.id)}
						>
							{item.name}
						</SubButton>
					);
				}
			})}
		</React.Fragment>
	);
};

export default BookingButton;
