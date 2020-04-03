import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import Painel from '../../components/Panel';
import SystemWeb from '../_layouts/systemWeb';

import api from '../../services/api';

import { Content, Form } from './styles';

export default function EmployeeEdit({ match }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [papers, setPapers] = useState([]);
  const [paper, setPaper] = useState();
  const [idPaper, setIdPaper] = useState();

  const { id } = match.params;

  useEffect(() => {
    async function load() {
      const response = await api.get(`/user/provider/${id}`);
      setName(response.data.name);
      setEmail(response.data.email);
      setPaper(response.data.paperUser.paper_id);
      setIdPaper(response.data.paperUser.id);

      const resp = await api.get(`/paper`);

      setPapers(resp.data);
    }
    load();
  }, [id]);

  async function handleSaveUser() {
    const data = {
      name,
      email,
      oldPassword,
      password,
      confirmPassword,
    };
    const dataPaper = {
      id: idPaper,
      paper_id: paper,
      user_id: id,
    };

    await api.put(`/user/provider/${id}`, data);
    await api.put(`/paperUser`, dataPaper);
  }

  return (
    <SystemWeb>
      <Painel>
        <Content>
          <Form>
            <div className="group-input">
              <input
                type="text"
                placeholder="Seu nome"
                onChange={e => setName(e.target.value)}
                value={name}
              />

              <input
                type="email"
                placeholder="Seu email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                disabled
              />
              <select onChange={e => setPaper(e.target.value)}>
                {papers.map(p => (
                  <option key={p.id} value={p.id} selected={p.id === paper}>
                    {p.title}
                  </option>
                ))}
              </select>
              <input
                type="password"
                placeholder="Sua antiga senha"
                onChange={e => setOldPassword(e.target.value)}
                value={oldPassword}
              />

              <input
                type="password"
                placeholder="Sua senha"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />

              <input
                type="password"
                placeholder="Confirme sua senha"
                onChange={e => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
            <button onClick={handleSaveUser} type="button">
              Salvar
            </button>
          </Form>
        </Content>
      </Painel>
    </SystemWeb>
  );
}

EmployeeEdit.propTypes = {
  match: PropTypes.element.isRequired,
};
