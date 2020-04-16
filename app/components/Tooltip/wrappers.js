import styled from 'styled-components';

export const TooltipContainer = styled.div`
  display: block;
  position: fixed;
  min-width: 180px;
  left: ${props => props.x}px;
  top: ${props => props.y}px;

  color: #191919;

  transform: translate3d(-50%, calc(-100% - 20px), 0);
  backface-visibility: hidden;
`;

export const TooltipWrapper = styled.div`
  position: relative;
  padding: 13px;

  background-color: white;

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
    border-top-color: transparent;
    border-width: 19px;
    margin-left: -19px;
  }
`;

export const Title = styled.h3`
  margin: 0;

  font-size: ${props => props.theme.fontSize.get(1)};
  font-weight: bold;
  color: #191919;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 13px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const RowLabel = styled.p`
  margin: 0;
  max-width: 200px;

  font-size: ${props => props.theme.fontSize.get(0)};
  color: #191919;

  &:not(:first-child) {
    margin-left: 7px;
  }
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
`;
