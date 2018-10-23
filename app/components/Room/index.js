import React from 'react';

const Polygon = props => {
	return (
		<polygon
			info={props.info}
			points={props.d}
			pointerEvents="visible"
			cursor="pointer"
		/>
	);
};

const Path = props => {
	return (
		<path
			info={props.info}
			d={props.d}
			pointerEvents="visible"
			cursor="pointer"
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
		console.log(Shape);

		if (Shape === 'polygon') {
			return (
				<Polygon
					{...props}
					available={available}
					onClick={() => this.props.onRoomClick(info)}
				/>
			);
		} else if (Shape === 'path') {
			return (
				<Path
					{...props}
					available={available}
					onClick={() => this.props.onRoomClick(info)}
				/>
			);
		} else {
			return <h1>NO type</h1>;
		}
	}
}

export default Room;
