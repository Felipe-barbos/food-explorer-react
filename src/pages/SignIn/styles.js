import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;


  h1{
    font-size: 5rem;
    font-weight: bold;
    font-family: 'Poppins';
    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    gap: 1.9rem;
    align-items: center;

    img{
      width: 5rem;
      height: 5rem;
    }
  }

  

  @media (max-width:${DEVICE_BREAKPOINTS.MD} ){
    flex-direction: column;
    justify-content: center;
    gap: 2rem;


    h1{
      font-size: 3rem;

    }
    
  }
`;


export const Form = styled.form`

  padding: 6.4rem;
  width: 50rem;
  background: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;

  flex-direction: column;
  gap: 3rem;

  border-radius: 1.6rem;

  .inputWrapper{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p{
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

  }


  h2{
    font-size: 3.2rem;
    align-self: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Poppins';
  }

  p{
    font-family: 'Poppins';
  }


  a{
    align-self: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Poppins';
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;

  }


  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
    width: 30rem;
    gap: 1rem;

    background: none;
    padding: .5rem;

    h2{
    font-size: 2rem;
    display: none;
    }

    a{
      margin-top: 2rem;
      font-size: 1.4rem;
    }

    
  }

  
`;