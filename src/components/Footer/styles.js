import styled from "styled-components";


export const Container = styled.footer`

width: 100vw;
grid-area: footer;

display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
height: 5rem;
padding: .5rem;


background: ${({ theme }) => theme.COLORS.DARK_700};

bottom: 0;
position: fixed;



img{
  width: 2.2rem;
  height: 2.2rem;
}

h1,a {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

`;