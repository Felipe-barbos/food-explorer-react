import { Container, Button } from "./styles";
import {Input} from "../Input";

import {MagnifyingGlass, X} from '@phosphor-icons/react'

export function SideMenu({menuIsOpen, onCloseMenu}){
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
        
       <li>Sair</li>
   </ul>
  </Container>
 )
}