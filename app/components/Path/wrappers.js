import styled from 'styled-components';

export const Wrapper = styled.path`
  &.is-highlighted {
    &.available {
      fill: rgba(40, 167, 69, 0.36);
    }

    &.soon {
      fill: #f3cb8d;
    }

    &.taken {
      fill: #dd5969;
    }

    &.nodata {
      fill: #959595;
    }
  }

  &.clicked {
    &.available {
      fill: rgba(40, 167, 69, 1);
    }

    &.soon {
      fill: #f5a623;
    }

    &.taken {
      fill: #d0021b;
    }

    &.nodata {
      fill: #5c5c5c;
    }
  }
`;
