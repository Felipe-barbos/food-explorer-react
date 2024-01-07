import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi"
import backgroundImg from "../../assets/Icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn() {

  const {signIn} = useAuth();

  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");


  function handleSignIn(){
    console.log(email, password);
    signIn({email, password});
  }

  return (
    <Container>

      <h1> <img src={backgroundImg} alt="" /> Food Explorer</h1>

      <Form>
        <h2>Faça Login</h2>

        <div className="inputWrapper">
          <p>E-mail:</p>
          <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="inputWrapper">
          <p>Senha:</p>
          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
          />
        </div>


        <Button
          title="Entrar"
          onClick={handleSignIn}
        />

        <Link  to="/signUp">Criar uma conta</Link>

      </Form>
    </Container>
  );
}