import React from 'react';
import PropTypes from 'prop-types';

import { Row, RowLabel } from './wrappers';
import SubSpaceVacancyIcon, {
  SubSpaceVacancyIconVariant,
} from './SubSpaceVacancyIcon';

function getIconVariant(isClosed, availableCount) {
  if (isClosed) {
    return SubSpaceVacancyIconVariant.CLOSED;
  }

  if (availableCount > 0) {
    return SubSpaceVacancyIconVariant.AVAILABLE;
  }

  return SubSpaceVacancyIconVariant.CLOSED;
}

const TooltipGroup = ({ availableCount, isClosed, label }) => {
  const iconVariant = getIconVariant(isClosed, availableCount);

  return (
    <Row>
      <SubSpaceVacancyIcon variant={iconVariant} />
      <RowLabel>{label}</RowLabel>
    </Row>
  );
};

TooltipGroup.propTypes = {
  availableCount: PropTypes.number.isRequired,
  isClosed: PropTypes.bool.isRequired,
  label: PropTypes.node.isRequired,
};

export default TooltipGroup;
