import ModalBg from "$svgs/ModalBg";
import styled from "styled-components";
import { StyledModalWrapperProps } from "./Modal.types";

export const StyledModalWrapper = styled.div<StyledModalWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
  z-index: 1000;
`;

export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  z-index: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const StyledModalBody = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 721px;
  height: 442px;
  z-index: 1;
`;

export const StyledModalBodyBg = styled(ModalBg)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const StyledModalContent = styled.div`
  width: 100%;
  height: 100%;
  z-index: 0;
`;
