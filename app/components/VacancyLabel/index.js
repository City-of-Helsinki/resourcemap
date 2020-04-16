import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import classNames from 'classnames';

import SpaceAvailability from 'constants/SpaceAvailability';
import VacancyIcon from 'components/VacancyIcon';
import P from 'components/P';
import messages from './messages';

const VARIANTS = ['dark', 'light'];
const VACANCIES = Object.values(SpaceAvailability);

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin: 0;
    margin-left: 10px;
  }
`;

const VacancyLabel = ({ vacancy, variant = VARIANTS[0] }) => (
  <Wrapper>
    <VacancyIcon className={vacancy} />
    <P className={classNames(['small', variant])}>
      <FormattedMessage {...messages[vacancy || 'available']} />
    </P>
  </Wrapper>
);

VacancyLabel.propTypes = {
  vacancy: PropTypes.oneOf(VACANCIES),
  variant: PropTypes.oneOf(VARIANTS),
};

export default VacancyLabel;
