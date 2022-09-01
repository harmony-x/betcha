import styled from "styled-components";
import {
  StyledModalBoxTwoProps,
  StyledModalContentProps,
  StyledModalHeadingWrapperProps,
  StyledModalWrapperProps,
} from "./ModalTwo.types";

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
  width: 840px;
  height: 547px;
  z-index: 1;
  background: linear-gradient(94.66deg, #feb92f 2.34%, #fa8841 98.19%);
  border-radius: 44px;
`;

export const StyledModalBoxOne = styled.div`
  position: absolute;
  width: 780px;
  height: 488px;
  border-radius: 44px;
  left: 30px;
  top: 29px;
  background-color: ${({ theme }) => theme.colors.primary3};
  z-index: -1;
`;

export const StyledModalBoxTwo = styled.div<StyledModalBoxTwoProps>`
  width: 100%;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.colors.primary5};
  border-radius: 44px;
  margin-top: 12px;
  height: 488px;
`;

export const StyledModalContent = styled.div<StyledModalContentProps>`
  width: 100%;
  max-height: ${({ maxHeight }) => maxHeight};
  overflow-y: auto;
`;

export const StyledModalHeadingWrapper = styled.div<StyledModalHeadingWrapperProps>`
  width: 780px;
  height: ${({ height }) => height ?? "125px"};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.colors.primary7};
  border-radius: 44px 44px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModalCloseBtn = styled.button`
  position: absolute;
  top: -30px;
  right: -20px;
  cursor: pointer;
`;
