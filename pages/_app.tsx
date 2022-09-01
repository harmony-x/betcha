import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globals";
import { colors } from "theme/colors";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ colors }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
