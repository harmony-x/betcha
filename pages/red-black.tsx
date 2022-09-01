import BetHistoryTable from "$components/BetHistoryTable/BetHistoryTable";
import ModalTwo from "$components/ModalTwo/ModalTwo";
import { Paragraph, Span } from "$components/Typography/Typography.styles";
import Main from "$layouts/Main/Main";
import RedAndBlack from "$screens/RedAndBlack/RedAndBlack";
import BackIcon from "$svgs/BackIcon";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useTheme } from "styled-components";

const RedAndBlackPage: NextPage = () => {
  const theme: any = useTheme();
  const [isOpenHistoryModal, setIsOpenHistoryModal] = React.useState(false);
  const [isOpenHelpModal, setIsOpenHelpModal] = React.useState(false);
  return (
    <div>
      <Head>
        <title>BECHA - Red and black</title>
        <meta
          name="description"
          content="BECHA - Red and black game, choose either red or black"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main
        buttonIcon={<BackIcon />}
        onHistoryClick={() => setIsOpenHistoryModal(true)}
        onInfoClick={() => setIsOpenHelpModal(true)}
      >
        <RedAndBlack />
      </Main>
      <ModalTwo
        text="BET HISTORY"
        isOpen={isOpenHistoryModal}
        setIsOpen={setIsOpenHistoryModal}
        contentMaxHeight={"284px"}
      >
        <BetHistoryTable />
      </ModalTwo>

      <ModalTwo
        text="HOW IT WORKS"
        isOpen={isOpenHelpModal}
        setIsOpen={setIsOpenHelpModal}
        contentMaxHeight={"284px"}
        headingColor={theme.colors.black3}
        headingBackGroundColor={theme.colors.primary5}
        contentBackGroundColor={theme.colors.primary7}
      >
        <Paragraph
          size="3rem"
          lineHeight="48px"
          margin="31px 0 0 0"
          align="center"
        >
          SIMPLE RED/BLACK GAME, USERS STAKE <br /> A SMALL AMOUNT{" "}
          <Span size="3rem" lineHeight="48px" color={theme.colors.black3}>
            (MAX 5% OF THE <br /> ENTIRE POOL) <br /> 0.1%
          </Span>{" "}
          OF THE TRANSACTION GOES TO <br /> THE USERS, MATIC CAN BE STAKED
        </Paragraph>
      </ModalTwo>
    </div>
  );
};

export default RedAndBlackPage;
