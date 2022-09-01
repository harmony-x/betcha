import CSSTypes from "csstype";

export interface StyledRangeSliderProps {
  width?: CSSTypes.Property.Width;
}

export interface RangeSliderProps extends StyledRangeSliderProps {
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;
}
