import styled from 'styled-components';
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

  input {
    margin-bottom: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    height: 40px;
    width: 50%;
    padding: 5px 10px;
    font-size: 17px;
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
  .button-delete {
    width: 200px;
  }
  tbody tr:nth-child(even) {
    background: #eee;
  }

  a {
    justify-content: flex-end;
  }

  .delete-users {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      border: 0;
      background: 0;
    }

    .confirm {
      display: flex;
      align-items: center;
      margin-left: 10px;
      padding: 0 10px;
      &:hover {
        background: #de4e3a;
        color: #fff;
      }
    }
  }
`;
