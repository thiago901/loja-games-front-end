import styled from 'styled-components';
import { darken } from 'polished';
/*
  #0e0125
  #260c39
  #2f167f
*/

/*
  #de4e3a
  #6fa1cd
  #6c0a12
  #22272a
*/

export const Container = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 4px;

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .finally {
      border: none;
      border-radius: 4px;
      background: #de4e3a;
      color: #fff;
      font-weight: bold;
      padding: 12px 20px;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#de4e3a')};
      }
    }
  }
`;
export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
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
export const Total = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  .total {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #eee;
  }
  span {
    font-weight: bold;
    color: #999;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const Frete = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  label {
    font-size: 12px;
    margin-right: 5px;
  }
  input {
    width: 100px;
    padding: 3px 10px;
    border-radius: 4px;
    border: 1px solid #eee;
  }
  button {
    padding: 3px;
    border: 1px solid #eee;
    background: #de4e3a;
    color: #fff;
    margin-left: 5px;
    border-radius: 4px;
  }
`;
