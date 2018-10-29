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

class BookingButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			subActiveIndex: null,
		};

		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick(item) {
		this.props.onSpaceNameClick(item);
		const btnindex = index === this.state.subActiveIndex ? null : index;

		this.setState(function(prevState, props) {
			return {
				subActiveIndex: btnindex,
			};
		});
	}

	render() {
		const {
			text,
			className,
			onClick,
			items,
			onSpaceNameClick,
		} = this.props;

		const clickedCategoryName = text;
		const { subActiveIndex } = this.state;

		return (
			<React.Fragment>
				<MainButton onClick={onClick} className={className}>
					{text}
				</MainButton>
				{items.map((item, index) => {
					if (text === item.category && className === 'btn--active') {
						return (
							<SubButton
								key={item.id}
								onClick={() => this.onButtonClick(item)}
								className={
									subActiveIndex === index
										? 'btn--active'
										: 'btn'
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
