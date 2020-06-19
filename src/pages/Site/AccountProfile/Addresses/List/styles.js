import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  a {
    text-decoration: none;
  }
  margin: 10px;
`;
export const AddressesTable = styled.div``;
export const CardAddressesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  grid-gap: 20px;
`;
export const AddAddress = styled(Link)`
  color: #22272a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #22272a;
    border-radius: 50%;
    margin-bottom: 5px;
  }
`;
export const CardAddresses = styled.li`
  position: relative;
  background: #ddd;
  padding: 20px;
  transition: background 0.5s;

  &:hover {
    cursor: pointer;
    background: #fffeee;
  }
  input {
    display: none;
  }
  label {
    text-decoration: none;
    a {
      text-decoration: none;
      border-radius: 2px;
      transition: background 0.5s;
      &:hover {
        background: #6fa1cd;
        text-decoration: none;
      }
    }
    button {
      background: none;
      border: 0;
      border-radius: 2px;
      transition: background 0.5s;

      &:hover {
        background: #de4e3a;
      }
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .select {
    text-align: center;
    text-transform: uppercase;
    padding: 5px;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    background: rgba(129, 236, 236, 0.7);
  }
`;

export const DD = styled.dd`
  font-size: ${props => props.size || 16}px;
  font-weight: ${props => (props.bold ? 'bold' : 'initial')};
`;
