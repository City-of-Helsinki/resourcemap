import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import VacancyIcon from 'components/VacancyIcon';

function SubSpaceVacancyIcon({ availableCount }) {
  return (
    <VacancyIcon
      className={classNames({
        available: availableCount > 0,
        taken: availableCount === 0,
      })}
    />
  );
}

SubSpaceVacancyIcon.propTypes = {
  availableCount: PropTypes.number,
};

export default SubSpaceVacancyIcon;
