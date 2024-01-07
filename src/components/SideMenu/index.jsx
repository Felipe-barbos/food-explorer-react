import { Container, Button, Out } from "./styles";
import {Input} from "../Input";

import { Link, useNavigate } from "react-router-dom";

import {MagnifyingGlass, X} from '@phosphor-icons/react'
import { useAuth } from "../../hooks/auth";

export function SideMenu({menuIsOpen, onCloseMenu}){

const {signOut} = useAuth();

 return(
  <Container data-menu-is-open={menuIsOpen}>

   <Button onClick={onCloseMenu}>
    <X/>
   </Button>

   <Input
   placeholder="Busque por pratos ou ingredientes"
   Icon={MagnifyingGlass}
   />
   

   <ul>
       <li>Novo Prato</li>
        
       <Out to="/" onClick={signOut}>Sair</Out>
   </ul>
  </Container>
 )
}