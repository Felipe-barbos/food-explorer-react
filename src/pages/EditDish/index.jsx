import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IngredientsItem } from "../../components/IngredientsItem";
import { Input } from "../../components/Input";
import { Container, Form, IngredientsList } from "./styles";
import { CaretLeft } from "@phosphor-icons/react";


export function EditDish() {
  return (

    <Container>

      <Header />

      <Form>

        <a> <CaretLeft />voltar</a>
        <h1>Editar Prato</h1>



        <div className="panelOne">
          <div className="input-wrapper">
            <label>Imagem do Prato</label>
            <Button title="Selecione imagem" />
          </div>
          <div className="input-wrapper">
            <label>Nome</label>
            <Input placeholder="Ex: Salada Ceasar"></Input>
          </div>

          <div className="input-wrapper">
            <label>Categoria</label>
            <select name="Refeição">
              <option value="Refeição">Refeição</option>
              <option value="Porção" >Porção</option>
              <option value="Bebida">Bebida</option>
            </select>
          </div>
        </div>



        <div className="panelTwo">
          <div className="input-wrapper">


            <label>Ingredientes</label>
            <IngredientsList>
              <IngredientsItem
                value="Maçã"
              />
              <IngredientsItem
                isNew
                value="Laranja"
              />
            </IngredientsList>
          </div>

          <div className="input-wrapper">
            <label>Preço</label>
            <Input placeholder="R$: 00,00"
              type="number"></Input>
          </div>

        </div>


        <div className="input-wrapper">
          <label>Descrição</label>
          <textarea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></textarea>
        </div>



        <div className="panelTree">
          <button>Excluir prato</button>

          <button>Salvar Alterações</button>
        </div>

      </Form>

      <Footer />
    </Container>
  );
}