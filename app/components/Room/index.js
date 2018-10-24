import React from 'react';

const Polygon = props => {
	return (
		<polygon
			points={props.d}
			pointerEvents="visible"
			cursor="pointer"
			fill="#FF0000"
			onClick={event => props.onRoomClick(event, { ...props })}
		/>
	);
};

const Path = props => {
	return (
		<path
			d={props.d}
			pointerEvents="visible"
			cursor="pointer"
			fill="#FFFFFF"
			onClick={event => props.onRoomClick(event, { ...props })}
		/>
	);
};

class Room extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { svgtype, available, onRoomClick, ...props } = this.props;

		if (svgtype === 'polygon') {
			return (
				<Polygon
					{...props}
					available={available}
					onRoomClick={onRoomClick}
				/>
			);
		} else if (svgtype === 'path') {
			return (
				<Path
					{...props}
					available={available}
					onRoomClick={onRoomClick}
				/>
			);
		} else {
			return false;
		}
	}
}

export default Room;
