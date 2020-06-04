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
  padding: 10px 0;
`;

export const SubButton = styled(MainButton)`
  margin: 0;
  width: 208px;

  font-size: ${props => props.theme.fontSize.get(0)};
  font-weight: normal;

  border: none;
  background-color: ${props => props.theme.colors.darkGrey};

  transition: all 200ms linear;

  &.sub-btn {
    &--active {
      background-color: ${props => props.theme.colors.activeSpace};
      color: ${props => props.theme.colors.black};
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
