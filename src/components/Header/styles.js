import styled from "styled-components";


export const Container = styled.header`

width: 100%;
height: 5rem;

display: flex;
align-items: center;
justify-content: center;


background: ${({ theme }) => theme.COLORS.DARK_700};


h1{
  font-size: 2rem;
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