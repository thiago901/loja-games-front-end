import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const ContainerBackArrow = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;

  &:hover {
    background: #6fa1cd;
    color: blue;
  }
`;
export const Container = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  footer {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 10px;
    width: 100%;
    flex: 1;

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
    width: 100px;
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
`;
