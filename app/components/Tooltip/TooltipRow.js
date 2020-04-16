import React from 'react';
import PropTypes from 'prop-types';

import { Row } from './wrappers';

const TooltipRow = ({ children }) => <Row>{children}</Row>;

TooltipRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TooltipRow;
