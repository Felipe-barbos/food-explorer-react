import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Content, Button } from "./styles";
import { CaretLeft, Receipt } from "@phosphor-icons/react";

import imagePrato from "../../assets/imgPratos/Imagens - Food Explorer-v2/Mask group-1.png";
import { ContItems } from "../../components/ContItems";
import { Tag } from "../../components/Tags";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";


export function ProductView() {

  const navigate = useNavigate();

  const params = useParams();

  const [data, setData] = useState({});
  
  const [avatar, setAvatar] = useState("");

 



  function handleBack(){
    navigate(-1);
  }



  useEffect(() => {
    async function fetchProduct(){
      const response = await api.get(`/products/${params.product_id}`);
      
      const avatarUrl = `${api.defaults.baseURL}/files/${response.data.avatar}`
      setData(response.data);
      setAvatar(avatarUrl);
      
    }

    

    fetchProduct();





  },[]);


  return (
    <Container>

      <Header />

      <Content>
        <a onClick={() => handleBack()} > <CaretLeft />voltar</a>


        <div className="panelDescription">
          <img src={avatar} alt="" />

          <div className="descriptions">
            <h2>{data.name}</h2>
            <p>{data.description}</p>

            <div className="tags">
              <Tag
                title="Feijão" />
              <Tag
                title="Feijão" />
              <Tag
                title="Feijão" />
              <Tag
                title="Feijão" />
              <Tag
                title="Feijão" />
            </div>


            <div className="sale">
              <ContItems />

              <Button>
                <Receipt /> pedir - R$ {data.price}
              </Button>
            </div>
          </div>



        </div>





      </Content>


      <Footer />

    </Container >

  );
}