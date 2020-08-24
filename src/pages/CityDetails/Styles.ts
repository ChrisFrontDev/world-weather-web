import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(117.03deg, #7b42f6 0%, #b01eff 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin-top: 16px;

    span {
      & + span {
        margin-left: 16px;
      }
    }
  }
`;
