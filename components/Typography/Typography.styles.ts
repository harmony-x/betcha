import styled from "styled-components";
import { TypographyProps } from "./Typography.types";

export const HeadingOne = styled.h1<TypographyProps>`
  text-align: ${({ align }) => align};
  color: ${({ color, theme }) => color || theme.colors.white};
  letter-spacing: ${({ spacing }) => spacing};
  text-transform: ${({ transform }) => transform};
  font-size: ${({ size }) => (size ? size : "10rem")};
  text-decoration: ${({ decoration }) => decoration};
  line-height: ${({ lineHeight }) => lineHeight || " 128px"};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  -webkit-text-stroke: ${({ theme }) => `1px ${theme.colors.primary2}`};
  margin: ${({ margin }) => margin};
`;

export const HeadingFour = styled.h4<TypographyProps>`
  text-align: ${({ align }) => align};
  color: ${({ color, theme }) => color || theme.colors.white};
  letter-spacing: ${({ spacing }) => spacing};
  text-transform: ${({ transform }) => transform};
  font-size: ${({ size }) => (size ? size : "3.6rem")};
  text-decoration: ${({ decoration }) => decoration};
  line-height: ${({ lineHeight }) => lineHeight || " 46px"};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  -webkit-text-stroke: ${({ theme }) => `1px ${theme.colors.primary2}`};
  margin: ${({ margin }) => margin};
  font-family: "SUPER BOOM", sans-serif;
`;

export const Paragraph = styled.p<TypographyProps>`
  text-align: ${({ align }) => align};
  color: ${({ color, theme }) => color || theme.colors.white};
  letter-spacing: ${({ spacing }) => spacing};
  text-transform: ${({ transform }) => transform};
  font-size: ${({ size }) => (size ? size : "2.8rem")};
  text-decoration: ${({ decoration }) => decoration};
  line-height: ${({ lineHeight }) => lineHeight || " 36px"};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  -webkit-text-stroke: ${({ theme }) => `1px ${theme.colors.primary2}`};
  margin: ${({ margin }) => margin};
`;

export const Span = styled.span<TypographyProps>`
  text-align: ${({ align }) => align};
  letter-spacing: ${({ spacing }) => spacing};
  text-transform: ${({ transform }) => transform};
  color: ${({ color, theme }) => (color ? color : theme.colors.white)};
  text-decoration: ${({ decoration }) => decoration};
  font-size: ${({ size }) => (size ? size : "6.4rem")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : " 82px")};
  -webkit-text-stroke: ${({ theme }) => `1px ${theme.colors.primary2}`};
  margin: ${({ margin }) => margin};
`;
