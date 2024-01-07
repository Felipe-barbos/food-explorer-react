import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`

 display: flex;
 align-items: center;
 padding: .8rem;

 height: 3rem;

 

 background-color: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.LIGHT_600};
 color: ${({ theme, isnew }) => isnew ? theme.COLORS.LIGHT_600 : theme.COLORS.WHITE};

 border: ${({ theme, isnew }) => isnew ? `.1rem dashed ${theme.COLORS.LIGHT_600}` : `none`};
 border-radius: .8rem;

 >button {
  border: none;
  background: none;

  svg{
   font-size: 2.4rem;
  }
 }


 .button-delete, .button-add{
  color: ${({ theme }) => theme.COLORS.LIGHT_600};

 }


 > input {
  width:100%;

  padding: 1.2rem;
  font-size:1.4rem;
  color:${({ theme }) => theme.COLORS.WHITE};
  background: transparent;
  justify-content: center;



  border: none;
  outline: 0;


  &::placeholder{
   color:${({ theme }) => theme.COLORS.LIGHT_600};
  }
 }



 @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
  > input{
    font-size:1.6rem;
  }
 }




`;