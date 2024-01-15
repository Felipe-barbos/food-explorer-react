import { Container } from "./styles";
import { Button } from "../Button";

import {Plus, Minus, HeartStraight, Browser} from "@phosphor-icons/react"
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";



export function Card({ data, ...rest }) {




  const avatarUrl = `${api.defaults.baseURL}/files/${data.avatar}`;

  const navigate = useNavigate();

  function handleProductView(product_id){
    navigate(`/productView/${product_id}`);
  }
 
  
  return (
    <Container>
      <div className="IconPanel">
        <Browser onClick={() => handleProductView(data.id)}/>
        <HeartStraight   />
      </div>
       
      <img src={avatarUrl} alt="Foto do Prato" />

      <p>{data.title + " >"}</p>
      <p id="description">descrição.......</p>

      <a>R${data.price}</a>

      <div className="PanelButtons">  
        <span><Minus/>0<Plus/></span>
      <Button
        title="Incluir"
      />
      </div>
    

    </Container>
  );
}