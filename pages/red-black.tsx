import Main from "$layouts/Main/Main";
import RedAndBlack from "$screens/RedAndBlack/RedAndBlack";
import BackIcon from "$svgs/BackIcon";
import type { NextPage } from "next";
import Head from "next/head";

const RedAndBlackPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main buttonIcon={<BackIcon />}>
        <RedAndBlack />
      </Main>
    </div>
  );
};

export default RedAndBlackPage;