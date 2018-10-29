import React from 'react';

const Polygon = props => (
	<polygon
		id={props.id}
		points={props.d}
		pointerEvents="visible"
		cursor="pointer"
		onClick={event => props.onRoomClick(event, { ...props })}
	/>
);

const Path = props => (
	<path
		id={props.id}
		d={props.d}
		pointerEvents="visible"
		cursor="pointer"
		className={props.className}
		onClick={event => props.onSpaceClick(event, { ...props })}
	/>
);

class Room extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			svgtype,
			available,
			category,
			onSpaceClick,
			highlighted,
			currentSpace,
			id,
			...props
		} = this.props;

		let className = category === highlighted ? 'is-highlighted' : '';

		if (svgtype === 'polygon') {
			return (
				<Polygon
					{...props}
					id={id}
					className={className}
					onSpaceClick={onSpaceClick}
				/>
			);
		} else if (svgtype === 'path') {
			return (
				<Path
					{...props}
					id={id}
					className={className}
					onSpaceClick={onSpaceClick}
				/>
			);
		} else {
			// return false;
		}
	}
}

export default Room;
