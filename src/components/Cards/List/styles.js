import styled from 'styled-components';
import { Link } from 'react-router-dom';

/*
  #de4e3a
  #6fa1cd
  #6c0a12
  #22272a
*/

export const Container = styled.div`
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
export const Card = styled.li`
  background: #de4e3a;
  padding: 20px;
  transition: background 0.5s;
  border-radius: 4px;
  /* height: 115px;
  width: 190px; */
  height: 170px;
  width: 280px;

  &:hover {
    cursor: pointer;
    background: #fffeee;
  }
  input {
    display: none;
  }
  label {
    display: flex;
    flex-direction: column;

    height: 100%;
    a {
      border-radius: 2px;
      transition: background 0.5s;
      &:hover {
        background: #6fa1cd;
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

    &:hover {
      cursor: pointer;
    }
  }
`;
export const Number = styled.div`
  display: flex;

  align-items: center;
  flex: 1;

  strong {
    letter-spacing: 2px;
    font-size: 20px;
    color: #95a5a6;
    text-shadow: 1px 1px 1px #7f8c8d;
  }
`;
export const Other = styled.div`
  p {
    font-size: 16px;
    letter-spacing: 2px;
  }
`;
