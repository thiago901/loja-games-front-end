import styled from 'styled-components';
import { Form, Input, Select } from '@rocketseat/unform';

export const Container = styled.div``;
export const FormCards = styled(Form)`
  margin: 20px;

  width: 600px;
  transition: opacity 0.5s;
  display: flex;
  flex-direction: column;
  input {
    padding: 10px;
    margin-bottom: 5px;
  }
  select {
    padding: 10px;
    margin-bottom: 5px;
    width: 100%;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    select {
      padding: 10px;
      margin-bottom: 5px;
      width: 100%;
    }
    select + select {
      margin-left: 10px;
    }
  }

  button {
    width: 100%;
    padding: 10px;
    border: 0;
    background: #222;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
  }
  button + button {
    margin-left: 10px;
    background: #6fa1cd;
  }
  .divSaveCard {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 16px;
    margin: 0 0 10px 0;
    input {
      margin-right: 10px;
    }
  }
  .chooseCard {
    margin: 10px 0;
    text-align: left;
    display: flex;
    align-items: center;
  }
`;
