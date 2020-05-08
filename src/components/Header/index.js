import React from 'react';
import { MdShoppingBasket, MdSearch } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, InputSearch, ListMenu, MenuHeader, Login } from './style';

import { signOut } from '../../store/module/auth/actions';

export default function HeaderF() {
  const dispatch = useDispatch();
  const signed = useSelector(state => state.auth.signed);
  const profile = useSelector(state => state.user.profile);
  const cartSize = useSelector(state => state.cart.cart.length);
  // console.tron.warn();
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Header>
      <Link to="/">
        <h1>CompreGames.com</h1>
      </Link>

      <ListMenu>
        <li>Games</li>
        <li>Consoles</li>
        <li>Promoções</li>
        <li>Novidades</li>
      </ListMenu>

      <InputSearch>
        <input type="text" />
        <MdSearch color="#fff" size={26} />
      </InputSearch>

      <Link to="/cart">
        <div className="shopping-basket">
          {cartSize > 0 && <span>{cartSize || 0}</span>}
          <MdShoppingBasket color="#fff" size={36} />
        </div>
      </Link>
      {!signed ? (
        <Login to="/signin">Login</Login>
      ) : (
        <MenuHeader>
          <li>
            <img
              src="https://api.adorable.io/avatars/100/abott@adorable.png"
              alt="avatar"
            />
            <span>{profile.client.name}</span>
            <ul>
              <li>
                <Link to="profile">Perfil</Link>
              </li>

              <li>
                <button type="button" onClick={handleSignOut}>
                  Sair
                </button>
              </li>
            </ul>
          </li>
        </MenuHeader>
      )}
    </Header>
  );
}
