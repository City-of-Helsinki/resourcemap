import React from 'react';
import styled from 'styled-components';

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
    border-width: 30px;
    margin-left: -30px;
  }
  &:before {
    border-color: rgba(0, 0, 0, 0);
    border-top-color: #000;
    border-width: 36px;
    margin-left: -36px;
  }
`;

export const TooltipContainer = styled.div`
  display: block;
  position: fixed;
  width: 240px;
  height: 240px;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  transform: translate(-50%, -100%);
`;
