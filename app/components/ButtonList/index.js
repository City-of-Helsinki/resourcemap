import React from 'react';
import BasicButton from 'components/BasicButton';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import BookingButton from 'components/BookingButton';

class ButtonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
      condition: false,
    };
    this.onSlotClick = this.onSlotClick.bind(this);
  }

  onSlotClick(event, slot, index) {
    this.props.onButtonClick(slot);
    let btnindex = index === this.state.activeIndex ? null : index;
    console.log('slot', slot, event.target);

    this.setState(function(prevState, props) {
      return {
        activeIndex: btnindex,
        condition: !this.state.condition,
      };
    });
  }

  render() {
    const { spaces } = this.props;
    const { activeIndex } = this.state;
    const uniqueCats = [...new Set(spaces.map(({ category }) => category))];
    let className = '';

    return (
      <Wrapper className="c-buttonlist">
        {uniqueCats.map((btn, index) => (
          <BookingButton
            key={btn}
            id={btn}
            text={btn}
            className={activeIndex === index ? 'btn--active' : 'btn'}
            onClick={event => this.onSlotClick(event, btn, index)}
          >
            {btn}
          </BookingButton>
        ))}
      </Wrapper>
    );
  }
}

export default ButtonList;
