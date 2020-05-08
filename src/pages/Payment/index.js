import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { GoogleApiWrapper } from 'google-maps-react';
import {
  MdHome,
  MdCreditCard,
  MdAttachMoney,
  MdPrint,
  MdLaptop,
  MdToday,
  MdLockOutline,
  MdAdd,
} from 'react-icons/md';

import { toast } from 'react-toastify';
import {
  Container,
  DataDelivry,
  OrderResume,
  MethodPayment,
  CreditCard,
  PaymentSlip,
  AddressClient,
  ContainerAddAndDeleteAddresses,
} from './styles';
import FormAddAddress from '../../components/FormAddAddresses';
import Modal from '../../components/PageModal';
import Checkout from '../../components/Checkout';
import api from '../../services/api';
import history from '../../services/history';
import { formatPrice } from '../../util/format';
import { clearCart } from '../../store/module/cart/actions';

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

function Payment(props) {
  const schema = Yup.object().shape({
    card_number: Yup.number()
      .required('Número obrigatorio')
      .typeError('Número obrigatorio'),
    card_owner: Yup.string().required('Nome obrigatorio'),
    month: Yup.number()
      .required('Mês obrigatorio')
      .typeError('Mês obrigatorio'),
    year: Yup.number()
      .required('Ano obrigatorio')
      .typeError('Ano obrigatorio'),
    installments: Yup.number()
      .max(12, 'Você pode parcelar em até 12x')
      .min(1, 'Você pode parcelar em até 12x')
      .required('Parcelas obrigatorias')
      .typeError('Parcelas obrigatorio'),
    cvv: Yup.number()
      .required('CVV é obrigatório')
      .positive('Número invalido')
      .typeError('Número invalido'),
  });
  const dispatch = useDispatch();

  const { google } = props;
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState({});
  const [saveCard, setSaveCard] = useState(false);

  const [frete, setFrete] = useState({ value: 0, text: formatPrice(0) });

  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.cart.cart);

  async function handleCalcFrete(cep) {
    const origin1 = '05847620';
    const destinationA = cep;
    console.tron.warn(cep);

    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin1],
        destinations: [destinationA],
        travelMode: 'DRIVING',
      },
      function callback(response, status) {
        if (status === 'OK') {
          setFrete({
            value:
              (Number(response.rows[0].elements[0].distance.value) / 1000) *
              1.2,
            text: formatPrice(
              (Number(response.rows[0].elements[0].distance.value) / 1000) * 1.2
            ),
          });
        } else {
          throw new Error('erro');
        }
      }
    );
  }
  function handleValues(value) {
    return {
      text: formatPrice(value),
      value,
    };
  }
  const cartSize = cart.length;
  const subTotal = handleValues(
    cart.reduce((r, product) => {
      return r + product.price * product.amount;
    }, 0)
  );
  // const frete = handleValues(20.0);
  const total = handleValues(subTotal.value + frete.value);

  useEffect(() => {
    async function load() {
      const response = await api.get(
        `/addressesCurrent/client/${user.profile.client.id}`
      );
      setAddress(response.data);
      await handleCalcFrete(response.data.cep);
    }
    load();
  }, [user.profile.client.id]);

  async function handleAddressDelivery(id) {
    const response = await api.put(
      `/addressesCurrent/client/${user.profile.client.id}`,
      { address_id: id }
    );

    if (response.status === 200) {
      window.location.reload();
    }
  }
  async function handleListAddresses() {
    const response = await api.get(
      `addresses/client/${user.profile.client.id}`
    );

    setAddresses(response.data);
  }

  async function handleSaveCard(data) {
    try {
      await api.post('/cards', { ...data, client_id: user.profile.client.id });
      toast.success('Cartão salvo');
    } catch (error) {
      toast.error(error);
    }
  }
  async function handleFinish(data) {
    try {
      if (saveCard) {
        handleSaveCard(data);
      }

      const dataSale = {
        client_id: user.profile.client.id,
        total_price: total.value.toFixed(2),
        status: 'APROVADO',
        installments: data.installments,
        payment_id: 1,
      };
      const sale = await api.post('/sales', { ...dataSale });

      const dataSaleDatail = cart.map(p => ({
        amount: p.amount,
        unit_price: p.price,
        freight: frete.value || 20,
        product_id: p.id,
        sale_id: sale.data.id,
        address_id: address.id,
      }));
      await api.post('/saledetails', { products: dataSaleDatail });

      await api.post('/sales/historycard', {
        sales_id: sale.data.id,
        name: data.card_owner,
        number_card: data.card_number,
        month: data.month,
        year: data.year,
      });

      await api.post('/stock/sale', { products: dataSaleDatail });
      dispatch(clearCart());
      history.push('/payment/finish', { order: sale.data.id });
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
    <>
      <Checkout />
      <Container>
        <DataDelivry>
          <h1>Endereço de entrega</h1>
          <dl>
            <dd>{address.name}</dd>
            <dd>{`${address.street}, ${address.number}, ${address.complement}`}</dd>
            <dd>{address.neighborhood}</dd>
            <dd>{`${address.city} - ${address.state}`}</dd>
            <dd>{address.cep}</dd>
          </dl>

          <input
            hidden
            type="checkbox"
            name=""
            id="updateAddress"
            onClick={handleListAddresses}
          />

          <ContainerAddAndDeleteAddresses>
            <label htmlFor="updateAddress">
              <MdHome size={20} color="#222" />
              Alterar endereço
            </label>
            <label htmlFor="AddAddress">
              <MdAdd size={20} color="#222" />
              Add endereço
            </label>
          </ContainerAddAndDeleteAddresses>
          <AddressClient className="AddressClient">
            <ul>
              <label htmlFor="updateAddress" className="close">
                X
              </label>
              {addresses.map(a => (
                <li key={a.id}>
                  <input
                    type="radio"
                    name="address"
                    id={a.id}
                    onClick={() => handleAddressDelivery(a.id)}
                  />
                  <label htmlFor={a.id}>
                    <dl>
                      <dd>{a.name}</dd>
                      <dd>{`${a.street}, ${a.number}, ${a.complement}`}</dd>
                      <dd>{a.neighborhood}</dd>
                      <dd>{`${a.city} - ${a.state}`}</dd>
                      <dd>{a.cep}</dd>
                    </dl>
                  </label>
                </li>
              ))}
            </ul>
          </AddressClient>

          <input hidden type="checkbox" name="" id="AddAddress" />
          <Modal>
            <label htmlFor="AddAddress" className="close">
              X
            </label>
            <FormAddAddress />
          </Modal>
        </DataDelivry>
        <OrderResume>
          <h1>Resumo do pedido</h1>
          <table>
            <tr>
              <td>
                <span>{cartSize || 0} produtos </span>
                <Link to="/cart">visualizar</Link>
              </td>
              <td>{subTotal.text}</td>
            </tr>
            <tr>
              <td>Frete</td>
              <td>{frete.text}</td>
            </tr>
          </table>
          <section>
            <span>Total</span>
            <strong>{total.text}</strong>
          </section>
        </OrderResume>
        <MethodPayment>
          <CreditCard className="CreditCard">
            <input type="radio" name="PaymentMethod" id="CreditCard" />
            <label htmlFor="CreditCard">
              <MdCreditCard size={60} color="#222" />
            </label>
            <label htmlFor="CreditCard">Cartão de Credito </label>
            <Form onSubmit={handleFinish} schema={schema}>
              <Input
                name="card_owner"
                type="text"
                placeholder="Nome impresso no cartão"
              />
              <Input
                name="card_number"
                type="text"
                placeholder="Número do cartão"
              />

              <div>
                <Select name="month" options={months} placeholder="Mês" />
                <Select name="year" options={years()} placeholder="Ano" />
              </div>
              <Input name="cvv" type="text" placeholder="CVV" />
              <Input
                name="installments"
                type="text"
                placeholder="Parcelar em"
              />
              <div>
                <label htmlFor="saveCard">
                  Salvar dados para compras futuras
                </label>
                <input
                  type="checkbox"
                  id="saveCard"
                  onChange={e => setSaveCard(e.target.checked)}
                />
              </div>
              <div>
                <button type="submit">Paga com cartão</button>
              </div>
            </Form>
          </CreditCard>
          <PaymentSlip className="PaymentSlip">
            <input type="radio" name="PaymentMethod" id="PaymentSlip" />

            <label htmlFor="PaymentSlip">
              <MdAttachMoney size={60} color="#222" />
            </label>
            <label htmlFor="PaymentSlip">Boleto</label>
            <div className="teste">
              <ul>
                <li>
                  <MdPrint size={40} color="#222" />
                  <span>Imprima o boleto e pague no banco</span>
                </li>
                <li>
                  <MdLaptop size={40} color="#222" />
                  <span>
                    ou pague pela internet utilizando o código de barras do
                    boleto
                  </span>
                </li>
                <li>
                  <MdToday size={40} color="#222" />
                  <span>o prazo de validade do boleto é de 1 dia útil</span>
                </li>
              </ul>
              <section>
                <div className="total">
                  <span>Total</span>
                  <strong>{total.text}</strong>
                </div>
                <button type="button">Pagar com boleto</button>
                <div className="auth">
                  <span>compra segura</span>
                  <MdLockOutline size={20} color="#222" />
                </div>
              </section>
            </div>
          </PaymentSlip>
        </MethodPayment>
      </Container>
    </>
  );
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCHPcmTMAdR1suiekHf6rnn5PyRng4pIYw',
})(Payment);
