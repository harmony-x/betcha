import { Flex } from "$components/Box/Box.styles";
import { Paragraph } from "$components/Typography/Typography.styles";
import UserProfile from "$components/UserProfile/UserProfile";
import InfoIcon from "$svgs/InfoIcon";
import MusicIcon from "$svgs/MusicIcon";
import { useRouter } from "next/router";
import {
  MainButton,
  StyledMain,
  StyledMainBottom,
  StyledMainTop,
} from "./Main.styles";
import { MainProps } from "./Main.types";

const Main: React.FC<MainProps> = ({ children, buttonIcon }) => {
  const router = useRouter();
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
            <MainButton>
              <MusicIcon />
            </MainButton>
          </Flex>
        </Flex>
      </StyledMainBottom>
    </StyledMain>
  );
};

export default Main;
