import { Flex } from "$components/Box/Box.styles";
import { Paragraph } from "$components/Typography/Typography.styles";
import UserProfile from "$components/UserProfile/UserProfile";
import InfoIcon from "$svgs/InfoIcon";
import MusicIcon from "$svgs/MusicIcon";
import { useRouter } from "next/router";
import React from "react";
import {
  MainButton,
  StyledMain,
  StyledMainBottom,
  StyledMainTop,
} from "./Main.styles";
import { MainProps } from "./Main.types";

const Main: React.FC<MainProps> = ({ children, buttonIcon }) => {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  return (
    <StyledMain>
      <audio
        ref={audioRef}
        src={
          "https://res.cloudinary.com/dexg5uy3d/video/upload/v1661996886/WhatsApp_Audio_2022-09-01_at_2.39.58_AM_erpdn8.mp3"
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
            <Paragraph>5 SOL</Paragraph>
            <UserProfile address="ox45677cffvf" />
          </Flex>
        </Flex>
      </StyledMainTop>
      {children}
      <StyledMainBottom>
        <Flex align="center" justify="space-between">
          <Flex width="max-content" align="center" gap="14px">
            <MainButton>
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
              <MusicIcon />
            </MainButton>
          </Flex>
        </Flex>
      </StyledMainBottom>
    </StyledMain>
  );
};

export default Main;
