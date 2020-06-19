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
  display: flex;
  height: 100vh;
  background: #fff;
  border-radius: 4px;
`;

export const Menu = styled.div`
  padding: 20px;
  h1 {
    color: #de4e3a;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding: 10px;

      span {
        color: #22272a;
        font-size: 20px;
        margin-left: 10px;
      }
      &:hover {
        background: #ddd;
        cursor: pointer;
      }
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
