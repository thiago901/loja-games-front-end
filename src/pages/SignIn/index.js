import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Input } from '@rocketseat/unform';
import { Container, FormLogin, ButtonLogin, ButtonSignUp } from './style';
import AnimationCube from '../../components/AnimationCube';

import { signInRequest } from '../../store/module/auth/actions';

function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <Container>
      <div className="img-left">
        <img
          src="https://i.pinimg.com/originals/8e/2e/c5/8e2ec5fe56c18e7ec01e8c416c5d450e.jpg"
          alt="Ilustração de Games"
        />
      </div>

      <FormLogin onSubmit={handleSubmit}>
        <div className="content">
          <h1>CompreGames.com</h1>
          <Input type="email" placeholder="Informe o email" name="email" />
          <Input type="password" placeholder="Digite a senha" name="password" />
          <div className="buttons">
            <ButtonLogin type="submit">Login</ButtonLogin>
            <ButtonSignUp to="/signUp">Sign Up</ButtonSignUp>
          </div>
        </div>
        <AnimationCube />
      </FormLogin>
    </Container>
  );
}

export default SignIn;
