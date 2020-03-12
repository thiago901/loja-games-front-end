import React from 'react';
import {MdShoppingBasket,MdSearch,MdAddCircle} from 'react-icons/md';
import {Container,Header,InputSearch,Banner,Poster,ProductList,Characters,Adverts,Card} from './style';

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
        <Characters>
          <div>
            <img
              src="https://obj.ibxk.com.br/layout/bj/especiais/the-witcher-3/assets/images/witcher-main-poster.png"
              alt="Gerald"
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/originals/e0/13/66/e01366d166e79f1095aa0b426f233422.png"
              alt="Chrase"
            />
          </div>
        </Characters>
        <Poster>
          <img
            src="https://i.pinimg.com/originals/b8/63/59/b863592195b73a3a30e07f21d1809481.png"
            alt="Personagem"
          />
        </Poster>
        <Adverts>
          <Card>
            <div>
              <p>Mortal Kombat</p>
              <span>R$ 80,00</span>
            </div>
              <img
                src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
                alt="Gerald"
              />
              <MdAddCircle size={36} color="#000"/>
          </Card>
          <Card>
            <div>
              <p>Mortal Kombat</p>
              <span>R$ 80,00</span>
            </div>
              <img
                src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
                alt="Gerald"
              />
              <MdAddCircle size={36} color="#000"/>
          </Card>
        </Adverts>
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
