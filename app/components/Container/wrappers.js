import styled from 'styled-components';

export const Wrapper = styled.section`
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
  margin-bottom: 19px;
`;

export const ButtonsWrapper = styled.div`
  flex: 1 0;
`;
