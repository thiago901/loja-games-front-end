import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  overflow-y: scroll;
`;

export const OrderTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }
  tr:nth-child(2n) {
  }
  tr:hover {
    td {
      background: #ddd;
      cursor: pointer;
    }
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    width: 150px;
  }
  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    font-weight: bold;
    font-size: 18px;
    margin-top: 5px;
  }

  div {
    display: flex;
    align-items: center;
    input {
      width: 50px;
      border: 1px solid #ddd;
      text-align: center;
      padding: 6px;
      border-radius: 4px;
      color: #666;
    }
  }
  button {
    background: none;
    border: none;
    padding: 6px;
  }
`;
