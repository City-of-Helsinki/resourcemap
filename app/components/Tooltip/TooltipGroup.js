import React from 'react';
import PropTypes from 'prop-types';

import { Row, RowLabel } from './wrappers';
import SubSpaceVacancyIcon from './SubSpaceVacancyIcon';

const TooltipGroup = ({ availableCount, label, totalCount }) => (
  <Row>
    <SubSpaceVacancyIcon
      availableCount={availableCount}
      totalCount={totalCount}
    />
    <RowLabel>{label}</RowLabel>
  </Row>
);

TooltipGroup.propTypes = {
  availableCount: PropTypes.number.isRequired,
  label: PropTypes.node.isRequired,
  totalCount: PropTypes.number.isRequired,
};

export default TooltipGroup;
