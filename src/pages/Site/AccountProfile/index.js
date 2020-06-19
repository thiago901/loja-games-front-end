import React from 'react';
import {
  MdAccountBalanceWallet,
  MdAccountCircle,
  MdLocationOn,
  MdCreditCard,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Menu, Content } from './styles';
import Site from '../../_layouts/site';

export default function Profile({ children }) {
  return (
    <Site>
      <Container>
        <Menu>
          <h1>Minha conta</h1>
          <ul>
            <li>
              <MdAccountBalanceWallet size={60} color="#22272a" />
              <Link to="/profile/orders">
                <span>Pedidos</span>
              </Link>
            </li>
            <li>
              <MdAccountCircle size={60} color="#22272a" />
              <Link to="/profile">
                <span>Cadastro</span>
              </Link>
            </li>
            <li>
              <MdLocationOn size={60} color="#22272a" />
              <Link to="/profile/addresses">
                <span>Endereços</span>
              </Link>
            </li>
            <li>
              <MdCreditCard size={60} color="#22272a" />
              <Link to="/profile/cards">
                <span>Cartões</span>
              </Link>
            </li>
          </ul>
        </Menu>
        <Content>{children}</Content>
      </Container>
    </Site>
  );
}
