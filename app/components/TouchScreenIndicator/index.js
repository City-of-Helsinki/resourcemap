import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Pointer from './svg/Pointer';
import messages from './messages';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Label = styled.span`
  margin-top: 17px;

  font-weight: bold;
  font-size: 15px;
`;

const TouchScreenIndicator = () => (
  <Wrapper>
    <Pointer />
    <Label>
      <FormattedMessage {...messages.touchScreenLabel} />
    </Label>
  </Wrapper>
);

export default TouchScreenIndicator;
