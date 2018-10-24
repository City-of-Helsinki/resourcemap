import React from 'react';

const Polygon = props => {
	return (
		<polygon
			points={props.d}
			pointerEvents="visible"
			cursor="pointer"
			fill="#FF0000"
			onClick={() => props.onClick(props.info)}
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
			onClick={() => props.onClick(props.info)}
		/>
	);
};

class Room extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let { svgtype, available, onRoomClick, ...props } = this.props;
		const Shape = svgtype;
		console.log(onRoomClick);

		if (Shape === 'polygon') {
			return (
				<Polygon
					{...props}
					available={available}
					onClick={onRoomClick}
				/>
			);
		} else if (Shape === 'path') {
			return (
				<Path {...props} available={available} onClick={onRoomClick} />
			);
		} else {
			return <h1>NO type</h1>;
		}
	}
}

export default Room;
