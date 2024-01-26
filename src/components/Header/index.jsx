import { Container, Menu } from "./styles";
import { List, Receipt, MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { Input } from "../Input";
import backgroundImg from "../../assets/Icon.svg";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Header({ onOpenMenu }) {
  const {signOut} = useAuth();

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

        <Link to="/" onClick={signOut}><SignOut/></Link>
        
      </div>
    
  

      <Menu to="/cart">
       
        
        <Receipt />
       
      </Menu>


    </Container>
  );
}