import React from 'react';
import LocaleToggle from 'containers/LocaleToggle';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

import ButtonList from 'components/ButtonList';
import H2 from 'components/H2';
import { Wrapper } from './wrappers';
import styled from 'styled-components';
import messages from './messages';

const Sidebar = props => {
  const { spaces, currentSpace } = props;
  const onSpaceCategoryClick = slot => {
    props.onSpaceCategoryClick(slot);
  };

  const onSpaceNameClick = id => {
    props.onSpaceNameClick(id);
  };
  return (
    <Wrapper>
      <H2>
        <FormattedMessage {...messages.title} />
      </H2>
      <ButtonList
        currentSpace={currentSpace}
        spaces={spaces}
        onSpaceCategoryClick={onSpaceCategoryClick}
        onSpaceNameClick={onSpaceNameClick}
      />
      <LocaleToggle />
    </Wrapper>
  );
};

export default Sidebar;
