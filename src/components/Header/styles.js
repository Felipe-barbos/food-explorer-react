import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Link } from "react-router-dom";


export const Container = styled.header`

width: 100vw;
grid-area: header;
display: flex;
align-items: flex-start;
justify-content: space-between;
height: 5rem;
padding: 1rem;

position: fixed;


background: ${({ theme }) => theme.COLORS.DARK_700};



div {
  display: none;
}

#pedidos{
  display: none;
}





> h1{
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  img{
    width: 2.4rem;
    height: 2.4rem;
  }
}



@media(min-width: ${DEVICE_BREAKPOINTS.LG}){

  height: 8rem;
  padding: 1rem 2rem;
  align-items: center;


  >h1 {
    align-self: center;
    font-size: 2.4rem;
  }

  div{
    margin-top: 1rem;
    display: flex;

    width: 58rem;

  }

  .PanelButtons{
    width: 22rem;
    display: flex;
    align-items: center;
    gap: 3.2rem;


    svg{
      font-size: 3rem;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

  }

  #pedidos{

   
    display: flex;
    align-items: center;
    gap: .6rem;

    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;

    padding: 1.2rem 3.2rem;
    border-radius: .5rem;
    border: none;



    >svg{
      font-size: 2rem;
    }

  }


  


 


  
}


`;


export const Menu = styled(Link)`
  background: none;
  border:none;


  >svg{
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
  }


  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
    display: block;
  }

  @media(max-width: ${DEVICE_BREAKPOINTS.XS}){
    > svg{
      font-size: 2rem;
    }
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
    display: none;
  }

`;