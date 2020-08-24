import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchButton = styled.button`
  color: ${({ theme }: any) => theme.buttonText};
  position: absolute;
  top: 0;
  z-index: 999;
  left: auto;
  padding: 16px 50px;
  margin-top: 16px;
  border-radius: 30px;
`;
