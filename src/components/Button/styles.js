import styled from "styled-components";


export const Container = styled.button`
  width: 100%;

  padding: 1.2rem 3.2rem;

  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  

  border: none;
  border-radius: 1rem;




  &:disabled{
    opacity: 0.5;
  }

`;