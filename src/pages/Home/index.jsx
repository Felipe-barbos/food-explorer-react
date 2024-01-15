import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { Container, Content, ListCard, Panel } from "./styles";

import imagePrato from "../../assets/imgPratos/Imagens - Food Explorer-v2/Mask group-1.png";
import imagePanel from "../../assets/IconPanel.svg";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { SideMenu } from "../../components/SideMenu";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

export function Home() {

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [products, setProducts] = useState([]);
  



  useEffect(() => {
    async function handleGetProducts(){
      const response = await api.get(`/products/`);

      setProducts(response.data);
    }

    handleGetProducts(); 
  },[]);





  function renderDish(products){
    if(products.length == 0){
      return(
        <h1>Não há produtos para serem demonstrados.</h1>
      );
    }else{
      return(
        products.dishes.map(dish => (
          <Card 
            key={dish.id}
            data={
              {
                id: dish.id,
                title: dish.name,
                avatar: dish.avatar,
                price: dish.price,
                description: dish.description
              }
            }

           
           

          />
        ))
      )
    }
  }

  
  function renderDrink(products){
    if(products.length  == 0){
      return(
        <h1>Não há produtos para serem demonstrados.</h1>
      );
    }else{
      return(
        products.drinks.map(drink => (
          <Card 
            key={drink.id}
            data={
              {
                id: drink.id,
                title: drink.name,
                avatar: drink.avatar,
                price: drink.price,
                description: drink.description
              }

            }
           
        

        
          
          />
        ))
      )
    }
  }



  


  






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



          <Section title="Pratos principais">

            <ListCard>

              {renderDish(products)}
              

            </ListCard>

          </Section>

          <Section title="Bebidas principais">
            <ListCard>
            {renderDrink(products)}
            </ListCard>
          </Section>


        </div>
      </Content>

      <Footer />
    </Container>
  );
}