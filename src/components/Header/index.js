import React from 'react';
import { MdShoppingBasket, MdSearch } from 'react-icons/md';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, InputSearch, ListMenu, MenuHeader, Login } from './style';

import { signOut } from '../../store/module/auth/actions';

function HeaderF({ cartSize }) {
  const dispatch = useDispatch();
  const signed = useSelector(state => state.auth.signed);
  const profile = useSelector(state => state.user.profile);
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
          {signed && <span>{cartSize}</span>}
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

HeaderF.propTypes = {
  cartSize: PropTypes.number.isRequired,
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(HeaderF);
