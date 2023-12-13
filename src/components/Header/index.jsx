import { Container } from "./styles";

import backgroundImg from "../../assets/Icon.svg";


export function Header() {
  return (
    <Container >
      <h1> <img src={backgroundImg} alt="" /> Food Explorer</h1>
    </Container>
  );
}