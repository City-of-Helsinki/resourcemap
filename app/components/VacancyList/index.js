import React from 'react';
import VacancyLabel from 'components/VacancyLabel';
import { Wrapper, Container } from './wrappers';

const VacancyList = () => {
  const icons = [
    {
      vacancy: 'available',
    },
    {
      vacancy: 'taken',
    },
    {
      vacancy: 'nonReservable',
    },
  ];

  return (
    <Wrapper>
      {icons.map(item => (
        <Container key={item.vacancy}>
          <VacancyLabel vacancy={item.vacancy} />
        </Container>
      ))}
    </Wrapper>
  );
};

export default VacancyList;
