import Main from "$layouts/Main/Main";
import RedAndBlack from "$screens/RedAndBlack/RedAndBlack";
import BackIcon from "$svgs/BackIcon";
import type { NextPage } from "next";
import Head from "next/head";

const RedAndBlackPage: NextPage = () => {
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
      <Main buttonIcon={<BackIcon />}>
        <RedAndBlack />
      </Main>
    </div>
  );
};

export default RedAndBlackPage;
