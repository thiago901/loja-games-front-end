import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MdEdit, MdDelete, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../../../../services/api';
import {
  Container,
  AddressesTable,
  CardAddressesContainer,
  AddAddress,
  Card,
  Other,
  Number,
} from './styles';
import AccountProfile from '../..';

function Addresses() {
  const user = useSelector(state => state.user);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function load() {
      const response = await api.get(`/cards/${user.profile.client.id}`);
      const data = response.data.map(d => ({
        ...d,
        formatedMonth: `0${d.month}`.slice(-2),
        formatedNumber: 2,
      }));
      setCards(data);
      console.tron.warn(data);
    }

    load();
  }, [user.profile.client.id]);

  return (
    <AccountProfile>
      <Container>
        <AddressesTable>
          <CardAddressesContainer>
            <Card>
              <AddAddress to="/profile/cards/form">
                <div>
                  <MdAdd size={30} color="#22272a" />
                </div>
                <spam>Novo endereço</spam>
              </AddAddress>
            </Card>
            {cards.map(a => (
              <Card key={a.id}>
                <input type="radio" name="cards" id={a.id} onClick={() => {}} />
                <label htmlFor={a.id}>
                  <Number>
                    <strong>{a.card_number}</strong>
                  </Number>
                  <Other>
                    <p>{`Since:${a.formatedMonth}/${a.year}`}</p>
                    <p>{a.card_owner}</p>
                  </Other>
                </label>
              </Card>
            ))}
          </CardAddressesContainer>
        </AddressesTable>
      </Container>
    </AccountProfile>
  );
}

export default Addresses;
