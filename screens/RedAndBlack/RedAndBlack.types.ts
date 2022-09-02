import CSSTypes from "csstype";
import { BigNumber } from "ethers";

export type Choice = "" | "red" | "black";

export type Status = "init" | "processing" | "complete";

export interface Game {
  status: Status;
  correctChoice: Choice;
  requestId: BigNumber;
  amount: number;
}

export interface RedAndBlackLeftPaneProps {
  backgroundImage: CSSTypes.Property.BackgroundImage;
}
