import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Content, Button } from "./styles";
import { CaretLeft, Receipt } from "@phosphor-icons/react";

import imagePrato from "../../assets/imgPratos/Imagens - Food Explorer-v2/Mask group-1.png";
import { ContItems } from "../../components/ContItems";
import { Tag } from "../../components/Tags";


export function DishView({ src, price, title }) {
  return (
    <Container>

      <Header />

      <Content>
        <a> <CaretLeft />voltar</a>


        <div className="panelDescription">
          <img src={imagePrato} alt="" />

          <div className="descriptions">
            <h2>Prato Delicioso</h2>
            <p>Rabanetes, folhas verde e molho agridoce salpicados com gergelim.</p>

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
                <Receipt /> pedir - R$ 25,00
              </Button>
            </div>
          </div>



        </div>





      </Content>


      <Footer />

    </Container >

  );
}