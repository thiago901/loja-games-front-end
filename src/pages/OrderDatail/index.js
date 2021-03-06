import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import Header from '../../components/Header';
import api from '../../services/api';
import { OrderTable, Container } from './style';
import { formatPrice } from '../../util/format';

export default function OrderDatail(props) {
  const [orders, setOrders] = useState([]);
  const [sale, setSale] = useState([]);
  useEffect(() => {
    async function load() {
      const { id } = props.match.params;

      const response = await api.get(`/sales/${id}/details`);

      setOrders(
        response.data.saledetails.map(d => ({
          ...d,
          priceFormatted: formatPrice(d.unit_price),
          subTotalFormatted: formatPrice(d.unit_price * d.amount),
        }))
      );
      setSale({
        ...response.data,
        priceFormatted: formatPrice(response.data.total_price),
      });
    }
    load();
  }, []);

  function handleSourceImg(images) {
    const imgs = images.filter(f => f.main === true);
    const url = imgs.map(a => a.url);
    return url[0];
  }

  return (
    <>
      <Header />
      <Container>
        <Link to="/orders">
          <MdArrowBack size={20} color="#222" />
        </Link>
        <OrderTable>
          <thead>
            <tr>
              <th> </th>
              <th>PRODUTO</th>
              <th>PREÇO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id}>
                <td> </td>
                <td>
                  <img
                    src={handleSourceImg(o.products.images)}
                    alt={o.products.title}
                  />
                </td>
                <td>
                  <span>{o.products.title}</span>
                  <strong>{o.priceFormatted}</strong>
                </td>
                <td> {o.amount}</td>
                <td>
                  <strong>{o.subTotalFormatted}</strong>{' '}
                </td>

                <td> </td>
              </tr>
            ))}
          </tbody>
        </OrderTable>
        <footer>
          <div>
            <span>Total</span>
            <strong>{sale.priceFormatted}</strong>
          </div>
        </footer>
      </Container>
    </>
  );
}
