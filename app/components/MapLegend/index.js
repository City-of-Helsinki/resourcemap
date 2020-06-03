import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Legend from 'components/Legend';
import VacancyLabel from 'components/VacancyLabel';
import messages from 'components/MapOfOodi/messages';
import { Wrapper, Container } from './wrappers';

// 15x15 px red triangle
const RedTriangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 7.5px 15px 7.5px;
  border-color: transparent transparent #db2619 transparent;
`;

const MapLegend = () => {
  const vacancyStates = [
    {
      vacancy: 'available',
    },
    {
      vacancy: 'taken',
    },
    {
      vacancy: 'closed',
    },
  ];

  return (
    <Wrapper>
      <Container>
        <Legend
          icon={<RedTriangle />}
          label={<FormattedMessage {...messages.youAreHere} />}
        />
      </Container>
      {vacancyStates.map(item => (
        <Container key={item.vacancy}>
          <VacancyLabel vacancy={item.vacancy} />
        </Container>
      ))}
    </Wrapper>
  );
};

export default MapLegend;
