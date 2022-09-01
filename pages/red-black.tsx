import BetHistoryTable from "$components/BetHistoryTable/BetHistoryTable";
import ModalTwo from "$components/ModalTwo/ModalTwo";
import Main from "$layouts/Main/Main";
import RedAndBlack from "$screens/RedAndBlack/RedAndBlack";
import BackIcon from "$svgs/BackIcon";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

const RedAndBlackPage: NextPage = () => {
  const [isOpenHistoryModal, setIsOpenHistoryModal] = React.useState(false);
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
      >
        <RedAndBlack />
      </Main>
      <ModalTwo
        text="BET HISTORY"
        isOpen={isOpenHistoryModal}
        setIsOpen={setIsOpenHistoryModal}
      >
        <BetHistoryTable />
      </ModalTwo>
    </div>
  );
};

export default RedAndBlackPage;
