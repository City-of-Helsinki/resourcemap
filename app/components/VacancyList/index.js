import React from 'react';
import VacancyLabel from 'components/VacancyLabel';
import { Wrapper, Container } from './wrappers';

const VacancyList = () => {
  const icons = [
    {
      vacancy: 'available',
    },
    /*    {
      vacancy: 'soon',
    }, */
    {
      vacancy: 'taken',
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
