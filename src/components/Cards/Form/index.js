import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';

import { FormCards as Form } from './styles';
import api from '../../../services/api';

function FormCard({ payment }) {
  const [saveCard, setSaveCard] = useState(false);
  const user = useSelector(state => state.user);
  const schema = Yup.object().shape({
    id: Yup.string(),
    card_number: Yup.string().required('Número obrigatorio'),
    card_owner: Yup.string().required('Nome obrigatorio'),
    month: Yup.number()
      .required('Mês obrigatorio')
      .typeError('Mês obrigatorio'),
    year: Yup.number()
      .required('Ano obrigatorio')
      .typeError('Ano obrigatorio'),
    cvv: Yup.number()
      .required('CVV obrigatorio')
      .typeError('CVV obrigatorio'),
    installments: Yup.number()
      .required('Parcelas obrigatorio')
      .typeError('Parcelas obrigatorio'),
  });
  const months = [
    { id: 1, title: 'Janeiro' },
    { id: 2, title: 'Fevereiro' },
    { id: 3, title: 'Março' },
    { id: 4, title: 'Abril' },
    { id: 5, title: 'Maio' },
    { id: 6, title: 'Junho' },
    { id: 7, title: 'Julho' },
    { id: 8, title: 'Agosto' },
    { id: 9, title: 'Setembro' },
    { id: 10, title: 'Outubro' },
    { id: 11, title: 'Novembro' },
    { id: 12, title: 'Dezembro' },
  ];

  const years = () => {
    const obj = [];
    const data = new Date().getFullYear();

    // eslint-disable-next-line no-plusplus
    for (let index = data; index < data + 20; index++) {
      const year = { id: index, title: index };
      obj.push(year);
    }
    return obj;
  };

  async function handleSaveCard(data) {
    console.tron.warn('handleSaveCard');
    // try {
    //   await api.post('/cards', {
    //     ...data,
    //     client_id: user.profile.client.id,
    //   });
    // } catch (error) {
    //   toast.error(error);
    // }
  }
  async function handleFinish(data) {
    // let newCardId = null;
    try {
      //   if (saveCard) {
      //     const response = await handleSaveCard(data);
      //     newCardId = response.id;
      //   }

      const dataSale = {
        client_id: payment.client_id,
        total_price: payment.total_price,
        installments: data.installments,
        freight: payment.freight,
        payment_id: 2,
        card_id: data.id ? data.id : null,
        address_id: payment.address_id,
        products: payment.products,
        card: { ...data, name: data.card_owner, number_card: data.card_number },
      };

      await api.post('/sales', dataSale);

      // dispatch(clearCart());
      // history.push('/payment/finish', { order: sale.data.id });
      toast.success('Sucesso');
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Opss, um erro aconteceu');
      }
    }
  }
  return (
    <Form onSubmit={payment ? handleFinish : handleSaveCard} schema={schema}>
      <Input name="id" hidden type="text" />
      <Input
        name="card_owner"
        type="text"
        placeholder="Nome impresso no cartão"
      />
      <Input name="card_number" type="text" placeholder="Número do cartão" />

      <div>
        <Select name="month" options={months} placeholder="Mês" />
        <Select name="year" options={years()} placeholder="Ano" />
      </div>

      <Input name="cvv" type="text" placeholder="CVV" />
      <Input name="installments" type="text" placeholder="Parcelar em" />

      <div className="divSaveCard">
        <input
          type="checkbox"
          id="saveCard"
          onChange={e => setSaveCard(e.target.checked)}
        />
        <label htmlFor="saveCard">Selecione para salvar cartão</label>
      </div>
      <div>
        <button type="submit">Paga com cartão</button>
      </div>
    </Form>
  );
}

export default FormCard;
