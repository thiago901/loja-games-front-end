import React from 'react';

import Menu from '../../components/Menu';
import { Container, Form, Panel, FormImagens } from './style';

export default function MainSystem() {
  return (
    <Container>
      <Menu />
      <Panel>
        <div className="content">
          <Form>
            <input type="text" placeholder="Informe o produto" />
            <input type="text" placeholder="Informe o tipo de produto" />
            <input type="text" placeholder="Quantidade de estoque" />
            <input type="text" placeholder="Valor Unitario" />
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Pergunta</th>
                    <th>Resposta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>É 110 e 220?</td>
                    <td>Sim!</td>
                  </tr>
                </tbody>
              </table>
              <input type="text" placeholder="Pergunta" />
              <input type="text" placeholder="Resposta" />
              <button type="button">Add</button>
            </div>
          </Form>
          <FormImagens>
            <div>
              <img
                src="https://images-submarino.b2w.io/produtos/01/00/oferta/134163/8/134163876_1GG.jpg"
                alt="Jogo"
              />
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>134163876_1GG.jpg</td>
                    <td>Visualizar</td>
                    <td>Deletar</td>
                  </tr>
                </tbody>
              </table>
              <input type="file" />
            </div>
          </FormImagens>
          <button type="button">Salvar</button>
        </div>
      </Panel>
    </Container>
  );
}
