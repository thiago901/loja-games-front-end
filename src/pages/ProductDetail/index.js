import React from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import Header from '../../components/Header';
import { Carrousel, Product, Faq } from './style';

export default function ProductDetail() {
  return (
    <>
      <Header />
      <Product>
        <Carrousel>
          <MdNavigateBefore size={50} />
          <img
            src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
            alt="Mk"
          />
          <MdNavigateNext size={50} />
        </Carrousel>

        <div className="data-description">
          <strong>Game Mortal Kombat 11 Br - PS4</strong>
          <p>
            Mortal Kombat 11 é um jogo eletrônico de luta desenvolvido pela
            NetherRealm Studios e publicado pela Warner Bros. Interactive
            Entertainment. É a décima primeira edição principal da série de
            jogos eletrônicos de luta, Mortal Kombat, e uma continuação direta
            de Mortal Kombat X (2015). Um trailer de anúncio do jogo foi lançado
            durante o The Game Awards 2018. O jogo foi lançado em 23 de abril de
            2019, para Microsoft Windows, Nintendo Switch, PlayStation 4 e Xbox
            One.[1] Mortal Kombat 11 é um jogo de luta em que dois jogadores
            lutam um contra o outro, usando uma enorme variedade de ataques.
            Além de incluir várias mecânicas usadas em capítulos anteriores, em
            Mortal Kombat 11 cada lutador tem três ‘variações’ predefinidas
            pelos desenvolvedores, cada uma com o seu próprio estilo e lista de
            movimentos e com possibilidade de modificá-las e adicionar mais
            estilos definidos pelo próprio jogador
          </p>
          <button>COMPRAR</button>
        </div>
      </Product>
      <Faq>
        <table>
          <thead>
            <tr>
              <th>Pergunta</th>
              <th>Resposta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Qual o genero do jogo?</td>
              <td>Luta</td>
            </tr>
            <tr>
              <td>Multylay Online e Offline?</td>
              <td>Sim, Multyplay nas duas modalidades</td>
            </tr>
            <tr>
              <td>Pronto a entrega?</td>
              <td>Sim!</td>
            </tr>
            <tr>
              <td>É possivel parcelar?</td>
              <td>Sim, em até 24x</td>
            </tr>
          </tbody>
        </table>
      </Faq>
    </>
  );
}
