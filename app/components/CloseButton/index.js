import React from 'react';
import styled from 'styled-components';
import { Span } from './wrappers';

const CloseButton = props => {
	return <Span {...props}>&times;</Span>;
};

export default CloseButton;
