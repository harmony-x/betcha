import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "SUPER BOOM";
  src: url("/fonts/SUPER BOOM.otf"), url("/fonts/SUPER BOOM.ttf");
  font-style: normal;
}
  html {
    font-size: 62.5%;
  }
  body {
  padding: 0;
  margin: 0;
  font-family: 'SUPER BOOM', sans-serif; 
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
	}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
    margin: 0;
    padding: 0;
	}
	button,
	input {
		background-color: transparent;
		border: none;
	}
`;

export default GlobalStyle;