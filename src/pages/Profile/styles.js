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
  width: 100%;

  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-content: center;

    padding: 20px;
    max-width: 600px;

    input {
      border: 0;
      border-radius: 4px;
      padding: 5px 0 5px 10px;
      margin-bottom: 10px;
    }
    input:read-only {
      background: #999;
      color: #666;
    }

    h2 {
      width: 100%;
      margin-bottom: 10px;
      color: #fff;
    }

    section:not(.address) {
      display: flex;
      flex-direction: column;
    }
    .address {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    button {
      background: #6fa1cd;
      border: 0;
      color: #fff;
      padding: 10px;
      border-radius: 4px;
      transition: background 0.5s linear;

      &:hover {
        background: ${darken('0.06', '#6fa1cd')};
      }
    }

    span {
      color: #222;
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 10px;
    }
    span::before {
      content: '*';
    }
  }
`;
