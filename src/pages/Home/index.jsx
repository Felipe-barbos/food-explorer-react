import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { Container, Content, ListCard, Panel } from "./styles";

import imagePrato from "../../assets/imgPratos/Imagens - Food Explorer-v2/Mask group-1.png";
import imagePanel from "../../assets/IconPanel.svg";
import { Footer } from "../../components/Footer";
import { useState } from "react";
import { SideMenu } from "../../components/SideMenu";

export function Home() {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (

    <Container >
      <SideMenu
      menuIsOpen={menuIsOpen}
      onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header
        onOpenMenu={() => setMenuIsOpen(true)}
       />



      <Content>

        <Panel>

          <img src={imagePanel} alt="" />
          <div className="textPanel">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Panel>


        <div className="listSection">



          <Section title="Refeições">

            <ListCard>


              <Card
                title="Prato Delicioso"
                src={imagePrato}
                price="15.90"

              />
              <Card
                title="Prato Delicioso"
                src={imagePrato}
                price="15.90"

              />
              <Card
                title="Prato Delicioso"
                src={imagePrato}
                price="15.90"

              />
              <Card
                title="Prato Delicioso"
                src={imagePrato}
                price="15.90"

              />

            </ListCard>

          </Section>

          <Section title="Pratos principais">
            <ListCard>
              <Card
                title="Prato Delicioso"
                src={imagePrato}
                price="15.90"

              />
              <Card
                title="Prato Delicioso"
                src={imagePrato}
                price="15.90"

              />
              <Card
                title="Prato Delicioso"
                src={imagePrato}
                price="15.90"

              />
              <Card
                title="Prato Delicioso"
                src={imagePrato}
                price="15.90"

              />
              <Card
                title="Prato Delicioso"
                src={imagePrato}
                price="15.90"

              />
            </ListCard>
          </Section>


        </div>
      </Content>

      <Footer />
    </Container>
  );
}