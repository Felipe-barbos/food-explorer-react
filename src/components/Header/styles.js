import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.header`

display: flex;
align-items: flex-start;
justify-content: space-between;
padding: 1rem;


background: ${({ theme }) => theme.COLORS.DARK_700};




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



`;


export const Menu = styled.button`
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

`;