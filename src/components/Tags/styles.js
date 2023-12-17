

import styled from "styled-components";



export const Container = styled.span`

  font-size: 1.2rem;

  background: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: .8rem;

  padding: 0.5rem 1.6rem;
`;