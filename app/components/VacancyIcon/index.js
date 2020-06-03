import styled, { css } from 'styled-components';

export const vacancyIconColoringCss = css`
  background-color: ${props => props.theme.colors.available};

  &.available {
    background-color: ${props => props.theme.colors.available};
  }

  &.taken {
    background: repeating-linear-gradient(
      45deg,
      ${props => props.theme.colors.taken},
      ${props => props.theme.colors.taken} 2px,
      #fff 3px
    );
  }

  &.closed,
  &.partlyAvailable {
    background-color: ${props => props.theme.colors.closed};
  }

  &.noData,
  &.unknown,
  &.notReservable {
    background-color: ${props => props.theme.colors.noData};
  }
`;

const VacancyIcon = styled.span`
  display: block;
  width: 15px;
  height: 15px;

  ${vacancyIconColoringCss};
`;

export default VacancyIcon;
