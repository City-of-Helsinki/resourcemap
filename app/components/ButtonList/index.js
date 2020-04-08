import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import BookingButton from 'components/BookingButton';
import Categories from 'constants/Categories';
import Wrapper from './Wrapper';
import categoryMessages from './categoryMessages';

const categoriesInOrder = [
  Categories.LEARNING_SPACES,
  Categories.GROUP_ROOMS,
  Categories.WORKSPACES,
  Categories.STUDIOS,
  Categories.GAME_ROOMS,
  Categories.WORKSTATIONS,
  Categories.URBAN_WORKSHOP,
  Categories.MACHINE_ROOM,
  Categories.OTHER_SPACES,
];

class ButtonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
    this.onSpaceCategoryClick = this.onSpaceCategoryClick.bind(this);
    this.onSpaceNameClick = this.onSpaceNameClick.bind(this);
  }

  onSpaceCategoryClick(category, index) {
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
    const { spaces, currentRoom } = this.props;
    const { activeIndex } = this.state;

    return (
      <Wrapper className="c-buttonlist">
        {categoriesInOrder.map((category, index) => (
          <BookingButton
            key={category}
            id={category}
            category={category}
            text={<FormattedMessage {...categoryMessages[category]} />}
            items={spaces}
            currentRoom={currentRoom}
            className={activeIndex === index ? 'btn--active' : 'btn'}
            onSpaceNameClick={this.onSpaceNameClick}
            onClick={() => this.onSpaceCategoryClick(category, index)}
          />
        ))}
      </Wrapper>
    );
  }
}

ButtonList.propTypes = {
  onSpaceCategoryClick: PropTypes.any,
  onSpaceNameClick: PropTypes.any,
  currentRoom: PropTypes.object,
  spaces: PropTypes.any,
};

export default ButtonList;
