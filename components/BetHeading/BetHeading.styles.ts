import styled from "styled-components";
import { StyledBetHeadingProps } from "./BetHeading.types";

export const StyledBetHeading = styled.h3<StyledBetHeadingProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  border: ${({ theme, color }) =>
    `2.5px solid ${color ? color : theme.colors.primary4}`};
  background-color: ${({ backgroundColor }) =>
    `${backgroundColor ? backgroundColor : "transparent"}`};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
