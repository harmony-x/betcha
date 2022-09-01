import { ContextProvider } from "context/context";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globals";
import { colors } from "theme/colors";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={{ colors }}>
        <audio
          id="game-sound"
          src={
            "https://res.cloudinary.com/dexg5uy3d/video/upload/v1661998204/16_Menu_q1acbq.mp3"
          }
          title={"Game sound"}
          loop
        ></audio>
        <GlobalStyle />
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </ThemeProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
