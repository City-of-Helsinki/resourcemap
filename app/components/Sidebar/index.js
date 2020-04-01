import React from 'react';
import PropTypes from 'prop-types';
import LocaleToggle from 'containers/LocaleToggle';
import { FormattedMessage } from 'react-intl';

import ButtonList from 'components/ButtonList';
import H2 from 'components/H2';
import { Wrapper } from './wrappers';
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

Sidebar.propTypes = {
  spaces: PropTypes.any,
  currentSpace: PropTypes.any,
  onSpaceCategoryClick: PropTypes.any,
  onSpaceNameClick: PropTypes.any,
};

export default Sidebar;
