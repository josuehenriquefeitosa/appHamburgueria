import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	:root{
		--color-white: #ffffff;
		--color-button: #D93856;
		--color-inputs:#FFFFFF40;
		--color-inputs-label:#EEEEEE;
		--color-background:#0A0A10;
	}
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		border: none;
		font-family: "Roboto", serif;
		list-style: none;
		text-decoration: none;
		color: var(--color-white);
	}

	body{
		background-color: var(--color-background);
	}

	
	
`