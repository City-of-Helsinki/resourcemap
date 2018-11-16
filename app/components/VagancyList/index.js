import React from 'react';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import styled from 'styled-components';
import VagancyIcon from 'components/VagancyIcon';
import P from 'components/P';
import { Wrapper, Container } from './wrappers';
import messages from './messages';

const VagancyList = props => {
  const icons = [
    {
      vagancy: 'available',
    },
    //		{
    //			vagancy: 'soon',
    //		},
    {
      vagancy: 'taken',
    },
  ];

  return (
    <Wrapper>
      {icons.map(item => (
        <Container key={item.vagancy}>
          <VagancyIcon className={item.vagancy} />
          <P>
            <FormattedMessage {...messages[item.vagancy]} />
          </P>
        </Container>
      ))}
    </Wrapper>
  );
};

export default VagancyList;
