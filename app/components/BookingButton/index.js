import React from 'react';
import Chevron from 'components/Chevron';
import { MainButton, SubButton, SubButtonWrapper } from './wrappers';
import {
  Transition,
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class BookingButton extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(item) {
    this.props.onSpaceNameClick(item);
  }

  render() {
    const { text, className, onClick, items, currentSpace } = this.props;
    const clickedCategoryName = text;
    const buttonitems = items.map(item => {
      if (
        item.category === clickedCategoryName &&
        className === 'btn--active'
      ) {
        return (
          <CSSTransition key={item.id} timeout={200} classNames="slide">
            <SubButton
              key={item.id}
              onClick={() => this.onButtonClick(item)}
              className={
                currentSpace.id == item.id
                  ? 'sub-btn--active animation-item'
                  : 'sub-btn animation-item'
              }
            >
              {item.name}
            </SubButton>
          </CSSTransition>
        );
      }
    });

    return (
      <React.Fragment>
        <MainButton onClick={onClick} className={className}>
          {text}
          <Chevron className={className === 'btn--active' ? 'up' : 'down'} />
        </MainButton>
        <SubButtonWrapper>
          <TransitionGroup className="button-animations">
            {className === 'btn--active' && buttonitems}
          </TransitionGroup>
        </SubButtonWrapper>
      </React.Fragment>
    );
  }
}

export default BookingButton;
