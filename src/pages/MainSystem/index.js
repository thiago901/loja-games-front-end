import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Menu from '../../components/Menu';

import { Container, TableProduct, Panel } from './style';

class MainSystem extends Component {
  state = {
    products:[],
  };

  async componentDidMount(){
    const response = await api.get('/products');
    this.setState({products:response.data})
  }
  render() {
    const {products} =this.state;
    return (
      <Container>
        <Menu />
        <Panel>
          <input type="text" />
          <TableProduct>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Valor Unitario</th>
                <th />
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {products.map(p=>(
                <tr>
                <td>{p.title}</td>
                <td>{p.price}</td>
                <td><a href={`/product/${p.id}/detail`} target="_blank" rel="noopener noreferrer">Visualizar</a></td>
                <td><a href={`product/${p.id}/update`} >Editar</a></td>
                <td>Excluir</td>
              </tr>
              ))}
            </tbody>

          </TableProduct>
          <Link to="/product/create">NOVO</Link>
        </Panel>
      </Container>
    );
  }
}
export default MainSystem;
