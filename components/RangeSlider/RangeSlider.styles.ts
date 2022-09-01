import * as Slider from "@radix-ui/react-slider";
import styled from "styled-components";
import { StyledRangeSliderProps } from "./RangeSlider.types";

export const StyledRangeSlider = styled(Slider.Root)<StyledRangeSliderProps>`
  width: ${({ width }) => width || "100%"};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledRangeSliderTrack = styled(Slider.Track)`
  width: 100%;
  height: 12px;
  display: block;
`;

export const StyledRangeSliderRange = styled(Slider.Range)`
  background-image: url("/range_slider_track.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: block;
  height: 100%;
`;

export const StyledRangeSliderThumb = styled(Slider.Thumb)`
  background-image: url("/range-slider_thumb.png");
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: block;
`;
