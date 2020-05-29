import styled from 'styled-components';

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
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
    width: 100%;

    div {
      display: flex;
      align-items: baseline;
      color: #222;
      span {
        font-weight: bold;
        color: #999;
      }
      strong {
        font-size: 28px;
        margin-left: 5px;
      }
    }
  }
`;
export const OrderTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;

    strong {
      font-size: 16px;
    }
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
