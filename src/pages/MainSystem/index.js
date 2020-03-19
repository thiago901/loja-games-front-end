import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {MdOpenInNew, MdEdit,MdDelete,MdAddBox} from 'react-icons/md'
import {formatPrice} from '../../util/format'
import api from '../../services/api';
import Menu from '../../components/Menu';

import { Container, TableProduct, Panel } from './style';

class MainSystem extends Component {
  state = {
    products:[],
  };

  async componentDidMount(){
    const response = await api.get('/products');
    const data = response.data.map(product=>({
      ...product,
      formatPrice:formatPrice(product.price)
    }))
    this.setState({products:data})
  }
  render() {
    const {products} =this.state;
    return (
      <Container>
        <Menu />
        <Panel>
          <div>
            <input type="text"  placeholder="Procure um produto"/>
          </div>
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
                <td>{p.formatPrice}</td>
                <td>
                  <a
                    href={`/product/${p.id}/detail`}
                    target="_blank" rel="noopener noreferrer">
                      <MdOpenInNew size={26} color="#22272a"/>
                  </a>
                </td>
                <td>
                  <a href={`product/${p.id}/update`} >
                    <MdEdit size={26} color="#22272a"/>
                  </a>
                </td>
                <td><MdDelete size={26} color="#22272a"/></td>
              </tr>
              ))}
            </tbody>

          </TableProduct>
          <div>
            <Link to="/product/create"><MdAddBox size={40} color="#22272a"/></Link>
          </div>
        </Panel>
      </Container>
    );
  }
}
export default MainSystem;
