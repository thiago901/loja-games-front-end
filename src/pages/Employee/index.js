import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MdEdit,
  MdAddBox,
  MdNavigateBefore,
  MdNavigateNext,
  MdDelete,
  MdDone,
} from 'react-icons/md';
import Painel from '../../components/Panel';
import SystemWeb from '../_layouts/systemWeb';

import api from '../../services/api';

import { TableProduct, Content } from './styles';

export default function ProductList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await api.get('/user/provider');
      const data = response.data.map(d => ({
        ...d,
        hidden: true,
      }));

      setUsers(data);
    }
    load();
  }, []);

  async function searchProducts(value) {
    const response = await api.get('/user/provider');
    const { data } = response;

    const filter = data.filter(f => {
      const expressao = new RegExp(value, 'i');
      return expressao.test(f.title);
    });

    setUsers(filter);
  }
  async function handleDelete(id) {
    const newUser = users.map(u => {
      if (u.id === id) {
        u.hidden = false;
      }
      return u;
    });

    setUsers(newUser);
  }
  async function handleConfirmDelete(id) {
    await api.delete(`/user/provider/${id}`);
    setUsers(users.filter(f => f.id !== id));
  }
  return (
    <SystemWeb>
      <Painel>
        <Content>
          <div>
            <input
              type="text"
              placeholder="Procure um usuario"
              onChange={e => searchProducts(e.target.value)}
            />
          </div>
          <TableProduct>
            <thead>
              <tr>
                <th>Email</th>
                <th>Papel </th>
                <th> </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td>{u.email}</td>
                  <td>{u.paperUser.paper.title}</td>

                  <td>
                    <Link to={`/employee/${u.id}/edit`}>
                      <MdEdit size={26} color="#22272a" />
                    </Link>
                  </td>
                  <td className="button-delete">
                    <div className="delete-users">
                      <button type="button" onClick={() => handleDelete(u.id)}>
                        <MdDelete size={26} color="#22272a" />
                      </button>
                      <button
                        className="confirm"
                        type="button"
                        onClick={() => handleConfirmDelete(u.id)}
                        style={
                          u.hidden ? { display: 'none' } : { display: 'flex' }
                        }
                      >
                        Tem certeza? <MdDone size={26} color="#22272a" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </TableProduct>
          <div className="navigation-buttons">
            <div className="navigation">
              <button type="button">
                <span>Preview</span>
                <MdNavigateBefore size={40} color="#22272a" />
              </button>

              <button type="button">
                <MdNavigateNext size={40} color="#22272a" />
                <span>Next</span>
              </button>
            </div>
            <div className="button-create">
              <Link to="/employee/create">
                <MdAddBox size={40} color="#22272a" />
              </Link>
            </div>
          </div>
        </Content>
      </Painel>
    </SystemWeb>
  );
}
