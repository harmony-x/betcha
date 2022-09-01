import CSSTypes from "csstype";

export interface StyledModalHeadingWrapperProps {
  height?: CSSTypes.Property.Height;
  backgroundColor?: CSSTypes.Property.BackgroundColor;
}

export interface StyledModalBoxTwoProps {
  backgroundColor?: CSSTypes.Property.BackgroundColor;
}

export interface StyledModalContentProps {
  maxHeight?: CSSTypes.Property.MaxHeight;
}

export type ModalTwoProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  headingBackGroundColor?: CSSTypes.Property.BackgroundColor;
  headingColor?: CSSTypes.Property.Color;
  contentBackGroundColor?: CSSTypes.Property.BackgroundColor;
  headingHeight?: CSSTypes.Property.Height;
  contentMaxHeight?: CSSTypes.Property.MaxHeight;
  text: string;
};

export type StyledModalWrapperProps = Pick<ModalTwoProps, "isOpen">;
