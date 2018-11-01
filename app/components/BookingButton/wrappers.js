import styled from 'styled-components';
import BasicButton from 'components/BasicButton';

export const MainButton = styled(BasicButton)`
  margin: 0 auto 1rem;
  display: block;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

export const SubButton = styled(MainButton)`
  font-size: 18px;
  line-height: 2rem;
  border-radius: 0;
  margin-bottom: 7px;
  background-color: #d8d8d8;
  width: 90%;

  transition: all 200ms linear;

  &.sub-btn {
    &--active {
      background-color: black;
      color: white;
    }
  }

  &:last-child {
    margin-bottom: 1rem;
  }
`;

export const SubButtonWrapper = styled.div``;
