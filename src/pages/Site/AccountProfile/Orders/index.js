import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MdOpenInNew } from 'react-icons/md';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';

import api from '../../../../services/api';
import { formatPrice } from '../../../../util/format';

import AccountProfile from '..';
import { Container, OrderTable } from './styles';

function Orders() {
  const client = useSelector(state => state.user.profile.client);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function load() {
      const response = await api.get(`/sales/${client.id}`);

      setOrders(
        response.data.map(o => ({
          ...o,
          formatedPrice: formatPrice(o.total_price),
          freight: formatPrice(o.freight),
          data_compra: format(Date.parse(o.created_at), 'dd/MM/yyyy HH:mm', {
            locale: pt,
          }),
        }))
      );
    }
    load();
  }, [client]);
  return (
    <AccountProfile>
      <Container>
        <OrderTable>
          <thead>
            <tr>
              <th> </th>
              <th>PEDIDO</th>
              <th>DATA</th>
              <th>FRETE</th>
              <th>TOTAL</th>
              <th>STATUS</th>
              <th>ENDEREÇO</th>
              <th>FORMA DE PAGAMENTO</th>
              <th>DETALHE</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id}>
                <td> </td>
                <td>
                  <strong>{o.id}</strong>
                </td>
                <td> {o.data_compra}</td>
                <td>{o.freight}</td>
                <td> {o.formatedPrice}</td>
                <td>{o.payment_status.status} </td>
                <td>
                  <div>
                    <dl>
                      <dd>{o.addresses.name}</dd>
                      <dd>{`${o.addresses.street}, ${o.addresses.number}, ${o.addresses.complement}`}</dd>
                      <dd>{o.addresses.neighborhood}</dd>
                      <dd>{`${o.addresses.city} - ${o.addresses.state}`}</dd>
                      <dd>{o.addresses.cep}</dd>
                    </dl>
                  </div>
                </td>
                <td>{o.payments.type}</td>
                <td>
                  <Link to={`/orders/${o.id}/detail`}>
                    <MdOpenInNew size={20} color="#222" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </OrderTable>
      </Container>
    </AccountProfile>
  );
}

export default Orders;
