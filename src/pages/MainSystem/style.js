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
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Panel = styled.div`
  flex: 1;
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    margin: 20px 0;
    width: 90%;
    text-align: right;
  }
  input {
    border: 1px solid #eee;
    border-radius: 4px;
    height: 40px;
    width: 50%;
    padding: 5px 10px;
    font-size: 17px;
  }
`;

export const TableProduct = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  width: 90%;

  th {
    background: #22272a;
    color: #fff;
    text-align: left;
    padding: 5px 15px;
  }
  tr {
    height: 40px;
  }
  td {
    padding: 10px;
  }
  tbody tr:nth-child(even) {
    background: #eee;
  }

  a {
    justify-content: flex-end;
  }
`;
