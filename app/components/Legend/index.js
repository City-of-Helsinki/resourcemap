import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';

import P from 'components/P';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin: 0;
    margin-left: 10px;
  }
`;

const Legend = ({ icon, label, labelClass }) => (
  <Wrapper>
    {icon}
    <P className={classNames(['small', labelClass])}>{label}</P>
  </Wrapper>
);

Legend.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.node,
  labelClass: PropTypes.string,
};

export default Legend;
