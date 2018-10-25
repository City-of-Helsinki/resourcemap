import React from 'react';

const Polygon = props => {
	return (
		<polygon
			points={props.d}
			pointerEvents="visible"
			cursor="pointer"
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
			className={props.className}
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
		const {
			svgtype,
			available,
			category,
			onRoomClick,
			highlighted,
			...props
		} = this.props;

		let className = category === highlighted ? 'active' : 'in-active';
		// console.log('className', className);

		if (svgtype === 'polygon') {
			return (
				<Polygon
					{...props}
					className={className}
					available={available}
					onRoomClick={onRoomClick}
				/>
			);
		} else if (svgtype === 'path') {
			return (
				<Path
					{...props}
					className={className}
					available={available}
					onRoomClick={onRoomClick}
				/>
			);
		} else {
			// return false;
		}
	}
}

export default Room;
