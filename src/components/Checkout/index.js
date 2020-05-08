import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MdShoppingBasket,
  MdAccountCircle,
  MdPayment,
  MdDone,
} from 'react-icons/md';
import { Container } from './styles';

function Checkout() {
  const location = useLocation();

  return (
    <>
      <Container>
        <Link to="/cart">
          <MdShoppingBasket size={60} color="#fff" />
          Meu carrinho
        </Link>
        <Link to="/signin">
          <MdAccountCircle size={60} color="#fff" />
          Identificação
        </Link>
        <Link to="/payment">
          <MdPayment
            size={60}
            color={location.pathname === '/payment' ? '#222' : '#fff'}
          />
          Pagamento
        </Link>
        <Link to="/">
          <MdDone
            size={60}
            color={location.pathname === '/payment/finish' ? '#222' : '#fff'}
          />
          Obrigado
        </Link>
      </Container>
    </>
  );
}

export default Checkout;
