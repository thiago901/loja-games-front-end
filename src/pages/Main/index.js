import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import Header from '../../components/Header';
import {
  Container,
  Banner,
  Poster,
  ProductList,
  Characters,
  Adverts,
  Card,
} from './style';

export default function Main() {
  return (
    <>
      <Container>
        <Header />
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
              <MdAddCircle size={36} color="#000" />
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
              <MdAddCircle size={36} color="#000" />
            </Card>
          </Adverts>
          <p className="text">
            A CompreGames.com é uma loja de comércio eletrônico que preza
            qualidade, variedade e fidelidade na seleção dos produtos que
            oferecemos, para que o nosso público encontre a excelência que
            procura de forma rápida e segura.
          </p>
        </Banner>
        <ProductList>
          <li>
            <img
              src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
              alt="Mk"
            />
            <p>Game Mortal Kombat 11 Br - PS4</p>
            <span>R$ 80,00</span>
            <button type="button">Comprar</button>
          </li>
          <li>
            <img
              src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
              alt="Mk"
            />
            <p>Game Mortal Kombat 11 Br - PS4</p>
            <span>R$ 80,00</span>
            <button type="button">Comprar</button>
          </li>
          <li>
            <img
              src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
              alt="Mk"
            />
            <p>Game Mortal Kombat 11 Br - PS4</p>
            <span>R$ 80,00</span>
            <button type="button">Comprar</button>
          </li>
          <li>
            <img
              src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
              alt="Mk"
            />
            <p>Game Mortal Kombat 11 Br - PS4</p>
            <span>R$ 80,00</span>
            <button type="button">Comprar</button>
          </li>
          <li>
            <img
              src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
              alt="Mk"
            />
            <p>Game Mortal Kombat 11 Br - PS4</p>
            <span>R$ 80,00</span>
            <button type="button">Comprar</button>
          </li>
          <li>
            <img
              src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
              alt="Mk"
            />
            <p>Game Mortal Kombat 11 Br - PS4</p>
            <span>R$ 80,00</span>
            <button type="button">Comprar</button>
          </li>
          <li>
            <img
              src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
              alt="Mk"
            />
            <p>Game Mortal Kombat 11 Br - PS4</p>
            <span>R$ 80,00</span>
            <button type="button">Comprar</button>
          </li>
          <li>
            <img
              src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
              alt="Mk"
            />
            <p>Game Mortal Kombat 11 Br - PS4</p>
            <span>R$ 80,00</span>
            <button type="button">Comprar</button>
          </li>
        </ProductList>
      </Container>
    </>
  );
}
