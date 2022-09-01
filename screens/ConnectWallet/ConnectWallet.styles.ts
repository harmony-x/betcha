import styled, { css } from "styled-components";

const Buttonframes = css`
  @keyframes buttonLoad {
    to {
      transform: scale(1);
    }
  }
`;

export const ConnectWalletWrapper = styled.main`
  width: 100%;
  height: 100vh;
  padding: 54px 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    ${Buttonframes}
    transform: scale(0);
    animation: buttonLoad 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 3.3s forwards;
  }
`;
