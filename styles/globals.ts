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
    background-image: url("/Game Background.png");
    background-position: center;
    background-size: cover;
    width: 1440px;
    @media screen and (min-width: 1280px) {
      width: 100%;
    }
	}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
    margin: 0;
    padding: 0;
	}
  
	*::-webkit-scrollbar {
		width: 10px;
		height: 4px;
	}
	*::-webkit-scrollbar-button {
		width: 0;
		height: 0;
	}
	*::-webkit-scrollbar-thumb {
		border-radius: 7px;
		background: #2E3138;
	}
	*::-webkit-scrollbar-thumb:active {
		background: #191B1F;
	}
	*::-webkit-scrollbar-track {
		background: #FA8B40;
		border-radius: 7px;
	}
	*::-webkit-scrollbar-track:hover {
		background: #FA8B40;
	}
	*::-webkit-scrollbar-track:active {
		background: #FA8B40;
	}
	*::-webkit-scrollbar-corner {
		background: transparent;
	}
	button,
	input {
		background-color: transparent;
		border: none;
	}
`;

export default GlobalStyle;
