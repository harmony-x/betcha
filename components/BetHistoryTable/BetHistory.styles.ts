import TicketIcon from "$svgs/TicketIcon";
import styled from "styled-components";
import {
  StyledBetHistoryTableRowProps,
  StyledTicketIconProps,
} from "./BetHistory.types";

export const StyledBetHistoryTableRow = styled.div<StyledBetHistoryTableRowProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 71px;
  padding: 0 48px;
`;

export const StyledBetHistoryTableDataOne = styled.div`
  width: 175px;
`;

export const StyledBetHistoryTableDataTwo = styled.div`
  width: 111px;
`;

export const StyledBetHistoryTableDataThree = styled.div`
  width: 94px;
`;

export const StyledBetHistoryTableDataFour = styled.div`
  width: 61px;
`;

export const StyledTicketIcon = styled(TicketIcon)<StyledTicketIconProps>`
  path {
    fill: ${({ fill }) => fill ?? "white"};
  }
`;
