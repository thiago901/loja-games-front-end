import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Input, Scope } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container, ButtonCreate, ButtonSignin } from './style';

import AnimationCube from '../../components/AnimationCube';
import api from '../../services/api';
import history from '../../services/history';
import apiCep from '../../services/cepApi';

function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Mínimo de 3 caracteres')
      .matches(
        /^(\D\D[A-z]+ \D\D[A-z ]+)$/,
        'Favor inserir o nome e o sobrenome'
      )
      .required('Nome é obrigatorio'),
    cpf: Yup.string().required('CPF é obrigatorio'),
    email: Yup.string()
      .email()
      .required('Email é obrigatorio'),
    password: Yup.string()
      .min(8, 'Mínimo de 8 caracteres')
      .required('Senha é obrigatorio'),
    addresses: Yup.array().of(
      Yup.object().shape({
        cep: Yup.string().required('CEP é obrigatorio'),
        number: Yup.number('Apenas números')
          .required('Número é obrigatorio')
          .typeError('Apenas números')
          .positive('Formato invalido'),
        complement: Yup.string(),
        street: Yup.string().required('Rua é obrigatorio'),
        neighborhood: Yup.string(),
        state: Yup.string(),
        city: Yup.string(),
      })
    ),
  });

  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  async function handleSubmit(data) {
    try {
      const { name, cpf, email, password, addresses } = data;

      await api.post('/clients', {
        name,
        cpf,
        email,
        password,
        addresses,
      });

      toast.success('Usuario criado com sucesso');
      history.push('/signin');
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error('Opss, um erro aconteceu');
      }
    }
  }

  async function handleCep(cep) {
    try {
      const response = await apiCep.get(`/${cep}/json`);
      const { uf, localidade, bairro, logradouro } = response.data;
      setCity(localidade);
      setNeighborhood(bairro);
      setState(uf);
      setStreet(logradouro);
    } catch (error) {
      toast.error('CEP inválido');
    }
  }
  return (
    <Container>
      <div className="img-left">
        <img
          src="https://i.pinimg.com/originals/8e/2e/c5/8e2ec5fe56c18e7ec01e8c416c5d450e.jpg"
          alt="Ilustração de Games"
        />
      </div>

      <Form schema={schema} onSubmit={handleSubmit}>
        <h1>CompreGames.com</h1>
        <div className="content">
          <Input name="name" type="text" placeholder="Informe o seu nome" />
          <Input name="cpf" type="text" placeholder="Informe o seu CPF" />

          <Scope path="addresses[0]">
            <div className="group">
              <Input
                name="cep"
                type="text"
                placeholder="CEP"
                onBlur={e => handleCep(e.target.value)}
              />
              <Input name="number" type="text" placeholder="Número" />
              <Input name="complement" type="text" placeholder="Complemento" />
            </div>
            <div className="group">
              <Input
                name="street"
                type="text"
                placeholder="Rua"
                style={{ width: 600 }}
                readOnly
                value={street}
              />

              <Input
                name="neighborhood"
                type="text"
                placeholder="Bairro"
                readOnly
                value={neighborhood}
              />
              <Input
                name="state"
                type="text"
                placeholder="UF"
                readOnly
                style={{ width: 50 }}
                value={state}
              />
              <Input
                name="city"
                type="text"
                placeholder="Cidade"
                readOnly
                value={city}
              />
            </div>
          </Scope>
          <Input name="email" type="email" placeholder="Informe o email" />
          <Input name="password" type="password" placeholder="Digite a senha" />
          <div className="buttons">
            <ButtonCreate>Create</ButtonCreate>
            <p>
              Already registered?{' '}
              <ButtonSignin to="/signin">Sign In</ButtonSignin>
            </p>
          </div>
        </div>

        <AnimationCube />
      </Form>
    </Container>
  );
}

export default SignUp;
