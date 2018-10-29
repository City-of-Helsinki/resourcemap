import React from 'react';
import LocaleToggle from 'containers/LocaleToggle';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

import ButtonList from 'components/ButtonList';

import Wrapper from './Wrapper';
import styled from 'styled-components';
import messages from './messages';

const H2 = styled.h2`
	font-size: 48px;
`;

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
