import CSSTypes from "csstype";
import React, { HTMLAttributes } from "react";

export interface StyledStyledButtonOneProps {
  width?: CSSTypes.Property.Width;
  height?: CSSTypes.Property.Height;
}

export type ButtonProps = StyledStyledButtonOneProps &
  HTMLAttributes<HTMLButtonElement> & {
    text: React.ReactNode;
    icon: JSX.Element;
  };
