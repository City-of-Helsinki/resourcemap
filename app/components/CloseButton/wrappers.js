import styled from 'styled-components';

export const Span = styled.span`
  display: block;
  position: ${props => (props.tooltip ? 'absolute' : 'relative')};
  top: ${props => (props.tooltip ? '13px' : 'auto')};
  right: ${props => (props.tooltip ? '13px' : 'auto')};
  display: block;
  background: transparent;
  text-align: center;
  cursor: pointer;
`;
