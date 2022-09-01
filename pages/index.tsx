import Main from "$layouts/Main/Main";
import ChooseGame from "$screens/ChooseGame/ChooseGame";
import ConnectWallet from "$screens/ConnectWallet/ConnectWallet";
import HomeIcon from "$svgs/HomeIcon";
import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BECHA - Home</title>
        <meta
          name="description"
          content="BECHA Homepage, choose a game of your choice"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ConnectWallet /> */}
      <Main buttonIcon={<HomeIcon />}>
        <ChooseGame />
      </Main>
    </div>
  );
};

export default HomePage;
