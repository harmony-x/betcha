import { Flex } from "$components/Box/Box.styles";
import { Span } from "$components/Typography/Typography.styles";
import Image from "next/image";
import { useTheme } from "styled-components";
import { Loaded, Loading, PreloaderWrapper } from "./Preloader.styles";

const Preloader = () => {
  const theme: any = useTheme();
  return (
    <PreloaderWrapper>
      <Image src="/betcha_logo.png" alt="" width={632} height={477} />
      <Flex align="flex-end" gap="11px" flexDir="column">
        <Span color={theme.colors.secondary} lineHeight="54px" size="4.2rem">
          LOADING...
        </Span>
        <Loading>
          <Loaded />
        </Loading>
      </Flex>
    </PreloaderWrapper>
  );
};

export default Preloader;
