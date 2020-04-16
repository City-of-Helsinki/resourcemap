import styled from 'styled-components';

const P = styled.p`
  font-size: ${props => props.theme.fontSize.get(4)};
  margin-bottom: 20px;

  &.light {
    color: #191919;
  }

  &.small {
    font-size: ${props => props.theme.fontSize.get(0)};
  }
`;

export default P;
