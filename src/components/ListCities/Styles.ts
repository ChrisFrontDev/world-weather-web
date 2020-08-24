import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  z-index: 999;
  overflow-y: auto;

  max-width: 320px;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const City = styled.div`
  margin: 6px 16px;
`;

export const MinimizedContainer = styled(Container)`
  max-width: 56px;
`;

export const CloseMinimizeButton = styled.button`
  position: fixed;
  top: 0;

  right: 0;
  border: 0;
  background: transparent;
  color: #000;
  box-shadow: 0 0 0 0;
  border-radius: 30px;
  padding-right: 20px;
`;
