import React from 'react';

import Checkout from '../../components/Checkout';
import { Container } from './styles';

function PaymentFinish(props) {
  const { order } = props.location.state;

  return (
    <>
      <Checkout />
      <Container>
        <strong>Obrigado pela compra</strong>
        <span>Esse é o numero do seu pedido: {order}</span>
      </Container>
    </>
  );
}

export default PaymentFinish;
