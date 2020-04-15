import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: stretch;
  flex-direction: column;
  padding: 69px 100px 0;
`;

export const MapWrapper = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 38px;
`;

export const HorizontalLine = styled.div`
  flex: 0 0 2px;
  width: 100%;
  margin-bottom: 23px;

  background: #fff;
`;

export const ControlsWrapper = styled.div`
  flex: 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 19px;
`;

export const ButtonsWrapper = styled.div`
  flex: 1 0;
`;

export const FloorLabel = styled.span`
  font-weight: normal;
`;

export const QRCodeWrapper = styled.div`
  position: absolute;
  top: 69px;
  right: 100px;
`;

export const QRCodeDescription = styled.span`
  font-size: ${props => props.theme.fontSize.get(1)};
  font-weight: bold;
`;

export const QRCodeLink = styled.span`
  font-size: ${props => props.theme.fontSize.get(0)};
`;
