import React from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../constants/user";
import { useForm } from "../../hooks/useForm";
import useUnProtectedPage from "../../hooks/useUnprotectedPage";
import { goToSignUpPage } from "../../router/coordinator";
import logo from "../../assets/img/logo-future-eats-invert.png";
import {
  LoginContainer,
  Logo,
  TextLogin,
  Title,
  RectanglePassword,
  RectangleEmail,
  Input,
  Button,
  TextRegister,
  DivRegister,
  
} from "../loginPage/styled";

function LoginPage() {
  useUnProtectedPage();
  const history = useHistory();
  const { form, onChange } = useForm({ email: "", password: "" });

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(form, history);
  };

  return (
    <LoginContainer>
      <Logo img src={logo} />
      <Title>
        <TextLogin>Entrar</TextLogin>
      </Title>

      <form onSubmit={handleSubmit}>
        <RectangleEmail>
          <Input
            placeholder="E-mail"
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
          />
        </RectangleEmail>

        <RectanglePassword>
          <Input
            placeholder="Senha"
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            pattern={"[A-Za-z0-9 ]{6,}"}
            required
          />
        </RectanglePassword>
       
          <Button> Entrar </Button>
        
      </form>

      <DivRegister>
        <TextRegister onClick={() => goToSignUpPage(history)}>
          Não possui cadastro? Clique aqui!
        </TextRegister>
      </DivRegister>
    </LoginContainer>
  );
}

export default LoginPage;
