import styled from "styled-components";
import { StyledBetHeadingProps } from "./BetHeading.types";

export const StyledBetHeading = styled.h3<StyledBetHeadingProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  border: ${({ theme }) => `2.5px solid ${theme.colors.primary4}`};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
