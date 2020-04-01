import React from 'react';
import PropTypes from 'prop-types';
import BookingButton from 'components/BookingButton';
import Wrapper from './Wrapper';

class ButtonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
    this.onSpaceCategoryClick = this.onSpaceCategoryClick.bind(this);
    this.onSpaceNameClick = this.onSpaceNameClick.bind(this);
  }

  onSpaceCategoryClick(event, category, index) {
    this.props.onSpaceCategoryClick(category);
    const btnindex = index === this.state.activeIndex ? null : index;

    // eslint-disable-next-line func-names, no-unused-vars
    this.setState(function(prevState, props) {
      return {
        activeIndex: btnindex,
      };
    });
  }

  onSpaceNameClick(id) {
    this.props.onSpaceNameClick(id);
  }

  render() {
    const { spaces, currentSpace } = this.props;
    const { activeIndex } = this.state;
    const uniqueCats = [...new Set(spaces.map(space => space.category))];

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

ButtonList.propTypes = {
  onSpaceCategoryClick: PropTypes.any,
  onSpaceNameClick: PropTypes.any,
  currentSpace: PropTypes.any,
  spaces: PropTypes.any,
};

export default ButtonList;
