import React from 'react';
import styled from 'styled-components';

import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import Sidebar from 'components/Sidebar';
import MapView from 'components/MapView';

import messages from './messages';

const Wrapper = styled.section`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: stretch;
`;

class Container extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Wrapper>
				<MapView />
				<Sidebar />
			</Wrapper>
		);
	}
}

export default Container;
