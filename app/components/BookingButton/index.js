import React from 'react';
import styled from 'styled-components';
import BasicButton from 'components/BasicButton';
import Chevron from 'components/Chevron';
import { MainButton, SubButton, SubButtonWrapper } from './wrappers';

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
				<SubButtonWrapper>
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
				</SubButtonWrapper>
			</React.Fragment>
		);
	}
}

export default BookingButton;
