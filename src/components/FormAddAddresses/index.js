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
    console.tron.warn('aki');
    try {
      const addAddress = Object.assign(address, {
        client_id: client.id,
        delivery: true,
      });
      console.tron.warn('aki');
      // new create
      const addresses = [addAddress];

      await api.post('/addresses', addresses);

      resetForm();
      toast.success('Sucesso');
    } catch (error) {
      toast.error('Algo errado aconteceu');
    }
  }
  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div>
          <h2>Endereço</h2>
        </div>

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
              setAddressDelivery({
                ...addressDelivery,
                number: e.target.value,
              })
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
            value={addressDelivery.street}
            readOnly
          />
          <Input
            name="neighborhood"
            type="text"
            placeholder="Bairro"
            value={addressDelivery.neighborhood}
            readOnly
          />
          <Input
            name="city"
            type="text"
            placeholder="Cidade"
            value={addressDelivery.city}
            readOnly
          />
          <Input
            name="state"
            type="text"
            placeholder="UF"
            value={addressDelivery.state}
            readOnly
          />
        </Scope>
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
