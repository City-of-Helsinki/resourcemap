import React from 'react';
import Path from 'components/Path';

// const Path = props => (
// 	<path
// 		id={props.id}
// 		d={props.d}
// 		pointerEvents="visible"
// 		cursor="pointer"
// 		className={props.className}
// 		onClick={event => props.onSpaceClick(event, { ...props })}
// 	/>
// );

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

		let classNameHighlighted =
			category === highlighted ? 'is-highlighted' : '';

		let className = '';

		if (currentSpace.id === id) {
			className = classNameHighlighted + ' clicked';
		} else {
			className = classNameHighlighted;
		}

		className = className + ' ' + available;

		return (
			<Path
				{...props}
				available={available}
				id={id}
				className={className}
				onSpaceClick={onSpaceClick}
			/>
		);
	}
}

export default Room;
