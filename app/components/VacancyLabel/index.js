import React from 'react';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import styled from 'styled-components';
import VacancyIcon from 'components/VacancyIcon';
import P from 'components/P';
import messages from './messages';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & p {
    margin-left: 10px;
  }
`;

const VacancyLabel = ({ vacancy }) => {
  return (
    <Wrapper>
      <VacancyIcon className={vacancy} />
      <P>
        <FormattedMessage {...messages[vacancy || 'available']} />
      </P>
    </Wrapper>
  );
};

export default VacancyLabel;