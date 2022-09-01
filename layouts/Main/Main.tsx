import { Flex } from "$components/Box/Box.styles";
import { Paragraph } from "$components/Typography/Typography.styles";
import UserProfile from "$components/UserProfile/UserProfile";
import HistoryIcon from "$svgs/HistoryIcon";
import InfoIcon from "$svgs/InfoIcon";
import MusicIcon from "$svgs/MusicIcon";
import MusicOffIcon from "$svgs/MusicOffIcon";
import { useGlobalState } from "context/context";
import { truncateAddress } from "$utils/utils";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  MainButton,
  StyledMain,
  StyledMainBottom,
  StyledMainTop,
} from "./Main.styles";
import { MainProps } from "./Main.types";

const Main: React.FC<MainProps> = ({
  children,
  buttonIcon,
  onInfoClick,
  onHistoryClick,
}) => {
  const router = useRouter();

  const { isPlaying, setIsPlaying } = useGlobalState();

  const [balance, setBalance] = React.useState<number | string>("-");

  const { chainId, account, activate, active, library } =
    useWeb3React<Web3Provider>();

  useEffect(() => {
    account &&
      library?.getBalance(account).then((result) => {
        setBalance((Number(result._hex) / 1e18).toFixed(3));
      });
  }, [library, account]);

  return (
    <StyledMain>
      <StyledMainTop>
        <Flex align="center" justify="space-between">
          <Flex width="max-content" align="center" gap="14px">
            <MainButton onClick={() => router.push("/")}>
              {buttonIcon}
            </MainButton>
          </Flex>
          <Flex gap="25px" width="max-content" align="center">
            <Paragraph> {balance} MATIC </Paragraph>
            <UserProfile
              address={account ? truncateAddress(account) : "Connect Wallet"}
            />
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
                  (
                    document.getElementById("game-sound") as HTMLAudioElement
                  )?.pause();
                  setIsPlaying && setIsPlaying(!isPlaying);
                } else {
                  (
                    document.getElementById("game-sound") as HTMLAudioElement
                  )?.play();
                  setIsPlaying && setIsPlaying(!isPlaying);
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
