import styled from "styled-components";

import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakpoints";



export const Container = styled.div`
  width:22rem;
  height: 35rem;
  padding: 1.5rem;
  display:flex;
  flex-shrink: 0;

  gap: .8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: .8rem;


  background: ${({ theme }) => theme.COLORS.DARK_200};

 > svg{
  font-size: 2.5rem;
  color: ${({theme}) => theme.COLORS.WHITE};
  align-self: flex-end;
 }


  img{
    width: 13rem;
    height: 13rem;
    border-radius: 50%;

    align-self: center;
  }

 p{
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  align-self: center;

  font-size: 1.6rem;
  font-weight: 500;

  font-family: "poppins";
 }

 a{
  color: ${({ theme }) => theme.COLORS.BLUE_100};
  font-family: "roboto";

  font-weight: 400;
  font-size: 1.8rem;


 }


 span{
  display: flex;
  flex-direction: row;
  gap: 1.4rem;
  align-items: center;


  color: ${({theme}) => theme.COLORS.WHITE};

  
 }

 .PanelButtons{
  width: 15rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
 }

 #description{
  display: none;
 }




 @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
  width: 30rem;
  height: 46rem;
  gap: 1.5rem;
  align-items: center;

  img{
    width: 18rem;
    height: 18rem;
  }

  p{
    font-size: 2.4rem;
    font-weight: bold;

  }

  a{
    font-size: 3.2rem;
  }


  .PanelButtons{
    width: 20rem;
    flex-direction: row;

  }






 }


`;