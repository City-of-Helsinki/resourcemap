import React from 'react';
import PropTypes from 'prop-types';
import Chevron from 'components/Chevron';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
    const { text, className, onClick, items, currentSpace } = this.props;
    const clickedCategoryName = text;
    // eslint-disable-next-line consistent-return, array-callback-return
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
                currentSpace.id === item.id
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

BookingButton.propTypes = {
  onSpaceNameClick: PropTypes.any,
  text: PropTypes.any,
  className: PropTypes.any,
  onClick: PropTypes.any,
  items: PropTypes.any,
  currentSpace: PropTypes.any,
};

export default BookingButton;
