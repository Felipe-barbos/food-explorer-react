import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi"
import backgroundImg from "../../assets/Icon.svg";


export function SignIn() {
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
          />
        </div>

        <div className="inputWrapper">
          <p>Senha:</p>
          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
          />
        </div>


        <Button
          title="Entrar"
        />

        <a>Criar uma conta</a>

      </Form>
    </Container>
  );
}