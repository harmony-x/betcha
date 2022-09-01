import styled from "styled-components";
import { StyledStyledButtonOneProps } from "./Button.types";

export const StyledButton = styled.button<StyledStyledButtonOneProps>`
  cursor: pointer;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  span {
    z-index: 1;
  }
`;

export const StyledButtonBtnBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  left: 0;
  right: 0;
  svg {
    width: 100%;
    height: 100%;
  }
`;
