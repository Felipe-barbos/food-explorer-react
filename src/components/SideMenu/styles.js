import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.aside`

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
 width: 100%;
 height: 100vh;
 padding: 2rem;
 
 display: flex;
 gap: 2rem;
 flex-direction: column;


 z-index: 1;
 position: absolute;


 transform: translateX(-100%);
 transition: transform 0.3s ease-in-out;
 
 &[data-menu-is-open="true"]{
  transform: translateX(0);
 }



 Input{
  font-size: 1.4rem;
 }



 ul{

  margin-top: 2.8rem;
  display: flex;
  flex-direction: column;

  gap: 2rem;
 }

 li{
  padding: .4rem;
  list-style-type: none;
  font-size: 2.4rem;
  font-family: Poppins;
  font-weight: 300;
  color: ${({theme}) => theme.COLORS.LIGHT_300};

  border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
 }

 li:hover{
  filter:brightness(0.8);
 }

 



`;


export const Button = styled.button`

 background-color: transparent;
 border: none;

 align-self: flex-start;

 > svg{
  font-size: 2.5rem;
  color: ${({theme}) => theme.COLORS.LIGHT_300};
 }
`;

export const Out = styled.li`
  padding: .4rem;
  list-style-type: none;
  font-size: 2.4rem;
  font-family: Poppins;
  font-weight: 300;
  color: ${({theme}) => theme.COLORS.LIGHT_300};

  border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};

  :hover{
   filter: brightness(0.8);
  }
`;