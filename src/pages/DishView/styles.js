import styled from "styled-components";

export const Container = styled.div`
height: 100vh;

display: grid;

grid-template-areas:
"header"
"content"
"footer";
`;

export const Content = styled.div`

grid-area: content;
flex-direction: column;

display: flex;
align-items: center;


padding: 1rem 2rem;
gap: 1rem;

  > a{
    display: flex;
    align-items: center;
    align-self: flex-start;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE}
  }

 >h2{
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 2.4rem;
 }
 
 > p{
    font-size: 1.6rem; 
    text-align: center;
 }

 a,p,h2{
  font-family: "Poppins";
 }

 >img{
  width: 26rem;
  height: 26rem;

  align-self: center;

  
 }
`;