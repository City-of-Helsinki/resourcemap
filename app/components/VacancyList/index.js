import React from 'react';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import styled from 'styled-components';
import VacancyLabel from 'components/VacancyLabel';
import P from 'components/P';
import { Wrapper, Container } from './wrappers';

const VacancyList = props => {
  const icons = [
    {
      vacancy: 'available',
    },
    /*    {
      vacancy: 'soon',
    },*/
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
