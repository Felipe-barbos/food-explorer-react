import { Container, Form } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi"
import backgroundImg from "../../assets/Icon.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function SignOut() {
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
            icon={FiMail}
          />
        </div>

        <div className="inputWrapper">
          <p>E-mail</p>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            icon={FiMail}
          />
        </div>

        <div className="inputWrapper">
          <p>Senha</p>
          <Input
            placeholder="No mínimo 8 caracteres"
            type="password"
            icon={FiLock}
          />
        </div>


        <Button
          title="Criar conta"
        />

        <a>Já tenho uma conta</a>

      </Form>
    </Container>

  );
}