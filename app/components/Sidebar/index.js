import React from 'react';
import LocaleToggle from 'containers/LocaleToggle';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

import ButtonList from 'components/ButtonList';
import H2 from 'components/H2';
import Wrapper from './Wrapper';
import styled from 'styled-components';
import messages from './messages';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.onSpaceCategoryClick = this.onSpaceCategoryClick.bind(this);
		this.onSpaceNameClick = this.onSpaceNameClick.bind(this);
	}

	onSpaceCategoryClick(slot) {
		this.props.onSpaceCategoryClick(slot);
	}

	onSpaceNameClick(id) {
		this.props.onSpaceNameClick(id);
	}

	render() {
		const { spaces, currentSpace } = this.props;
		return (
			<Wrapper>
				<H2>
					<FormattedMessage {...messages.title} />
				</H2>
				<ButtonList
					currentSpace={currentSpace}
					spaces={spaces}
					onSpaceCategoryClick={this.onSpaceCategoryClick}
					onSpaceNameClick={this.onSpaceNameClick}
				/>
				<LocaleToggle />
			</Wrapper>
		);
	}
}

export default Sidebar;
