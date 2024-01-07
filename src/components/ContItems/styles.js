import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  gap: 1.5rem;

  align-items: center;

  color: ${({ theme }) => theme.COLORS.WHITE};

  >p {
    font-size: 2.2rem;
  }
  
@media(min-width: ${DEVICE_BREAKPOINTS.LG}){
  gap: 2.5rem;
  > p{
    font-size: 3rem;
  }


  >svg{
    font-size: 3rem;
  }
}
`;