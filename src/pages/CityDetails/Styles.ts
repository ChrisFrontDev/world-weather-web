import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }: any) => theme.primary};
  color: ${({ theme }: any) => theme.neutral};
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
