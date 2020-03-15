import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';

import { Container, TableProduct, Panel } from './style';

export default function MainSystem() {
  return (
    <Container>
      <Menu />
      <Panel>
        <input type="text" />
        <TableProduct>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Descrição</th>
              <th>Qtd</th>
              <th>Valor Unitario</th>
              <th />
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>God of War</td>
              <td>Jogo de aventura</td>
              <td>7</td>
              <td>R$ 70,60</td>
              <td>Visualizar</td>
              <td>Editar</td>
              <td>Excluir</td>
            </tr>
            <tr>
              <td>God of War</td>
              <td>Jogo de aventura</td>
              <td>7</td>
              <td>R$ 70,60</td>
              <td>Visualizar</td>
              <td>Editar</td>
              <td>Excluir</td>
            </tr>
            <tr>
              <td>God of War</td>
              <td>Jogo de aventura</td>
              <td>7</td>
              <td>R$ 70,60</td>
              <td>Visualizar</td>
              <td>Editar</td>
              <td>Excluir</td>
            </tr>
            <tr>
              <td>God of War</td>
              <td>Jogo de aventura</td>
              <td>7</td>
              <td>R$ 70,60</td>
              <td>Visualizar</td>
              <td>Editar</td>
              <td>Excluir</td>
            </tr>
          </tbody>
          <Link to="/product/create">NOVO</Link>
        </TableProduct>
      </Panel>
    </Container>
  );
}
