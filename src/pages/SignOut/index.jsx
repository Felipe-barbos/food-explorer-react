import { Container, Form } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi"
import backgroundImg from "../../assets/Icon.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";


export function SignOut() {


  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  function handleSingUp(){


    if(!name || !email || !password){
      return alert("Por favor, preencha todos os campos!");
    }

    console.log(name, email, password);


   //realizando o cadastro do usuario no back-end
   api.post("/users/create", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate(-1);
      }).catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar!");
        }
      });


  
  }



  return (
    <Container>

      <h1> <img src={backgroundImg} alt="" /> Food Explorer</h1>

      <Form>
        <h2>Crie sua conta</h2>

        <div className="inputWrapper">
          <p>Seu nome</p>
          <Input
            placeholder="Exemplo: Felipe Barbosa"
            type="text"
            icon={FiLogIn}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="inputWrapper">
          <p>E-mail</p>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="inputWrapper">
          <p>Senha</p>
          <Input
            placeholder="No mínimo 8 caracteres"
            type="password"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
          />
        </div>


        <Button
          title="Criar conta"
          onClick={handleSingUp}
        />

        <Link to="/">Já tenho uma conta</Link>




      </Form>
    </Container>

  );
}