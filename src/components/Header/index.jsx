import { Container, Menu } from "./styles";
import { List, Receipt, MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { Input } from "../Input";
import backgroundImg from "../../assets/Icon.svg";
import { Button } from "../Button";


export function Header({ onOpenMenu }) {
  return (
    <Container >


      <Menu onClick={onOpenMenu}>
        <List />
      </Menu>


      <h1> <img src={backgroundImg} alt="" /> Food Explorer</h1>



      <Input
        Icon={MagnifyingGlass}
        placeholder="Busque por pratos ou ingredientes"

      />


      <div className="PanelButtons">
      <button id="pedidos">
        <Receipt />
        Pedidos
        </button>

        <SignOut/>
      </div>
    
  

      <Menu>
        <Receipt />
      </Menu>


    </Container>
  );
}