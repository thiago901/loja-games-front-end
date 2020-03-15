import styled from 'styled-components';

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
  background: #6fa1cd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TableProduct = styled.table`
  font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
  border-collapse: collapse;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4caf50;
    color: white;
  }
`;
