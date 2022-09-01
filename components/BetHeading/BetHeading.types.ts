import CSSTypes from "csstype";

export interface StyledBetHeadingProps {
  width?: CSSTypes.Property.Width;
  height?: CSSTypes.Property.Height;
}

export interface BetHeadingProps extends StyledBetHeadingProps {
  betAmount: number;
}
