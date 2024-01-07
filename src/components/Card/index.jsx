import { Container } from "./styles";
import { Button } from "../Button";

import {Plus, Minus, HeartStraight} from "@phosphor-icons/react"



export function Card({ title, src, price, ...rest }) {
  return (
    <Container>
        <HeartStraight />
      <img src={src} alt="Foto do Prato" />

      <p>{title + " >"}</p>
      <p id="description">descrição.......</p>

      <a>R${price}</a>

      <div className="PanelButtons">  
        <span><Minus/>0<Plus/></span>
      <Button
        title="Incluir"
      />
      </div>
    

    </Container>
  );
}