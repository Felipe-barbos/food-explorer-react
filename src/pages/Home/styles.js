import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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

width: 100vw;
grid-area: content;
display: block;
overflow-y: auto;

padding-top: 3rem;


@media(min-width: ${DEVICE_BREAKPOINTS.LG}){
  padding: 5rem 12rem 5rem 12rem;
}


`;



export const ListCard = styled.div`

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  overflow-x: auto;




  @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
    gap: 2.5rem;
  }

  


`;


export const Panel = styled.div`

  margin: 1rem;

  height: 10rem;
  display: flex;
  align-items: center;

  padding: 1rem;
  gap: 1rem;

  

  border-radius: 2.917px;
  background: var(--Gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));


    img{
      width: 9rem;
      height: 8rem;

    }


  .textPanel{
    display: flex;
    flex-direction: column;
    gap: 1rem;

 

    h2{
      font-size: 1.6rem;
      font-family: "Poppins";

      color:${({ theme }) => theme.COLORS.LIGHT_300};

    }

    p{
      font-size: 1.1rem;

      font-family: "Poppins";

      color:${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }


  @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
    margin: 19rem 4rem 4rem 5rem;
    height: 26rem;


    img{
      width: 62rem;
      height: 40rem;
      margin-left: -9rem;
      margin-bottom: 14rem;
    }



    
   padding: 0;

 


   .textPanel{

    width: 80rem;
    margin-right: -20rem;
  
   h2{
    font-size: 4rem;
    font-weight: 400;
   }

   p{
    font-size: 1.6rem;
    line-height: 1.6rem;
    
   }

  }
  }

`;
