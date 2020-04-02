import styled from 'styled-components';
import { TransitionGroup } from 'react-transition-group';
import BasicButton from 'components/BasicButton';

export const Wrapper = styled.div``;

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
  margin: 0;
  background-color: #d8d8d8;
  width: 220px;
  height: 50px;

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

export const SubButtonWrapperWithTransition = styled(TransitionGroup)`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-auto-flow: column;
  grid-gap: 13px 13px;
  justify-content: center;
`;
