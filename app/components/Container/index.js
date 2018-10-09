import React from 'react';
import styled from 'styled-components';
import Sidebar from 'components/Sidebar';
import MapView from 'components/MapView';

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
