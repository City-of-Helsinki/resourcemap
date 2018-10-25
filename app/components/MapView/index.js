import React from 'react';
import styled from 'styled-components';
import BgImg from 'images/sidebar-bg.png';
import MapContainer from 'components/MapContainer';

const MapItem = styled.div`
	width: 70%;
`;

const MapItemBACKUP = styled.div`
	background-image: url(${BgImg});
	background-repeat: repeat-y;
	background-size: auto 100%;
	background-position: 100% 0;
	width: 70%;
`;

const MapView = props => {
	const { spaces, structures, icons, highlighted } = props;
	return (
		<MapItem>
			<MapContainer
				spaces={spaces}
				structures={structures}
				icons={icons}
				highlighted={highlighted}
			/>
		</MapItem>
	);
};

export default MapView;
