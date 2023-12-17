import { Container } from "./styles";

import backgroundImg from "../../assets/Icon.svg";

export function Footer() {
  return (
    <Container>
      <h1> <img src={backgroundImg} alt="" /> Food Explorer</h1>
      <a>© 2023 - Todos os direitos reservados.</a>

    </Container>
  );
}