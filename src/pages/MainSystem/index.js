import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdOpenInNew,
  MdEdit,
  MdAddBox,
  MdNavigateBefore,
  MdNavigateNext,
} from 'react-icons/md';
import SystemWeb from '../_layouts/systemWeb';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { TableProduct, Panel } from './style';

function MainSystem() {
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
    const headers = {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsImlhdCI6MTU4NDg5MzEzNiwiZXhwIjoxNTg1NDk3OTM2fQ.4OrnUfAfFp4ghSemRQPg_Vs3dznot5BWPflEGYkD0Oc',
    };
    const response = await api.get('/products', { headers });
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

    const headers = {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsImlhdCI6MTU4NDg5MzEzNiwiZXhwIjoxNTg1NDk3OTM2fQ.4OrnUfAfFp4ghSemRQPg_Vs3dznot5BWPflEGYkD0Oc',
    };
    const response = await api.get(`/products?page=${pages}`, { headers });
    const data = response.data.map(product => ({
      ...product,
      formatPrice: formatPrice(product.price),
    }));

    setProducts(data);
  }

  async function previewPage() {
    setPages(pages - 1);
    const headers = {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsImlhdCI6MTU4NDg5MzEzNiwiZXhwIjoxNTg1NDk3OTM2fQ.4OrnUfAfFp4ghSemRQPg_Vs3dznot5BWPflEGYkD0Oc',
    };
    const response = await api.get(`/products?page=${pages - 1}`, { headers });
    const data = response.data.map(product => ({
      ...product,
      formatPrice: formatPrice(product.price),
    }));

    setProducts(data);
  }

  return (
    <SystemWeb>
      <Panel>
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
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>{p.formatPrice}</td>
                <td>
                  <a
                    href={`/product/${p.id}/detail`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdOpenInNew size={26} color="#22272a" />
                  </a>
                </td>
                <td>
                  <a href={`/product/${p.id}/update`}>
                    <MdEdit size={26} color="#22272a" />
                  </a>
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
          <div className="button-create">
            <Link to="/product/create">
              <MdAddBox size={40} color="#22272a" />
            </Link>
          </div>
        </div>
      </Panel>
    </SystemWeb>
  );
}
export default MainSystem;
