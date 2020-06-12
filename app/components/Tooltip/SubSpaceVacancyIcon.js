import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import VacancyIcon from 'components/VacancyIcon';

export const SubSpaceVacancyIconVariant = Object.freeze({
  AVAILABLE: 'available',
  TAKEN: 'taken',
  CLOSED: 'closed',
});

function SubSpaceVacancyIcon({ variant }) {
  return (
    <VacancyIcon
      className={classNames({
        available: SubSpaceVacancyIconVariant.AVAILABLE === variant,
        taken: SubSpaceVacancyIconVariant.TAKEN === variant,
        closed: SubSpaceVacancyIconVariant.CLOSED === variant,
      })}
    />
  );
}

SubSpaceVacancyIcon.propTypes = {
  variant: PropTypes.oneOf(Object.values(SubSpaceVacancyIconVariant)),
};

export default SubSpaceVacancyIcon;
