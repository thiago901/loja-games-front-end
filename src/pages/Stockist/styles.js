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
export const Content = styled.div`
  margin: 20px 0;
  width: 90%;
  text-align: right;

  .div-status {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;

    span {
      margin-right: 20px;
    }
  }

  .scroll {
    overflow-y: scroll;
    height: 80vh;
  }
  .navigation-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    .navigation {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #22272a;
        background: none;
        border: 0;
        &:hover {
          color: #de4e3a;
        }
      }
    }
  }

  .button-create {
    justify-self: end;
  }
`;

export const TableProduct = styled.table`
  border-collapse: collapse;
  width: 100%;
  .option-status-payment {
    border: 0;
    background: #22272a;
    padding: 10px;
    font-size: 14px;
    color: #fff;
  }

  th {
    background: #22272a;
    color: #fff;
    text-align: left;
    padding: 5px 15px;
  }
  tr {
    height: 35px;
  }
  td {
    text-align: left;
    padding: 5px 15px;
  }
  tbody tr:nth-child(even) {
    background: #eee;
  }

  a {
    justify-content: flex-end;
  }
  button {
    border: 0;
    padding: 10px;
    background: #de4e3a;
    color: #fff;
    font-weight: bold;
  }
`;
