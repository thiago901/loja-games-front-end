import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  form {
    padding: 20px;
    width: 600px;

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
    section {
      display: flex;
      flex-direction: column;
      align-content: center;
      h1 {
        color: #22272a;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ddd;
      }
      input {
        border: 0;
        border-radius: 4px;
        padding: 10px 0 10px 10px;
        margin-bottom: 10px;
        background: #de4e3a;
        font-size: 16px;
      }
      input::placeholder {
        color: #fff;
      }
      input:read-only {
        background: #999;
        color: #666;
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
  }
`;
