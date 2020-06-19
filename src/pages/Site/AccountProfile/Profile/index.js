import React, { useEffect, useState } from 'react';
import { Form, Input, Scope } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Container } from './styles';
import AccountProfile from '..';
// import api from '../../../../services/api';
import { updateUserRequest } from '../../../../store/module/user/actions';

function Profile() {
  const schema = Yup.object().shape({
    client: Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string()
        .matches(
          /^(\D\D[A-z]+ \D\D[A-z ]+)$/,
          'Favor inserir o nome e o sobrenome'
        )
        .required('Nome é obrigatorio'),
    }),
    user: Yup.object().shape({
      id: Yup.number().required(),
      oldPassword: Yup.string(),
      password: Yup.string().when('oldPassword', (oldPassword, field) =>
        oldPassword
          ? field
              .required('Nova senha é obrigatorio')
              .min(6, 'Mínimo de 6 caracters')
          : field
      ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password
          ? field
              .required('Nova senha é obrigatoria')
              .oneOf(
                [Yup.ref('password')],
                'A sua senha não bate com a informada'
              )
          : field
      ),
    }),
  });
  const dispacth = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    function load() {
      setInitialData({
        user: { id: profile.id, email: profile.email },
        client: profile.client,
      });
    }
    load();
  }, [profile.client, profile.email, profile.id]);

  async function handleSubmit(data) {
    try {
      // await api.put(`/clients/${data.client.id}`, data);
      dispacth(updateUserRequest(data));
      // toast.success('Dados alterados com sucesso');
    } catch (error) {
      toast.success('Erro tente novamente!');
    }
  }
  return (
    <AccountProfile>
      <Container>
        <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
          <section>
            <h2>Dados Básicos</h2>
            <Scope path="client">
              <Input name="id" hidden />
              <Input name="name" placeholder="Seu nome" />
              <Input name="cpf" placeholder="Seu CPF" readOnly />
            </Scope>
          </section>
          <section>
            <h2>Dados de Login</h2>
            <Scope path="user">
              <Input name="id" readOnly hidden />
              <Input name="email" type="email" placeholder="email" readOnly />
              <Input
                name="oldPassword"
                type="password"
                placeholder="Senha atual"
              />
              <Input name="password" type="password" placeholder="Nova senha" />
              <Input
                name="confirmPassword"
                type="password"
                placeholder="Confimer sua senha"
              />
            </Scope>
          </section>

          <button type="submit">Atualizar</button>
        </Form>
      </Container>
    </AccountProfile>
  );
}

export default Profile;
