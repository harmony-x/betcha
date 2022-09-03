import { Flex } from "$components/Box/Box.styles";
import { Span } from "$components/Typography/Typography.styles";
import { useTheme } from "styled-components";
import {
  StyledBetHistoryTableDataFour,
  StyledBetHistoryTableDataOne,
  StyledBetHistoryTableDataThree,
  StyledBetHistoryTableDataTwo,
  StyledBetHistoryTableRow,
  StyledTicketIcon,
} from "./BetHistory.styles";

const BetHistoryTable: React.FC = () => {
  const theme: any = useTheme();
  return (
    <>
      {[
        // {
        //   id: 0,
        //   choice: "red",
        //   orderID: "12357",
        //   amount: 0.1,
        //   won: true,
        // },
        // {
        //   id: 1,
        //   choice: "black",
        //   orderID: "45728",
        //   amount: 0.05,
        //   won: false,
        // },
        // {
        //   id: 2,
        //   choice: "red",
        //   orderID: "45723",
        //   amount: 0.7,
        //   won: true,
        // },
        // {
        //   id: 3,
        //   choice: "black",
        //   orderID: "45723",
        //   amount: 0.05,
        //   won: true,
        // },
        // {
        //   id: 4,
        //   choice: "red",
        //   orderID: "45727",
        //   amount: 0.1,
        //   won: false,
        // },
      ].map(({ id, amount, choice, orderID, won }, index) => (
        <StyledBetHistoryTableRow
          backgroundColor={
            (index + 1) % 2 ? theme.colors.primary6 : theme.colors.primary7
          }
          key={id}
        >
          <StyledBetHistoryTableDataOne>
            <Span
              color={(index + 1) % 2 ? theme.colors.black2 : theme.colors.white}
              transform="uppercase"
              size="2.6rem"
              align="center"
              lineHeight="33px"
            >
              Choice: {choice}
            </Span>
          </StyledBetHistoryTableDataOne>
          <StyledBetHistoryTableDataTwo>
            <Flex gap="13.11px">
              <StyledTicketIcon
                fill={
                  (index + 1) % 2 ? theme.colors.black2 : theme.colors.white
                }
              />
            </Flex>
          </StyledBetHistoryTableDataTwo>
          <StyledBetHistoryTableDataThree>
            <Span
              color={(index + 1) % 2 ? theme.colors.black2 : theme.colors.white}
              transform="uppercase"
              size="2.6rem"
              align="center"
              lineHeight="33px"
            >
              {amount} MATIC
            </Span>
          </StyledBetHistoryTableDataThree>
          <StyledBetHistoryTableDataFour>
            <Span
              color={won ? theme.colors.green : theme.colors.red}
              transform="uppercase"
              size="2.6rem"
              align="center"
              lineHeight="33px"
            >
              {won ? "WON" : "LOST"}
            </Span>
          </StyledBetHistoryTableDataFour>
        </StyledBetHistoryTableRow>
      ))}
    </>
  );
};

export default BetHistoryTable;
