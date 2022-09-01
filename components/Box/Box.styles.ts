import styled from "styled-components";
import { FlexProps, GridProps } from "./Box.types";

export const Flex = styled.div<FlexProps>`
  display: flex;
  gap: ${({ gap }) => gap};
  flex: ${({ flex }) => flex};
  background: ${({ bgColor }) => bgColor};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width || "100%"};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  height: ${({ height }) => height || "auto"};
  align-items: ${({ align }) => align || "normal"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  justify-content: ${({ justify }) => justify || "normal"};
  margin: ${({ margin }) => (margin ? margin : "initial")};
  padding: ${({ padding }) => (padding ? padding : "initial")};
  border: ${({ border }) => (border ? border : "none")};
  justify-items: ${({ justifyItems }) => justifyItems || "normal"};
  /* & > * {
    min-width: 0;
  } */
`;

export const Grid = styled.div<GridProps>`
  display: grid;
  width: ${({ width }) => width || "100%"};
  grid-gap: ${(props) => props.gap || "10px"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  margin: ${({ margin }) => (margin ? margin : "initial")};
  grid-template-rows: ${(props) => props.gridRow || "auto"};
  grid-template-columns: ${(props) => props.gridCol || "1fr"};
  padding: ${({ padding }) => (padding ? padding : "initial")};
  & > * {
    min-width: 0;
  }
`;
