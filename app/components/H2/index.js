import styled from 'styled-components';

const H2 = styled.h2`
  text-align: left;
  font-size: ${props => props.theme.fontSize.get(5)};
`;

export default H2;
