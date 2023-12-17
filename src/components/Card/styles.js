import styled from "styled-components";



export const Container = styled.div`
  height: 27rem;
  padding: 2.4rem;
  display:flex;
  flex-shrink: 0;

  gap: 1.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: .8rem;


  background: ${({ theme }) => theme.COLORS.DARK_200};


  img{
    width: 12rem;
    height: 12rem;
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





`;