import styled from 'styled-components';

export const Span = styled.span`
  display: block;
  position: ${props => (props.tooltip ? 'absolute' : 'relative')};
  top: ${props => (props.tooltip ? '13px' : 'auto')};
  right: ${props => (props.tooltip ? '9px' : 'auto')};
  display: block;
  background: transparent;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
`;
