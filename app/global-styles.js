import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

import { ROOT_FONT_SIZE } from 'theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'HelsinkiGrotesk';
    src: url('https://makasiini.hel.ninja/delivery/HelsinkiGrotesk/565d73a693abe0776c801607ac28f0bf.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    text-rendering: optimizeLegibility;
  }
  @font-face {
    font-family: 'HelsinkiGrotesk';
    src: url('https://makasiini.hel.ninja/delivery/HelsinkiGrotesk/5bb29e3b7b1d3ef30121229bbe67c3e1.woff') format('woff');
    font-weight: 400;
    font-style: italic;
    text-rendering: optimizeLegibility;
  }
  @font-face {
    font-family: 'HelsinkiGrotesk';
    src: url('https://makasiini.hel.ninja/delivery/HelsinkiGrotesk/7c46f288e8133b87e6b12b45dac71865.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    text-rendering: optimizeLegibility;
  }
  @font-face {
    font-family: 'HelsinkiGrotesk';
    src: url('https://makasiini.hel.ninja/delivery/HelsinkiGrotesk/e62dc97e83a385e4d8cdc939cf1e4213.woff') format('woff');
    font-weight: 500;
    font-style: italic;
    text-rendering: optimizeLegibility;
  }
  @font-face {
    font-family: 'HelsinkiGrotesk';
    src: url('https://makasiini.hel.ninja/delivery/HelsinkiGrotesk/533af26cf28d7660f24c2884d3c27eac.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    text-rendering: optimizeLegibility;
  }
  @font-face {
    font-family: 'HelsinkiGrotesk';
    src: url('https://makasiini.hel.ninja/delivery/HelsinkiGrotesk/20d494430c87e15e194932b729d48270.woff') format('woff');
    font-weight: 700;
    font-style: italic;
    text-rendering: optimizeLegibility;
  }
  @font-face {
    font-family: 'HelsinkiGrotesk';
    src: url('https://makasiini.hel.ninja/delivery/HelsinkiGrotesk/a50a1bd245ce63abcc0d1da80ff790d2.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    text-rendering: optimizeLegibility;
  }
  @font-face {
    font-family: 'HelsinkiGrotesk';
    src: url('https://makasiini.hel.ninja/delivery/HelsinkiGrotesk/62a1781d8b396fbb025b0552cf6304d2.woff') format('woff');
    font-weight: 900;
    font-style: italic;
    text-rendering: optimizeLegibility;
  }
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

  /* Room paths */
  .roomPath {
    fill: ${props => props.theme.colors.roomDefaultFill};
    stroke: ${props => props.theme.colors.roomDefaultStroke};
    stroke-width: 2px;
  }

  .roomPath.available.is-highlighted {
    fill: ${props => darken(0.2, props.theme.colors.roomAvailableFill)};
  }
  .roomPath.available.clicked {
    fill: ${props => props.theme.colors.roomAvailableFill};
  }

  .roomPath.closed.is-highlighted {
    fill: ${props => darken(0.2, props.theme.colors.roomClosedFill)};
  }
  .roomPath.closed.clicked {
    fill: ${props => props.theme.colors.roomClosedFill};
  }

  .roomPath.noData.is-highlighted,
  .roomPath.unknown.is-highlighted {
    fill: ${props => darken(0.2, props.theme.colors.roomNotReservableFill)};
  }
  .roomPath.noData.clicked,
  .roomPath.unknown.clicked {
    fill: ${props => props.theme.colors.roomNotReservableFill};
  }

  .roomPath.is-highlighted.taken {
    fill: url(#takenPatternHighlighted);
  }
  .roomPath.clicked.taken {
    fill: url(#takenPatternClicked);
  }

  .roomPath.dashedBorder {
    fill: ${props => props.theme.colors.roomDefaultStroke};

    transition: none;
  }

  .roomPath.dashedBorder.is-highlighted,
  .roomPath.dashedRoom.is-highlighted {
    fill: ${props => props.theme.colors.roomDefaultStroke};
  }

  .roomPath.dashedBorder.clicked,
  .roomPath.dashedRoom.clicked {
    fill: ${props => props.theme.colors.roomDashedBorderSelectedFill};
  }
`;

export default GlobalStyle;
