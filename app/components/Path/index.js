import React from 'react';
import { Wrapper } from './wrappers';

const Path = props => (
	<Wrapper
		id={props.id}
		d={props.d}
		pointerEvents="visible"
		cursor="pointer"
		className={props.className}
		onClick={event => props.onSpaceClick(event, { ...props })}
	/>
);

export default Path;
