import { createGlobalStyle } from 'styled-components';

import { ROOT_FONT_SIZE } from 'theme';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    
    font-size: ${ROOT_FONT_SIZE}px;
  }
  body, p {
    font-family: 'HelsinkiGrotesk', 'Helvetica Neue', Helvetica, Arial;
    color: #ffffff;
  }
  #app {
    background-color: #191919;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
  p,
  label {
    line-height: 1.5em;
  }
  path {
    transition: fill 0.2s linear;
  }
  path.is-highlighted, path.active {
    fill: #28a745;  
  }
  .popup-enter .animation-item {
    opacity: 0.01;
    transform: translate(0, 20px);
  }
  .popup-enter-active .animation-item {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 120ms ease-in;
  }
  .popup-exit .animation-item {
    opacity: 1;
    transform: translate(0, 0);
  }
  .popup-exit-active .animation-item {
    opacity: 0;
    transform: translate(0, 20px);
    transition: all 120ms ease-in;
  }
  .slide-enter {
    max-height: 0;
    opacity: 0.01;
    transform: translateY(-10px);   
  }
  .slide-enter-active {
    opacity: 1;
    max-height: 100px;
    transition: all 200ms ease-in-out;
    transform: translateY(0);  
  }
  .slide-exit {
    opacity: 1;
    max-height: 100px;
    transition: all 200ms ease-in;
    transform: translateY(0);  
  }
  .slide-exit-active {
    opacity: 0.01;
    max-height: 0;
    transform: translateY(-10px);  
  }
`;

export default GlobalStyle;
