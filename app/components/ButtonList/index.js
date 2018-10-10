import React from 'react';
import BasicButton from 'components/BasicButton';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import BookingButton from './BookingButton';

class ButtonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spaces: [
        { id: 1, name: 'Studio 1', type: 'studio' },
        { id: 2, name: 'Editointipaja', type: 'studio' },
        { id: 3, name: 'Kokoushuone 1', type: 'meetingroom' },
      ],
    };
  }

  onSlotClick(slot) {
    this.props.onButtonClick(slot);
  }

  render() {
    return (
      <Wrapper className="c-buttonlist">
        {this.state.spaces.map(btn => (
          <BookingButton key={btn.id}>{btn.name}</BookingButton>
        ))}
      </Wrapper>
    );
  }
}

export default ButtonList;
