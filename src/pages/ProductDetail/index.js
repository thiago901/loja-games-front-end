import React, { Component } from 'react';


import api from '../../services/api'
import Header from '../../components/Header';
import { Carrousel, Product, Faq } from './style';

export default class ProductDetail extends Component {


  state = {
    product:{},
    countImg:0
  };

  async componentDidMount(){
    const {id} = this.props.match.params;
    const response = await api.get(`/products/${id}`);
    this.setState({product:response.data});
  }


  render() {

    const {product} =this.state;
    const {faq=[]}=product;
    const {images=[]}=product;


    return (
      <>
        <Header />
        <Product>
          <Carrousel>

            <div className="content">

              {images.map(i=>(
                <img
                  key={i.id}
                  src={i.image}
                  alt={product.title}
                  id={i.id}
                />
              ))}

            </div>
            <div className="links">
              {images.map(i=>(
                <a
                  key={i.id}
                  href={`#${i.id}`}

                >{i.id}</a>
              ))}

            </div>

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

