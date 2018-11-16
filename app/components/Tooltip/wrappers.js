import styled from 'styled-components';

export const TooltipContainer = styled.div`
  display: block;
  position: fixed;
  width: 240px;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  transform: translate3d(-50%, calc(-100% - 20px), 0);
  backface-visibility: hidden;
  & h3 {
    margin-top: 0;
  }
`;

export const TooltipWrapper = styled.div`
  position: relative;
  background-color: white;
  border: 3px solid black;
  padding: 20px;
  &:after,
  &:before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(255, 255, 255, 0);
    border-top-color: #fff;
    border-width: 15px;
    margin-left: -15px;
  }
  &:before {
    border-color: rgba(0, 0, 0, 0);
    border-top-color: #000;
    border-width: 19px;
    margin-left: -19px;
  }
`;
