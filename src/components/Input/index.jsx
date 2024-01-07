import { Container } from "./styles";



export function Input({ Icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon  />}

      <input {...rest} />

     
    </Container>
  );
}