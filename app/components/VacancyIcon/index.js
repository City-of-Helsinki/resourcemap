import styled, { css } from 'styled-components';

export const vacancyIconColoringCss = css`
  background-color: #00b62a;

  &.available {
    background-color: #00b62b;
  }

  &.taken {
    background: repeating-linear-gradient(
      45deg,
      #ed2127,
      #ed2127 2px,
      #fff 3px
    );
  }

  &.closed,
  &.partlyAvailable {
    background-color: #c2a251;
  }

  &.noData,
  &.unknown {
    background-color: grey;
  }
`;

const VacancyIcon = styled.span`
  display: block;
  width: 15px;
  height: 15px;

  ${vacancyIconColoringCss};
`;

export default VacancyIcon;
