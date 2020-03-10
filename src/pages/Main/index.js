import React from 'react';
import {MdShoppingCart} from 'react-icons/md';
import {Header} from './style';

export default function Main(){
  return (

      <Header>
        <h1>CompreGames.com</h1>
        <ul>
          <li>Games</li>
          <li>Consoles</li>
          <li>Promoções</li>
          <li>Novidades</li>
        </ul>
        <div>
          <input type='text'/>
        </div>
        <MdShoppingCart color="#fff" size={26}/>

      </Header>


  );
}
