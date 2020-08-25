import styled from 'styled-components';

export const Button = styled.button`
  color: ${({ theme }: any) => theme.buttonText};
  position: absolute;
  bottom: 0;
  z-index: 999;
  left: 10px;
  padding: 16px 16px;
  margin-bottom: 16px;
  border-radius: 30px;
`;
