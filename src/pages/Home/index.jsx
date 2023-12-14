import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { Container, Content } from "./styles";

import imagePrato from "../../assets/imgPratos/Imagens - Food Explorer-v2/Mask group-1.png";


export function Home() {
  return (

    <Container >
      <Header />

      <Content>


        <Section title="Refeições">

          <div className="elements">


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

          </div>

        </Section>
      </Content>
    </Container>
  );
}