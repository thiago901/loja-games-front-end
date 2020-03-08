import React from 'react';

import { Container, Form, Button } from './style';

function SignIn() {
  return (
    <Container>
      <div>
        <img
          src="https://api.thegameawards.com/wp-content/uploads/2019/12/tga-news-featured-1.jpg"
          alt="Ilustração de Games"
        />
      </div>

      <Form>
        <div>
          <h1>CompreGames.com</h1>
          <input type="email" placeholder="Informe o email" />
          <input type="password" placeholder="Digite a senha" />
          <Button>Entrar</Button>
        </div>
      </Form>
    </Container>
  );
}

export default SignIn;
