import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input, Scope } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import apiCep from '../../services/cepApi';
import api from '../../services/api';
import { Container } from './styles';

export default function FormAddAddresses() {
  const client = useSelector(state => state.user.profile.client);
  const schema = Yup.object().shape({
    address: Yup.object().shape({
      name: Yup.string().required('Nome obrigatorio'),
      cep: Yup.string().required('CEP é obrigatorio'),
      number: Yup.number('Apenas números')
        .required('Número é obrigatorio')
        .typeError('Apenas números')
        .positive('Formato invalido'),
      complement: Yup.string(),
      street: Yup.string().required('Rua é obrigatorio'),
      neighborhood: Yup.string(),
      city: Yup.string(),
      state: Yup.string(),
    }),
  });
  const [addressDelivery, setAddressDelivery] = useState({});

  async function handleCep(cep) {
    try {
      const response = await apiCep.get(`/${cep}/json`);
      const {
        uf: state,
        localidade: city,
        bairro: neighborhood,
        logradouro: street,
      } = response.data;

      setAddressDelivery({
        ...addressDelivery,
        state,
        city,
        neighborhood,
        street,
      });
    } catch (error) {
      toast.error('CEP inválido');
    }
  }
  async function handleSubmit({ address }, { resetForm }) {
    try {
      const addAddress = Object.assign(address, {
        client_id: client.id,
        add: true,
      });

      await api.post('/addresses', addAddress);

      resetForm();
      toast.success('Sucesso');
    } catch (error) {
      toast.error('Algo errado aconteceu');
    }
  }
  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h2>Endereço</h2>
        <Scope path="address">
          <Input name="name" type="text" placeholder="Nome do destinatario" />
          <Input
            name="cep"
            type="text"
            placeholder="CEP"
            onBlur={e => handleCep(e.target.value)}
          />
          <Input
            name="number"
            type="text"
            placeholder="Número"
            onBlur={e =>
              setAddressDelivery({ ...addressDelivery, number: e.target.value })
            }
          />
          <Input
            name="complement"
            type="text"
            placeholder="Complemento"
            onBlur={e =>
              setAddressDelivery({
                ...addressDelivery,
                complement: e.target.value,
              })
            }
          />
          <Input
            name="street"
            className="street"
            type="text"
            placeholder="Rua"
            readOnly
            value={addressDelivery.street}
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
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
