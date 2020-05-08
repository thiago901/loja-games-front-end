import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../services/api';
import Header from '../../components/Header';
import { Carrousel, Product, Faq } from './style';

import { addToCartRequest } from '../../store/module/cart/actions';

export default function ProductDetail(props) {
  const [product, setProduct] = useState({});

  const dispacth = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    async function load() {
      const { id } = props.match.params;
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }
    load();
  }, []);

  function handleAddToCart() {
    dispacth(addToCartRequest(Number(id)));
  }

  const { faqs = [] } = product;
  const { images = [] } = product;

  return (
    <>
      <Header />
      <Product>
        <Carrousel>
          <div className="content">
            {images.map(i => (
              <img key={i.id} src={i.url} alt={product.title} id={i.id} />
            ))}
          </div>
          <div className="links">
            {images.map(i => (
              <a key={i.id} href={`#${i.id}`}>
                {i.id}
              </a>
            ))}
          </div>
        </Carrousel>

        <div className="data-description">
          <strong>{product.title}</strong>
          <p>{product.description}</p>
          <button type="button" onClick={handleAddToCart}>
            COMPRAR
          </button>
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
            {faqs.map(f => (
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
