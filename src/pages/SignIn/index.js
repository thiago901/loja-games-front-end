import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, ButtonLogin, ButtonSignUp } from './style';
import AnimationCube from '../../components/AnimationCube';

import { signInRequest } from '../../store/module/auth/actions';

function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit() {
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

      <Form>
        <div className="content">
          <h1>CompreGames.com</h1>
          <input
            type="email"
            placeholder="Informe o email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Digite a senha"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <div className="buttons">
            <ButtonLogin type="button" onClick={handleSubmit}>
              Login
            </ButtonLogin>
            <ButtonSignUp to="/signUp">Sign Up</ButtonSignUp>
          </div>
        </div>
        <AnimationCube />
      </Form>
    </Container>
  );
}

export default SignIn;
