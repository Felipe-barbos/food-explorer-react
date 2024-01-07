import styled from "styled-components";



export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.DARK_900};

  margin-bottom: .8rem;
  border-radius: .8rem;


   svg{
    margin-left: 1rem;
    font-size: 2.4rem;

    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > input {
    height: 5rem;
    width: 100%;

    padding: 1.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
    background: transparent;


    border: 0;
    outline: 0;


    & ::placeholder{
      color:${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1.6rem;
     
    }
  }




`;