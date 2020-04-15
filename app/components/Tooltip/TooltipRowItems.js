import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Row as OneItemRow } from './wrappers';

const Row = styled(OneItemRow)`
  justify-content: space-between;
`;

const RowItem = styled.div`
  display: flex;
  align-items: center;
`;

const TooltipRowItems = ({ items }) => (
  <Row>
    {items.map(item => (
      <RowItem key={item.id}>{item.content}</RowItem>
    ))}
  </Row>
);

TooltipRowItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TooltipRowItems;
