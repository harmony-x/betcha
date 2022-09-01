import styled, { css } from "styled-components";

const Loadingkeyframes = css`
  @keyframes loading {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;

const Preloaderkeyframes = css`
  @keyframes preloader {
    from {
      opacity: 1;
      pointer-events: all;
    }
    to {
      opacity: 0;
      pointer-events: none;
    }
  }
`;

export const PreloaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  /* background-image: url("/Game Background.png"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  pointer-events: all;
  transition: opacity 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  padding: 0 120px;
  ${Preloaderkeyframes}
  animation: preloader 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 3s forwards;
`;

export const Loading = styled.div`
  width: 100%;
  height: 25px;
  position: relative;
  background-image: url("/loading.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 30px;
`;

export const Loaded = styled.div`
  position: absolute;
  height: 100%;
  width: 0%;
  background-image: url("/loaded.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 30px;
  ${Loadingkeyframes}
  animation: loading 3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
`;
