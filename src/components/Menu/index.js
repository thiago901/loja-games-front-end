import React from 'react';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { Menu } from './style';

export default function MainSystem() {
  return (
    <Menu>
      <MdMenu size={45} color="#fff" />
      <ul>
        <Link to="/product">
          <li>Produtos</li>
        </Link>
        <li>Compras</li>
        <li>Funcionarios</li>
        <li>Clientes</li>
        <li>Sair</li>
      </ul>
    </Menu>
  );
}
