import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url(./fonts/HelsinkiGrotesk.css);
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body, p {
    font-family: 'HelsinkiGrotesk', 'Helvetica Neue', Helvetica, Arial;
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

  path {
    transition: fill 0.2s linear;
  }

  path.is-highlighted, path.active {
    fill: #E7F6EA;
  }
  path.clicked {
    &.available {
     fill: #28A745 !important;       
    }

    &.soon {
      fill: #f5a623 !important;
    }

    &.taken {
      fill: #d0021b !important;
    }
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

`;
