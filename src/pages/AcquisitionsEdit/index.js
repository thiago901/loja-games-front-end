import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import Painel from '../../components/Panel';
import SystemWeb from '../_layouts/systemWeb';

import api from '../../services/api';

import { Content } from './styles';

export default function ProductList({ match }) {
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    async function load() {
      const { id } = match.params;

      const response = await api.get(`/products/${id}`);

      setProduct(response.data);
    }
    load();
  }, [match.params]);
  async function handleAddAmount() {
    const { id } = match.params;
    const data = {
      product_id: id,
      amount,
      price,
    };

    await api.post(`/acquisitions`, data);

    setAmount(0);
    setPrice(0);
  }

  return (
    <SystemWeb>
      <Painel>
        <Content>
          <div>
            <p>
              <strong>Produto:</strong>
              <span>{product.title}</span>{' '}
            </p>
            <p>
              <strong>Plataforma:</strong>
              <span>{product.plataform}</span>{' '}
            </p>
            <p>
              <strong>Disponivel:</strong>
              <span>{product.available ? 'Sim' : 'Não'}</span>{' '}
            </p>
          </div>
          <form>
            <label>Quantidade</label>
            <input
              type="number"
              min={1}
              onChange={e => setAmount(e.target.value)}
              value={amount}
            />
            <label>Preço</label>
            <input
              type="number"
              min={1}
              onChange={e => setPrice(e.target.value)}
              value={price}
            />

            <button
              type="button"
              className="button-save"
              onClick={handleAddAmount}
            >
              Finalizar
            </button>
          </form>
        </Content>
      </Painel>
    </SystemWeb>
  );
}

ProductList.propTypes = {
  match: PropTypes.element.isRequired,
};
