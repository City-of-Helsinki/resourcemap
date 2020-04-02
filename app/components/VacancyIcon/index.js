import styled from 'styled-components';

const VacancyIcon = styled.span`
  display: block;
  width: 15px;
  height: 15px;

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

  &.nonReservable {
    background-color: #c2a251;
  }
`;

export default VacancyIcon;
