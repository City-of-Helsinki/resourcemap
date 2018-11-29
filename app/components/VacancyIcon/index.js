import styled from 'styled-components';

const VacancyIcon = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #00b62a;

  &.available {
    background-color: #00b62a;
  }

  &.soon {
    background-color: #f5a623;
  }

  &.taken {
    background-color: #d0021b;
  }
`;

export default VacancyIcon;
