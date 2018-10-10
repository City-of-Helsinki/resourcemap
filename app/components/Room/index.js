import React from 'react';

class Room extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fill: props.fill,
			dataInfo: props.dataInfo,
			stroke: props.stroke,
			fill: props.fill,
			originalFill: props.fill,
			points: props.points,
			active: props.active,
			onClick: props.onRoomClick,
		};
	}

	render() {
		return (
			<polygon
				id={this.state.key}
				data-info={this.state.dataInfo}
				stroke={this.state.stroke}
				fill={this.state.fill}
				points={this.state.points}
				onClick={this.props.onRoomClick}
				active={this.state.active}
			/>
		);
	}
}

export default Room;
