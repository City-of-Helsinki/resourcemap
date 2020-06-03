import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from '../messages';

export default () => (
  <>
    <polygon points="338.06 92.06 331.62 105.79 344.51 105.79" fill="#DB2719" />
    <text
      fill="#FFFFFF"
      fontFamily="HelsinkiGrotesk-Bold, Helsinki Grotesk"
      fontSize="10"
      fontWeight="bold"
      line-spacing="10.279998"
    >
      <tspan x="282" y="101">
        <FormattedMessage {...messages.youAreHere}>
          {text => text}
        </FormattedMessage>
      </tspan>
    </text>
  </>
);
