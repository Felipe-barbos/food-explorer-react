import { Container, Menu } from "./styles";
import { List, Receipt } from "@phosphor-icons/react";
import backgroundImg from "../../assets/Icon.svg";


export function Header() {
  return (
    <Container >


      <Menu>
        <List />
      </Menu>
      <h1> <img src={backgroundImg} alt="" /> Food Explorer</h1>

      <Menu>
        <Receipt />
      </Menu>
    </Container>
  );
}