import React from 'react';
import { Container, Form, ButtonCreate, ButtonSignin } from './style';

function SignUp() {
  return (
    <Container>
      <div className="img-left">
        <img
          src="https://i.pinimg.com/originals/8e/2e/c5/8e2ec5fe56c18e7ec01e8c416c5d450e.jpg"
          alt="Ilustração de Games"
        />
      </div>

      <Form>
        <div className="content">
          <h1>CompreGames.com</h1>
          <div className="name-surname">
            <input type="text" placeholder="Informe o seu nome" />
            <input type="text" placeholder="Informe o seu sobrenome" />
          </div>
          <input type="email" placeholder="Informe o email" />
          <input type="password" placeholder="Digite a senha" />
          <input type="password" placeholder="Confirme a senha" />
          <div className="buttons">
            <ButtonCreate>Create</ButtonCreate>
            <p>
              Already registered?{' '}
              <ButtonSignin to="/signin">Sign In</ButtonSignin>
            </p>
          </div>
        </div>
      </Form>
    </Container>
  );
}

export default SignUp;
