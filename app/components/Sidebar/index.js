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
		this.onSlotClick = this.onSlotClick.bind(this);
	}

	onSlotClick(slot) {
		this.props.onButtonClick(slot);
	}

	render() {
		return (
			<Wrapper>
				<H2>
					<FormattedMessage {...messages.title} />
				</H2>
				<ButtonList
					spaces={this.props.spaces}
					onButtonClick={this.onSlotClick}
				/>
				<LocaleToggle />
			</Wrapper>
		);
	}
}

export default Sidebar;
