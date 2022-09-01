import CSSTypes from "csstype";

export type Choice = "" | "red" | "black";

export type Status = "init" | "processing" | "complete";

export interface Game {
  status: Status;
  correctChoice: Choice;
  amount: number;
}

export interface RedAndBlackLeftPaneProps {
  backgroundImage: CSSTypes.Property.BackgroundImage;
}
