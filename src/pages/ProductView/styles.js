import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
height: 100vh;

display: grid;

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

  > a{
    display: flex;
    align-items: center;
    align-self: flex-start;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE}
  }

 

 a,p,h2{
  font-family: "Poppins";
 }

 .panelDescription{
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 2rem;


  >img{
  width: 26rem;
  height: 26rem;
  border-radius: 50%;
  align-self: center;

  
 }

 }



 .descriptions{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;


  >h2{
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 2.4rem;
  font-weight: normal;
  }
 
  > p{
    font-size: 1.6rem; 
    text-align: center;
  }

 }


 .tags{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;


  margin-bottom: 4rem;
 }

 .sale{
  display: flex;
  gap: 1.6rem;
  height: 3.8rem;
 }



 @media(min-width: ${DEVICE_BREAKPOINTS.LG} ){
 margin-top: 0;
 justify-content: center;
 padding: 5rem;



 > a{
    font-size: 2.5rem;
  }

    .panelDescription{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 3rem;


      > img{
        width: 38rem;
        height: 38rem;
      }
    }


    .descriptions{
      align-items: flex-start;

      gap: 2.5rem;
      > h2{
        font-size: 3.5rem;
        font-weight: 500;
      }

      >p{
        font-size: 2.2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-weight: 400;
        line-height: 3.3rem;
      }
    }

    .tags{
      display: flex;
    }

    .sale{
      align-items: center;
      gap: 4rem;
    }
 }
`;


export const Button = styled.button`
 width: 100%;

padding: 1.2rem 3.2rem;

background: ${({ theme }) => theme.COLORS.TOMATO_100};
color: ${({ theme }) => theme.COLORS.WHITE};

font-size: 1rem;
font-weight: 500;
line-height: 2.4rem;
display: flex;
justify-content: center;
align-items: center;
gap: .5rem;

border: none;
border-radius: .3rem;




&:disabled{
  opacity: 0.5;
}


>svg{
  font-size: 2rem;
}


@media(min-width: ${DEVICE_BREAKPOINTS.LG}){
  padding: 2.2rem 3.2rem;
  font-size: 2rem;
  border-radius: .5rem;

  >svg{
    font-size: 3rem;
  }


}

`;