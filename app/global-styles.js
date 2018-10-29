import { injectGlobal } from 'styled-components';
import Woff from './fonts/HelsinkiGrotesk-Regular.woff';
import WoffBold from './fonts/HelsinkiGrotesk-Bold.woff';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: "HelsinkiGrotesk";
    src: url(${Woff}) format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "HelsinkiGrotesk";
    src: url(${WoffBold}) format("woff");
    font-weight: 700;
    font-style: normal;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body, p {
    font-family: HelsinkiGrotesk, 'Helvetica Neue', Helvetica, Arial;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  path.is-highlighted, path.active {
    fill: #E7F6EA;
  }
  path.clicked {
     fill: #28A745; 
  }
`;
