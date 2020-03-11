import React from 'react';
import {MdShoppingBasket,MdSearch} from 'react-icons/md';
import {Header,InputSearch,Banner,Poster} from './style';

export default function Main(){
  return (
    <>
      <Header>
        <h1>CompreGames.com</h1>
        <ul>
          <li>Games</li>
          <li>Consoles</li>
          <li>Promoções</li>
          <li>Novidades</li>
        </ul>

        <InputSearch>
          <input type='text'/>
          <MdSearch color="#22272a" size={26}/>
        </InputSearch>
        <MdShoppingBasket color="#fff" size={26}/>
      </Header>
      <Banner>
        <div>
        </div>
        <Poster>
          <img
            src="https://i.pinimg.com/originals/b8/63/59/b863592195b73a3a30e07f21d1809481.png"
            alt="Personagem"
          />
        </Poster>
        <div>
        </div>
      </Banner>
      </>


  );
}
