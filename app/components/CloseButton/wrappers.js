import React from 'react';
import styled from 'styled-components';

export const Span = styled.span`
	display: inline-block;
	position: ${props => (props.tooltip ? 'absolute' : 'relative')};
	top: ${props => (props.tooltip ? '10px' : 'auto')};
	right: ${props => (props.tooltip ? '15px' : 'auto')};
`;
