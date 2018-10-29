import React from 'react';

const Polygon = props => (
	<polygon
		id={props.id}
		points={props.d}
		pointerEvents="visible"
		cursor="pointer"
		className={props.className}
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

		this.state = {
			isActive: false,
		};
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

		console.log(this.props);

		let classNameHighlighted =
			category === highlighted ? 'is-highlighted' : '';
		let className = '';

		if (currentSpace.id === id) {
			className = classNameHighlighted + ' clicked';
		} else {
			className = classNameHighlighted;
		}

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
