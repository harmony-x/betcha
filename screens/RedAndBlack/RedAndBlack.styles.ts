import RedBtn from "$svgs/RedBtnBg";
import styled from "styled-components";
import { RedAndBlackLeftPaneProps } from "./RedAndBlack.types";

export const RedAndBlackWrapper = styled.div`
  width: 100%;
`;

export const RedAndBlackLeftPane = styled.div<RedAndBlackLeftPaneProps>`
  position: relative;
  min-width: 304px;
  height: 369px;
  background-image: ${({ backgroundImage }) => `url(/${backgroundImage})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
