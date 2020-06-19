import styled from 'styled-components';
import { darken } from 'polished';
/*
  #de4e3a
  #6fa1cd
  #6c0a12
  #22272a
*/
export const Container = styled.div`
  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-content: center;

    padding: 10px;
    width: 600px;

    input {
      width: 100%;
      border: 0;
      border-radius: 4px;
      padding: 10px 0 10px 15px;
      margin-bottom: 10px;
    }
    input:read-only {
      background: #999;
      color: #333;
    }

    button {
      background: #6fa1cd;
      border: 0;
      color: #fff;
      padding: 10px;
      border-radius: 4px;
      transition: background 0.5s linear;
      width: 100%;

      &:hover {
        background: ${darken('0.06', '#6fa1cd')};
      }
    }

    span {
      color: #de4e3a;
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 10px;
    }
    span::before {
      content: '*';
    }

    div {
      display: flex;
      align-items: center;

      h2 {
        color: #22272a;
        margin-left: 10px;
      }
    }
  }
`;
