import React from 'react';
import { MdShoppingBasket, MdSearch } from 'react-icons/md';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, InputSearch } from './style';

function AnimationCube({ cartSize }) {
  return (
    <Header>
      <Link to="/">
        <h1>CompreGames.com</h1>
      </Link>
      <ul>
        <li>Games</li>
        <li>Consoles</li>
        <li>Promoções</li>
        <li>Novidades</li>
      </ul>
      <InputSearch>
        <input type="text" />
        <MdSearch color="#fff" size={26} />
      </InputSearch>
      <div className="shopping-basket">
        <MdShoppingBasket color="#fff" size={36} /> {cartSize}
      </div>
    </Header>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(AnimationCube);
