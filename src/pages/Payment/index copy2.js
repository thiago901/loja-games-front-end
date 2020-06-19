import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
  MdOpenInNew,
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
  ChooseCard,
} from './styles';

import Modal from '../../components/PageModal';
import FormAddress from '../../components/Addresses/Form';
import ListAddress from '../../components/Addresses/List';
import Checkout from '../../components/Checkout';
import FormCards from '../../components/Cards/Form';

import api from '../../services/api';
import history from '../../services/history';
import { formatPrice } from '../../util/format';
import { clearCart } from '../../store/module/cart/actions';

function Payment(props) {
  const [address, setAddress] = useState({});
  const [modalFormAddress, setModalFormAddress] = useState(false);
  const [modalListAddress, setModalListAddress] = useState(false);
  // const [address, setAddress] = useState({});

  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.cart.cart);

  const cartSize = cart.length;
  const subTotal = cart.reduce((r, product) => {
    return r + product.price * product.amount;
  }, 0);

  const products = cart.map(p => ({
    amount: p.amount,
    unit_price: p.price,
    product_id: p.id,
  }));

  const payment = {
    client_id: user.profile.client.id,
    total_price: subTotal,
    // installments: data.installments,
    freight: 20,
    // payment_id: paymentId,
    address_id: address.id,
    products,
  };
  useEffect(() => {
    async function load() {
      const response = await api.get(
        `/addressesCurrent/client/${user.profile.client.id}`
      );
      setAddress(response.data);
      // await handleCalcFrete(response.data.cep);
    }
    load();
  }, [user.profile.client.id]);

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

          <ContainerAddAndDeleteAddresses>
            <button type="button" onClick={() => setModalListAddress(true)}>
              <MdHome size={20} color="#222" />
              Alterar endereço
            </button>
            <button type="button" onClick={() => setModalFormAddress(true)}>
              <MdAdd size={20} color="#222" />
              Add endereço
            </button>
          </ContainerAddAndDeleteAddresses>
          <Modal visible={modalFormAddress} setVisible={setModalFormAddress}>
            <FormAddress hidden />
          </Modal>
          <Modal visible={modalListAddress} setVisible={setModalListAddress}>
            <ListAddress hidden />
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
              <td>{subTotal}</td>
            </tr>
            <tr>
              <td>Frete</td>
              <td>{50}</td>
            </tr>
          </table>
          <section>
            <span>Total</span>
            <strong>Aki é total</strong>
          </section>
        </OrderResume>
        <MethodPayment>
          <CreditCard className="CreditCard">
            <input
              type="radio"
              name="PaymentMethod"
              id="CreditCard"
              onChange={() => {}}
            />
            <label htmlFor="CreditCard">
              <MdCreditCard size={60} color="#222" />
            </label>
            <label htmlFor="CreditCard">Cartão de Credito</label>
            <input
              hidden
              type="checkbox"
              name=""
              id="chooseCard"
              onChange={() => {}}
            />

            <FormCards payment={payment} />
          </CreditCard>
          <PaymentSlip className="PaymentSlip">
            <input
              type="radio"
              name="PaymentMethod"
              id="PaymentSlip"
              onChange={() => {}}
            />

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
                  <strong>Aki é total</strong>
                </div>
                <button type="button" onClick={() => {}}>
                  Pagar com boleto
                </button>
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
