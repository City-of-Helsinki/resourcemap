import styled from 'styled-components';
import BasicButton from 'components/BasicButton';

const BookingButton = styled(BasicButton)`
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
      background-color: black;
      color: white;
    }
  }
`;

export default BookingButton;
