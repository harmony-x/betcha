import { Flex } from "$components/Box/Box.styles";
import { Paragraph } from "$components/Typography/Typography.styles";
import UserProfile from "$components/UserProfile/UserProfile";
import HistoryIcon from "$svgs/HistoryIcon";
import InfoIcon from "$svgs/InfoIcon";
import MusicIcon from "$svgs/MusicIcon";
import MusicOffIcon from "$svgs/MusicOffIcon";
import { truncateAddress } from "$utils/utils";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  MainButton,
  StyledMain,
  StyledMainBottom,
  StyledMainTop,
} from "./Main.styles";
import { MainProps } from "./Main.types";

// @jibola: just to setup, not the real component
const ConnectWallet = () => {
  const injectedConnector = new InjectedConnector({
    // supportedChainIds: [80001],
  });
  const { chainId, account, activate, active, library } =
    useWeb3React<Web3Provider>();
  useEffect(() => {
    if (active && chainId !== 80001) {
      // shows everytime
      console.log("Only polygon testnet is supported.")
    }
  }, [active, chainId])
  const onClick = () => {
    // where the connection happens
    activate(injectedConnector);
  };
  return <div style={{cursor: "pointer"}} onClick={onClick}>connect wallet</div>;
};

const Main: React.FC<MainProps> = ({
  children,
  buttonIcon,
  onInfoClick,
  onHistoryClick,
}) => {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [balance, setBalance] = React.useState<number | string>("-");
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const { chainId, account, activate, active, library } =
    useWeb3React<Web3Provider>();

  useEffect(() => {
    account && library?.getBalance(account).then((result)=>{
      setBalance((Number(result._hex)/1e18).toFixed(3));
    })
    }, [library, account]);

  return (
    <StyledMain>
      <audio
        ref={audioRef}
        src={
          "https://res.cloudinary.com/dexg5uy3d/video/upload/v1661998204/16_Menu_q1acbq.mp3"
        }
        title={"Game sound"}
        loop
      ></audio>
      <StyledMainTop>
        <Flex align="center" justify="space-between">
          <Flex width="max-content" align="center" gap="14px">
            <MainButton onClick={() => router.push("/")}>
              {buttonIcon}
            </MainButton>
          </Flex>
          <Flex gap="25px" width="max-content" align="center">
            <Paragraph> {balance} MATIC  </Paragraph>
            {/* Apply in proper place */}
            <ConnectWallet />
            <UserProfile address={account ? truncateAddress(account) : "Connect Wallet"} />
          </Flex>
        </Flex>
      </StyledMainTop>
      {children}
      <StyledMainBottom>
        <Flex align="center" justify="space-between">
          <Flex width="max-content" align="center" gap="14px">
            <MainButton onClick={onInfoClick}>
              <InfoIcon />
            </MainButton>
            <MainButton
              onClick={() => {
                if (isPlaying) {
                  audioRef?.current?.pause();
                  setIsPlaying(!isPlaying);
                } else {
                  audioRef?.current?.play();
                  setIsPlaying(!isPlaying);
                }
              }}
            >
              {isPlaying ? <MusicIcon /> : <MusicOffIcon />}
            </MainButton>
          </Flex>
          <MainButton onClick={onHistoryClick}>
            <HistoryIcon />
          </MainButton>
        </Flex>
      </StyledMainBottom>
    </StyledMain>
  );
};

export default Main;
