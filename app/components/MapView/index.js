import React from 'react';
import styled from 'styled-components';
import BgImg from 'images/sidebar-bg.png';

const MapItem = styled.div`
	background-image: url(${BgImg});
	background-repeat: repeat-y;
	background-size: auto 100%;
	background-position: 100% 0;
	width: 75%;
`;

const MapView = props => {
	return (
		<MapItem>
			{' '}
			<p>Kuva tähän</p>{' '}
		</MapItem>
	);
};

export default MapView;
