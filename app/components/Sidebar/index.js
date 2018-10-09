import React from 'react';
import LocaleToggle from 'containers/LocaleToggle';

import Wrapper from './Wrapper';
import styled from 'styled-components';

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
				<H2>Tilat</H2>
				<LocaleToggle />
			</Wrapper>
		);
	}
}

export default Sidebar;
