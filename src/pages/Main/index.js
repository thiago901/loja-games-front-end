import React from 'react';
import {MdShoppingBasket,MdSearch} from 'react-icons/md';
import {Container,Header,InputSearch,Banner,Poster,ProductList} from './style';

export default function Main(){
  return (
    <>
    <Container>
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
          <MdSearch color="#fff" size={26}/>
        </InputSearch>
        <div className="shopping-basket">
          <MdShoppingBasket color="#fff" size={36}/> 13
        </div>

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
      <ProductList>
        <li>
          <img
            src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
            alt="Mk"
          />
          <p>Game Mortal Kombat 11 Br - PS4</p>
          <span>R$ 80,00</span>
          <button>Comprar</button>
        </li>
        <li>
          <img
            src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
            alt="Mk"
          />
          <p>Game Mortal Kombat 11 Br - PS4</p>
          <span>R$ 80,00</span>
          <button>Comprar</button>
        </li>
        <li>
          <img
            src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
            alt="Mk"
          />
          <p>Game Mortal Kombat 11 Br - PS4</p>
          <span>R$ 80,00</span>
          <button>Comprar</button>
        </li>
        <li>
          <img
            src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
            alt="Mk"
          />
          <p>Game Mortal Kombat 11 Br - PS4</p>
          <span>R$ 80,00</span>
          <button>Comprar</button>
        </li>
        <li>
          <img
            src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
            alt="Mk"
          />
          <p>Game Mortal Kombat 11 Br - PS4</p>
          <span>R$ 80,00</span>
          <button>Comprar</button>
        </li>
        <li>
          <img
            src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
            alt="Mk"
          />
          <p>Game Mortal Kombat 11 Br - PS4</p>
          <span>R$ 80,00</span>
          <button>Comprar</button>
        </li>
        <li>
          <img
            src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
            alt="Mk"
          />
          <p>Game Mortal Kombat 11 Br - PS4</p>
          <span>R$ 80,00</span>
          <button>Comprar</button>
        </li>
        <li>
          <img
            src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
            alt="Mk"
          />
          <p>Game Mortal Kombat 11 Br - PS4</p>
          <span>R$ 80,00</span>
          <button>Comprar</button>
        </li>

      </ProductList>
    </Container>
      </>


  );
}
