import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { Menu } from './style';

import { signOutRequest } from '../../store/module/auth/actions';

export default function MainSystem() {
  const dispatch = useDispatch();
  function handleLogoult() {
    dispatch(signOutRequest());
  }
  return (
    <Menu>
      <MdMenu size={45} color="#fff" />
      <ul>
        <Link to="/system">
          <li>Produtos</li>
        </Link>
        <Link to="/acquisitions">
          <li>Compras</li>
        </Link>
        <Link to="/employee">
          <li>Funcionarios</li>
        </Link>
        <Link to="/stockist">
          <li>Estoquista</li>
        </Link>
        <li>Clientes</li>
        <li>
          <button type="button" onClick={handleLogoult}>
            Sair
          </button>
        </li>
      </ul>
    </Menu>
  );
}
