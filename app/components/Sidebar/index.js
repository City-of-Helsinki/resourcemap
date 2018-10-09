import React from 'react';
import LocaleToggle from 'containers/LocaleToggle';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

import Wrapper from './Wrapper';
import styled from 'styled-components';
import messages from './messages';

const H2 = styled.h2`
	font-size: 48px;
`;

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Wrapper>
				<H2>
					<FormattedMessage {...messages.title} />
				</H2>
				<LocaleToggle />
			</Wrapper>
		);
	}
}

export default Sidebar;
