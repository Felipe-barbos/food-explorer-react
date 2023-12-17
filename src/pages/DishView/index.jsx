import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Container, Content } from "./styles";
import { Panel } from "@phosphor-icons/react";

import imagePrato from "../../assets/imgPratos/Imagens - Food Explorer-v2/Mask group-1.png";
import { ContItems } from "../../components/ContItems";


export function DishView({ src, price, title }) {
  return (
    <Container>

      <Header />

      <Content>
        <a> <CaretLeft />voltar</a>

        <img src={imagePrato} alt="" />
        <h2>Prato Delicioso</h2>
        <p>Rabanetes, folhas verde e molho agridoce salpicados com gergelim.</p>

        <div className="tags">

        </div>

        <div className="sale">
          <ContItems />

          <Button
            title={Panel + "pedir - R$ 25,00"}
          />
        </div>

      </Content>


      <Footer />

    </Container>

  );
}