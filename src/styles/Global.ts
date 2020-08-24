import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }

  body {
    background: ${({ theme }: any) => theme.body};
    color: ${({ theme }: any) => theme.neutral};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button {
    font-family:'Roboto Slab', serif;
    font-size:16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight:500;
  }

  button {
    padding:6px 16px;
    background: ${({ theme }: any) => theme.primary};
    color: ${({ theme }: any) => theme.neutral};
    font-weight: 500;
    border:0;
    border-radius: 30px;
    box-shadow: 0px 10px 20px rgba(123, 66, 246, 0.15);
    cursor: pointer;

    &:disabled{
      font-weight: 500;
      background: #d2d4d6;
      color: ${({ theme }: any) => theme.neutral};
      box-shadow: 0 0 0 0;
      cursor:not-allowed;
    }
  }

  #mapId {
    height: 100vh;
    width: 100vw;
  }
`;
