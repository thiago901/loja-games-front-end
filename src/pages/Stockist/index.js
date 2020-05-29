import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Redirect } from 'react-router-dom';
import Painel from '../../components/Panel';
import SystemWeb from '../_layouts/systemWeb';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { TableProduct, Content } from './styles';

export default function ProductList() {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await api.get(`/sales`);
      const responseStatus = await api.get(`/payment/status`);

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
      setStatus(responseStatus.data);
    }
    load();
  }, []);

  async function filter(statusId) {
    if (Number(statusId) === 0) {
      window.location.reload();
    }

    const response = await api.get(`/sales/status/${statusId}`);
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

  async function elementos(saleId, element) {
    const statusId = element.parentNode.parentNode.querySelector(
      '.option-status-payment'
    ).value;

    await api.put(`/sales/${saleId}/status/${statusId}`);
    toast.success('Alterado');
  }
  return (
    <SystemWeb>
      <Painel>
        <Content>
          <div className="div-status">
            <span>Filtros:</span>
            <select onChange={e => filter(e.target.value)}>
              <option value={0}>Todos</option>
              {status.map(s => (
                <option value={s.id}>{s.status}</option>
              ))}
            </select>
          </div>
          <div className="scroll">
            <TableProduct>
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
                    <td>
                      <select className="option-status-payment">
                        {status.map(s => (
                          <option
                            selected={o.payment_status.id === s.id}
                            value={s.id}
                          >
                            {s.status}
                          </option>
                        ))}
                      </select>
                    </td>
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
                      <button
                        type="button"
                        onClick={e => elementos(o.id, e.target)}
                      >
                        ALTERAR
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableProduct>
          </div>
        </Content>
      </Painel>
    </SystemWeb>
  );
}
