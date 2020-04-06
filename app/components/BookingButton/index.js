import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import {
  Wrapper,
  MainButton,
  SubButton,
  SubButtonWrapperWithTransition,
} from './wrappers';

const BookingButton = ({
  category,
  className,
  currentSpace,
  items,
  onClick,
  onSpaceNameClick,
  text,
}) => {
  const onButtonClick = item => {
    onSpaceNameClick(item);
  };

  const buttonItems = items
    .filter(item => item.category === category && className === 'btn--active')
    .map(item => (
      <CSSTransition key={item.id} timeout={200} classNames="slide">
        <SubButton
          key={item.id}
          onClick={() => onButtonClick(item)}
          className={
            currentSpace.id === item.id
              ? 'sub-btn--active animation-item'
              : 'sub-btn animation-item'
          }
        >
          {item.name}
        </SubButton>
      </CSSTransition>
    ));

  return (
    <Wrapper>
      <MainButton onClick={onClick} className={className}>
        {text}
      </MainButton>
      <SubButtonWrapperWithTransition className="button-animations">
        {className === 'btn--active' && buttonItems}
      </SubButtonWrapperWithTransition>
    </Wrapper>
  );
};

BookingButton.propTypes = {
  onSpaceNameClick: PropTypes.any,
  category: PropTypes.string.isRequired,
  text: PropTypes.any,
  className: PropTypes.any,
  onClick: PropTypes.any,
  items: PropTypes.any,
  currentSpace: PropTypes.any,
};

export default BookingButton;
