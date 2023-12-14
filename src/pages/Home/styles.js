import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
height: 100vh;

display: grid;
grid-template-areas:
"header"
"content";






`;


export const Content = styled.div`

width: 100vw;
grid-area: content;
display: flex;



height: 100vh;

.elements{
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  overflow-x: auto;

}



`;

