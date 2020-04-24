import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Scope } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { updateUserRequest } from '../../store/module/user/actions';
import api from '../../services/api';
import apiCep from '../../services/cepApi';
import { Container } from './styles';
import Site from '../_layouts/site';

export default function Profile() {
  const schema = Yup.object().shape({
    client: Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string()
        .matches(
          /^(\D\D[A-z]+ \D\D[A-z ]+)$/,
          'Favor inserir o nome e o sobrenome'
        )
        .required('Nome é obrigatorio'),
      cpf: Yup.string(),
    }),
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

    address: Yup.object().shape({
      id: Yup.string().required(),
      cep: Yup.string().required('CEP é obrigatorio'),
      number: Yup.number('Apenas números')
        .required('Número é obrigatorio')
        .typeError('Apenas números')
        .positive('Formato invalido'),
      complement: Yup.string(),
      street: Yup.string(),
      neighborhood: Yup.string(),
      city: Yup.string(),
      state: Yup.string(),
    }),
    addressInvoice: Yup.object().shape({
      id: Yup.string().required(),
      cep: Yup.string().required('CEP é obrigatorio'),
      number: Yup.number('Apenas números')
        .required('Número é obrigatorio')
        .typeError('Apenas números')
        .positive('Formato invalido'),
      complement: Yup.string(),
      street: Yup.string(),
      neighborhood: Yup.string(),
      city: Yup.string(),
      state: Yup.string(),
    }),
  });
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const [addressDelivery, setAddressDelivery] = useState({});
  const [addressInvoice, setAddressInvoice] = useState({});

  useEffect(() => {
    async function load() {
      const response = await api.get(`/addresses/client/${profile.client.id}`);
      return response.data.map(a =>
        a.delivery ? setAddressDelivery(a) : setAddressInvoice(a)
      );
    }
    load();
  }, [profile.client.id]);

  async function handleSubmit(data) {
    try {
      setAddressDelivery(data.address);
      setAddressInvoice(data.addressInvoice);

      await api.put(`/addresses/${data.address.id}`, data.address);
      await api.put(
        `/addresses/${data.addressInvoice.id}`,
        data.addressInvoice
      );

      dispatch(updateUserRequest(data));
      toast.success('Dados atualizados');
    } catch (error) {
      toast.success('Aconteceu um erro, verifique os dados e tente novamente');
    }
  }
  async function handleCep(cep) {
    const response = await apiCep.get(`/${cep}/json`);
    const {
      uf: state,
      localidade: city,
      bairro: neighborhood,
      logradouro: street,
    } = response.data;
    const { id, number, complement } = addressDelivery;
    const novo = {
      id,
      state,
      city,
      neighborhood,
      street,
      number,
      complement,
    };

    setAddressDelivery(novo);
  }
  async function handleCepInvoice(cep) {
    const response = await apiCep.get(`/${cep}/json`);
    const {
      uf: state,
      localidade: city,
      bairro: neighborhood,
      logradouro: street,
    } = response.data;
    const { id, number, complement } = addressInvoice;
    const novo = {
      id,
      state,
      city,
      neighborhood,
      street,
      number,
      complement,
    };

    setAddressInvoice(novo);
  }
  return (
    <Site>
      <Container>
        <Form
          initialData={{ ...profile, address: addressDelivery, addressInvoice }}
          schema={schema}
          onSubmit={handleSubmit}
        >
          <section>
            <h2>Dados Básicos</h2>
            <Scope path="client">
              <Input name="id" hidden />
              <Input name="name" placeholder="Seu nome" />
              <Input name="cpf" placeholder="Seu CPF" readOnly />
            </Scope>
          </section>

          <section className="address">
            <h2>Endereço de Entrega</h2>

            <Scope path="address">
              <Input name="id" hidden value={addressDelivery.id} />
              <Input
                name="cep"
                type="text"
                placeholder="CEP"
                onBlur={e => handleCep(e.target.value)}
              />

              <Input name="number" type="text" placeholder="Número" />
              <Input name="complement" type="text" placeholder="Complemento" />
              <Input
                name="street"
                className="street"
                type="text"
                placeholder="Rua"
                readOnly
                value={addressDelivery.street}
                style={{ width: '100%' }}
              />

              <Input
                name="neighborhood"
                type="text"
                placeholder="Bairro"
                readOnly
                value={addressDelivery.neighborhood}
              />
              <Input
                name="city"
                type="text"
                placeholder="Cidade"
                readOnly
                value={addressDelivery.city}
              />
              <Input
                name="state"
                type="text"
                placeholder="UF"
                readOnly
                value={addressDelivery.state}
              />
            </Scope>
          </section>

          <section className="address">
            <h2>Endereço de Faturamento</h2>
            <Scope path="addressInvoice">
              <Input name="id" hidden value={addressInvoice.id} />
              <Input
                name="cep"
                type="text"
                placeholder="CEP"
                onBlur={e => handleCepInvoice(e.target.value)}
              />
              <Input name="number" type="text" placeholder="Número" />
              <Input name="complement" type="text" placeholder="Complemento" />
              <Input
                name="street"
                type="text"
                placeholder="Rua"
                readOnly
                value={addressInvoice.street}
                style={{ width: '100%' }}
              />
              <Input
                name="neighborhood"
                type="text"
                placeholder="Bairro"
                readOnly
                value={addressInvoice.neighborhood}
              />
              <Input
                name="city"
                type="text"
                placeholder="Cidade"
                readOnly
                value={addressInvoice.city}
              />

              <Input
                name="state"
                type="text"
                placeholder="UF"
                readOnly
                value={addressInvoice.state}
              />
            </Scope>
          </section>
          <section>
            <h2>Dados de Login</h2>

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
          </section>
          <button type="submit">Atualizar</button>
        </Form>
      </Container>
    </Site>
  );
}
