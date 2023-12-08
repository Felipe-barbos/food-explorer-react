import styled from "styled-components";

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

  .inputWrapper{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p{
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
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

  
`;