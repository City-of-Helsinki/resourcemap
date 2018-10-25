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

const Path = ({ forwardedRef, ...props }) => (
	<path
		ref={forwardedRef}
		id={props.id}
		d={props.d}
		pointerEvents="visible"
		cursor="pointer"
		className={props.className}
		onClick={event => props.onRoomClick(event, { ...props })}
	/>
);

const withAdvanced = Component => {
	const forwardRef = function(props, ref) {
		return <Component forwardedRef={ref} {...props} />;
	};
	return React.forwardRef(forwardRef);
};

const RoomAdvanced = withAdvanced(Path);

class Room extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		// console.log(this.getBoundingClientRect());
	}

	render() {
		const {
			svgtype,
			available,
			category,
			onRoomClick,
			highlighted,
			roomRef,
			...props
		} = this.props;

		let className = category === highlighted ? 'active' : 'in-active';

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
				<RoomAdvanced
					{...props}
					ref={roomRef}
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
