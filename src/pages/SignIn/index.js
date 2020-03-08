import React from 'react';

import { Container, Form, ButtonLogin, ButtonSignUp } from './style';
import AnimationCube from '../../components/AnimationCube';

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
            <ButtonSignUp to="/signUp">Sign Up</ButtonSignUp>
          </div>
        </div>
        <AnimationCube />
      </Form>
    </Container>
  );
}

export default SignIn;
