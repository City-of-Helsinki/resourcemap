import styled from 'styled-components';
import { TransitionGroup } from 'react-transition-group';
import BasicButton from 'components/BasicButton';

export const Wrapper = styled.div``;

export const MainButton = styled(BasicButton)`
  display: block;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  padding: 10px 32px;
`;

export const SubButton = styled(MainButton)`
  margin: 0;
  width: 160px;

  font-size: 10px;
  font-weight: normal;

  border: none;
  background-color: #606060;

  transition: all 200ms linear;

  &.sub-btn {
    &--active {
      background-color: #9fc9eb;
      color: #191919;
    }
  }
`;

export const SubButtonWrapperWithTransition = styled(TransitionGroup)`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-auto-flow: column;
  grid-gap: 13px 13px;
  justify-content: center;
  margin-top: 18px;
`;
