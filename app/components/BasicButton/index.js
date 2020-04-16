import styled from 'styled-components';

const BasicButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 1em;

  font-weight: bold;
  font-size: ${props => props.theme.fontSize.get(1)};
  text-decoration: none;
  color: #fff;
  line-height: 1;

  border: 1px solid #fff;
  background: #191919;

  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;

  &:active,
  &.btn--active {
    background: #fff;
    color: #191919;
  }
`;

export default BasicButton;
