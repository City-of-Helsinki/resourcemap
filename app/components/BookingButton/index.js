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
			background-color: #33aa33;
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

		this.state = {
			subActiveIndex: null,
		};

		this.onButtonClick = this.onButtonClick.bind(this);
	}

	componentDidMount() {
		// console.log('BookingButton mounted', this.props.text);
	}

	componentDidUpdate(prevProps, props) {
		if (this.props.className === prevProps.className) {
			// this.setState(function(prevState, props) {
			// 	return {
			// 		subActiveIndex: null,
			// 	};
			// });
			console.log('BookingButton updated!', this.props.className);
		}
		// console.log('BookingButton updated!', this.props.className);
	}

	onButtonClick(item) {
		this.props.onSpaceNameClick(item);
		let btnindex = item.id === this.state.subActiveIndex ? null : item.id;

		// console.log(item);

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
			id,
			onSpaceNameClick,
			currentSpace,
		} = this.props;

		const clickedCategoryName = text;
		const { subActiveIndex } = this.state;

		console.log(currentSpace);

		return (
			<React.Fragment>
				<MainButton onClick={onClick} className={className}>
					{text}
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
									subActiveIndex === item.id
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
