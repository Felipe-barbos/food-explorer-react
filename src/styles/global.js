import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  font-size: 62.5%;
}

body{
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 1.6rem;

  -webkit-font-smoothing: antialiased;
}


body, input, button, textarea {
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
}


a{
  text-decoration: none;
}

button, a{
  cursor: pointer;
}

button:hover, a:hover{
  filter: brightness(0.9);
}





`;