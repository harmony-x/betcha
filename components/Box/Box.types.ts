import CSSTypes from "csstype";

export type FlexProps = {
  gap?: CSSTypes.Property.Gap;
  flex?: CSSTypes.Property.Flex;
  width?: CSSTypes.Property.Width;
  height?: CSSTypes.Property.Height;
  margin?: CSSTypes.Property.Margin;
  padding?: CSSTypes.Property.Padding;
  align?: CSSTypes.Property.AlignItems;
  flexWrap?: CSSTypes.Property.FlexWrap;
  minWidth?: CSSTypes.Property.MinWidth;
  maxWidth?: CSSTypes.Property.MaxWidth;
  minHeight?: CSSTypes.Property.MinHeight;
  maxHeight?: CSSTypes.Property.MaxHeight;
  flexDir?: CSSTypes.Property.FlexDirection;
  justify?: CSSTypes.Property.JustifyContent;
  bgColor?: CSSTypes.Property.BackgroundColor;
  border?: CSSTypes.Property.Border;
  justifyItems?: CSSTypes.Property.JustifyItems;
};

export type GridProps = {
  gap?: CSSTypes.Property.Gap;
  width?: CSSTypes.Property.Width;
  margin?: CSSTypes.Property.Margin;
  padding?: CSSTypes.Property.Padding;
  align?: CSSTypes.Property.AlignItems;
  justify?: CSSTypes.Property.JustifyContent;
  gridRow?: CSSTypes.Property.GridTemplateRows;
  gridCol?: CSSTypes.Property.GridTemplateColumns;
};
