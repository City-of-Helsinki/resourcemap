import React from 'react';
import styled from 'styled-components';
import BasicButton from 'components/BasicButton';
import Chevron from 'components/Chevron';

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
`;

const SubButton = styled(MainButton)`
	font-size: 18px;
	line-height: 2rem;
	border-radius: 0;
	margin-bottom: 7px;
	background-color: #d8d8d8;
	width: 90%;

	&.sub-btn {
		&--active {
			background-color: black;
			color: white;
		}
	}
`;

class BookingButton extends React.Component {
	constructor(props) {
		super(props);
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick(item) {
		this.props.onSpaceNameClick(item);
	}

	render() {
		const {
			text,
			className,
			onClick,
			items,
			id,
			onSpaceNameClick,
			currentSpace,
		} = this.props;

		const clickedCategoryName = text;

		return (
			<React.Fragment>
				<MainButton onClick={onClick} className={className}>
					{text}
					<Chevron
						className={className === 'btn--active' ? 'up' : 'down'}
					/>
				</MainButton>
				{items.map(item => {
					if (
						item.category === clickedCategoryName &&
						className === 'btn--active'
					) {
						return (
							<SubButton
								key={item.id}
								onClick={() => this.onButtonClick(item)}
								className={
									currentSpace.id == item.id
										? 'sub-btn--active'
										: 'sub-btn'
								}
							>
								{item.name}
							</SubButton>
						);
					}
				})}
			</React.Fragment>
		);
	}
}

export default BookingButton;
