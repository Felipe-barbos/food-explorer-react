import styled from "styled-components";



export const Container = styled.div`
height: 100vh;

display: grid;

gap: 2.5rem;
grid-template-areas:
"header"
"content"
"footer";


`;


export const Content = styled.div`

margin-top: 2rem;
grid-area: content;
flex-direction: column;

display: flex;
align-items: center;
padding: 1rem 2rem;
gap: 1rem;

overflow-y: auto;

 > h1 {


  color: ${({ theme }) => theme.COLORS.LIGHT_300};
 }


`;

export const ListCard = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

overflow-y: auto;

`