import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, ButtonLogin, ButtonSignUp } from './style';

function SignIn() {
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
          <input type="email" placeholder="Informe o email" />
          <input type="password" placeholder="Digite a senha" />
          <div className="buttons">
            <ButtonLogin>Login</ButtonLogin>
            <Link to="/signUp">
              <ButtonSignUp>Sign Up</ButtonSignUp>
            </Link>
          </div>
        </div>
      </Form>
    </Container>
  );
}

export default SignIn;
