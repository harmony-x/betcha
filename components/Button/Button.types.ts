import CSSTypes from "csstype";
import React from "react";

export interface StyledStyledButtonOneProps {
  width?: CSSTypes.Property.Width;
  height?: CSSTypes.Property.Height;
}

export type ButtonProps = StyledStyledButtonOneProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text: React.ReactNode;
    icon: JSX.Element;
  };
