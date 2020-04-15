import styled from 'styled-components';

const H1 = styled.h1`
  font-size: ${props => props.theme.fontSize.get(6)};
  margin-top: 0;
  margin-bottom: 34px;
`;

export default H1;
