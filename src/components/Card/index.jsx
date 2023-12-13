import { Container } from "./styles";
import { Button } from "../Button";



export function Card({ title, src, price, ...rest }) {
  return (
    <Container>

      <img src={src} alt="Foto do Prato" />

      <p>{title + " >"}</p>

      <a>R${price}</a>


      <Button
        title="Incluir"
      />

    </Container>
  );
}