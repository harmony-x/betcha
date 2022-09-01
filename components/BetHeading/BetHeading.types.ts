import CSSTypes from "csstype";

export interface StyledBetHeadingProps {
  width?: CSSTypes.Property.Width;
  height?: CSSTypes.Property.Height;
  color?: CSSTypes.Property.Color;
  backgroundColor?: CSSTypes.Property.BackgroundColor;
}

export interface BetHeadingProps extends StyledBetHeadingProps {
  text: string;
}
