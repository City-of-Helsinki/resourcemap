import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Legend from 'components/Legend';
import SpaceAvailability from 'constants/SpaceAvailability';
import VacancyIcon from 'components/VacancyIcon';
import messages from './messages';

const VARIANTS = ['dark', 'light'];
const VACANCIES = Object.values(SpaceAvailability);
// This is a special state that categorizes SpaceAvailability.NO_DATA
// and SpaceAvailability.UNKNOWN into a more human friendly concept.
const VACANCY_NOT_RESERVABLE = 'notReservable';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin: 0;
    margin-left: 10px;
  }
`;

const VacancyLabel = ({ vacancy, variant = VARIANTS[0] }) => (
  <Legend
    icon={<VacancyIcon className={vacancy} />}
    label={<FormattedMessage {...messages[vacancy || 'available']} />}
    labelClass={variant}
  />
);

VacancyLabel.propTypes = {
  vacancy: PropTypes.oneOf([...VACANCIES, VACANCY_NOT_RESERVABLE]),
  variant: PropTypes.oneOf(VARIANTS),
};

export default VacancyLabel;
