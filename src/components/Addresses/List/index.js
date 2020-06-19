import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MdEdit, MdDelete, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import {
  Container,
  AddressesTable,
  CardAddressesContainer,
  AddAddress,
  CardAddresses,
  DD,
} from './styles';

function Addresses({ hidden }) {
  const user = useSelector(state => state.user);
  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    async function load() {
      const response = await api.get(
        `addresses/client/${user.profile.client.id}`
      );
      setAddresses(response.data);
    }
    load();
  }, [user.profile.client.id]);

  async function handleCurrentAddress(id) {
    const response = await api.put(
      `/addressesCurrent/client/${user.profile.client.id}`,
      { address_id: id }
    );
    if (response.status === 200) {
      window.location.reload();
    }
  }
  async function handleDeleteAddress(id) {
    try {
      await api.delete(`/addresses/${id}`);
      toast.success('Sucesso');
    } catch (error) {
      toast.error('Não foi possivel deletar endereço');
    }
  }
  return (
    <Container>
      <AddressesTable>
        <CardAddressesContainer>
          <CardAddresses hidden={hidden}>
            <AddAddress to="/profile/addresses/form">
              <div>
                <MdAdd size={30} color="#22272a" />
              </div>
              <spam>Novo endereço</spam>
            </AddAddress>
          </CardAddresses>
          {addresses.map(a => (
            <CardAddresses key={a.id}>
              <input
                type="radio"
                name="address"
                id={a.id}
                onClick={() => handleCurrentAddress(a.id)}
              />
              <label htmlFor={a.id}>
                <dl>
                  <div>
                    <DD bold size={18}>
                      {a.name}
                    </DD>
                    <div>
                      <Link to={`addresses/form/${a.id}`}>
                        <MdEdit size={20} color="#22272a" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDeleteAddress(a.id)}
                      >
                        <MdDelete size={20} color="#22272a" />
                      </button>
                    </div>
                  </div>

                  <DD>{`${a.street}, ${a.number} | ${a.complement}`}</DD>
                  <DD>JD Dom José</DD>
                  <DD>{`${a.city} - ${a.state}`}</DD>
                  <DD>{`CEP: ${a.cep}`}</DD>
                </dl>
              </label>
              {a.current_delivery && (
                <div className="select">
                  <strong>Selecionado</strong>
                </div>
              )}
            </CardAddresses>
          ))}
        </CardAddressesContainer>
      </AddressesTable>
    </Container>
  );
}

export default Addresses;
