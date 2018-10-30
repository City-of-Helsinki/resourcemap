import styled from 'styled-components';

export const Wrapper = styled.path`
	&.is-highlighted {
		&.available {
			fill: #e7f6ea;
		}

		&.soon {
			fill: #f3cb8d;
		}

		&.taken {
			fill: #dd5969;
		}
	}
`;
