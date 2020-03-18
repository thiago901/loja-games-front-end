import React, { Component } from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import api from '../../services/api'
import Header from '../../components/Header';
import { Carrousel, Product, Faq } from './style';

export default class ProductDetail extends Component {
  state = {
    product:{}
  };

  async componentDidMount(){
    const {id} = this.props.match.params;
    const response = await api.get(`/products/${id}`);

    this.setState({product:response.data});

  }
  render() {
    const {product} =this.state;
    const {faq=[]}=product;

    return (
      <>
        <Header />
        <Product>
          <Carrousel>
            <MdNavigateBefore size={50} />
            <img
              src={product.image}
              alt={product.title}
            />
            <MdNavigateNext size={50} />
          </Carrousel>

          <div className="data-description">
            <strong>{product.title}</strong>
            <p>{product.description}</p>
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
              {faq.map(f=>(
                <tr key={f.id}>
                  <td>{f.question}</td>
                  <td>{f.answer}</td>
                </tr>
              ))}


            </tbody>
          </table>
        </Faq>
      </>
    );
  }
}
