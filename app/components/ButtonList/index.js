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
      activeChild: null,
    };
    this.onSpaceCategoryClick = this.onSpaceCategoryClick.bind(this);
    this.onSpaceNameClick = this.onSpaceNameClick.bind(this);
  }

  onSpaceCategoryClick(event, category, index) {
    this.props.onSpaceCategoryClick(category);
    const btnindex = index === this.state.activeIndex ? null : index;

    this.setState(function(prevState, props) {
      return {
        activeIndex: btnindex,
        activeChild: category,
      };
    });
  }

  onSpaceNameClick(id) {
    this.props.onSpaceNameClick(id);
  }

  render() {
    const { spaces, currentSpace } = this.props;
    const { activeIndex, activeChild } = this.state;
    const uniqueCats = [...new Set(spaces.map(({ category }) => category))];

    return (
      <Wrapper className="c-buttonlist">
        {uniqueCats.map((btn, index) => (
          <BookingButton
            key={btn}
            id={btn}
            text={btn}
            items={spaces}
            currentSpace={currentSpace}
            className={activeIndex === index ? 'btn--active' : 'btn'}
            onSpaceNameClick={this.onSpaceNameClick}
            onClick={event => this.onSpaceCategoryClick(event, btn, index)}
          >
            {btn}
          </BookingButton>
        ))}
      </Wrapper>
    );
  }
}

export default ButtonList;
