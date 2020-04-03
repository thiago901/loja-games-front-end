import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MdAddShoppingCart,
  MdNavigateBefore,
  MdNavigateNext,
} from 'react-icons/md';
import Painel from '../../components/Panel';
import SystemWeb from '../_layouts/systemWeb';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { TableProduct, Content } from './styles';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [pages = 1, setPages] = useState(1);

  useEffect(() => {
    async function load() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        formatPrice: formatPrice(product.price),
      }));

      setProducts(data);
    }
    load();
  }, []);

  async function searchProducts(value) {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      formatPrice: formatPrice(product.price),
    }));

    const filter = data.filter(f => {
      const expressao = new RegExp(value, 'i');
      return expressao.test(f.title);
    });

    setProducts(filter);
  }
  async function nextPage() {
    setPages(pages + 1);

    const response = await api.get(`/products?page=${pages}`);
    const data = response.data.map(product => ({
      ...product,
      formatPrice: formatPrice(product.price),
    }));

    setProducts(data);
  }

  async function previewPage() {
    setPages(pages - 1);

    const response = await api.get(`/products?page=${pages - 1}`);
    const data = response.data.map(product => ({
      ...product,
      formatPrice: formatPrice(product.price),
    }));

    setProducts(data);
  }
  return (
    <SystemWeb>
      <Painel>
        <Content>
          <div>
            <input
              type="text"
              placeholder="Procure um produto"
              onChange={e => searchProducts(e.target.value)}
            />
          </div>
          <TableProduct>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Valor Unitario</th>
                <th>Quantidade</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id}>
                  <td>{p.title}</td>
                  <td>{p.formatPrice}</td>
                  <td>{p.stock ? p.stock.amount : 0}</td>
                  <td>
                    <Link to={`/acquisitions/${p.id}`}>
                      <MdAddShoppingCart size={26} color="#22272a" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </TableProduct>
          <div className="navigation-buttons">
            <div className="navigation">
              <button type="button" onClick={previewPage}>
                <span>Preview</span>
                <MdNavigateBefore size={40} color="#22272a" />
              </button>
              <button type="button" onClick={nextPage}>
                <MdNavigateNext size={40} color="#22272a" />
                <span>Next</span>
              </button>
            </div>
          </div>
        </Content>
      </Painel>
    </SystemWeb>
  );
}
