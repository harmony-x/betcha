import CSSTypes from "csstype";

export type TypographyProps = {
  color?: CSSTypes.Property.Color;
  size?: CSSTypes.Property.FontSize;
  align?: CSSTypes.Property.TextAlign;
  weight?: CSSTypes.Property.FontWeight;
  spacing?: CSSTypes.Property.LetterSpacing;
  lineHeight?: CSSTypes.Property.LineHeight;
  transform?: CSSTypes.Property.TextTransform;
  decoration?: CSSTypes.Property.TextDecoration;
  padding?: CSSTypes.Property.Padding;
  margin?: CSSTypes.Property.Margin;
  isTextStroke?: boolean;
};
