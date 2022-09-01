import { ContextProvider } from "context/context";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globals";
import { colors } from "theme/colors";

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  );
}

export default MyApp;
