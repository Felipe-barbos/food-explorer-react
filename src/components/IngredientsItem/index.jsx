import { Button } from "../Button";
import { Container } from "./styles";
import { Plus, X } from "@phosphor-icons/react";


export function IngredientsItem({isNew, value, onClick, ...rest}){
 return(
  <Container isnew={isNew}>
    <input 
     type="text"
     value={value}
     readOnly={!isNew}
    />

    <button
     type="button"
     onClick={onClick}
     className={isNew ? "button-add": "buttton-delete"}
    />

    {isNew ? <Plus/> : <X/>}
  </Container>
 );
}