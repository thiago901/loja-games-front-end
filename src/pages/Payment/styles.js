import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  background: #fff;
  max-width: 900px;
  margin: 50px auto;

  padding: 30px;
  border-radius: 4px;

  position: relative;

  input:checked ~ form {
    opacity: 1;
    pointer-events: initial;
  }
  input:checked ~ .teste {
    opacity: 1;
    pointer-events: initial;
  }
`;

export const DataDelivry = styled.div`
  h1 {
    margin: 0 50px 10px 0;
    padding-bottom: 5px;
    font-size: 20px;
    border-bottom: 1px solid #eee;
  }
  dl {
    margin-left: 10px;
    dd:nth-child(1) {
      font-size: 16px;
      font-weight: bold;
      color: #222;
    }
    dd {
      margin-bottom: 7px;
    }
  }
  label {
    display: flex;
    align-items: center;

    padding: 5px;
    border: 0;
    background: none;
    margin-top: 10px;
    border-radius: 3px;

    svg {
      margin-right: 5px;
    }
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  #updateAddress:checked ~ .AddressClient {
    display: flex;
  }
  #AddAddress:checked ~ div {
    display: flex;
  }
`;
export const OrderResume = styled.div`
  h1 {
    margin: 0 0px 10px 0;
    padding-bottom: 5px;
    font-size: 20px;
    border-bottom: 1px solid #eee;
  }
  table {
    width: 100%;

    td:nth-child(2) {
      text-align: right;
    }

    td {
      padding-bottom: 5px;
      font-size: 16px;
    }
  }
  a {
    text-decoration: none;
    color: #222;
    &:hover {
      text-decoration: underline;
    }
  }
  section {
    text-align: right;

    margin-top: 15%;
    span {
      font-weight: bold;
      font-size: 16px;
      color: #333;
    }
    strong {
      font-size: 28px;
    }
  }
`;

export const MethodPayment = styled.div`
  grid-column: 1/3;

  display: flex;

  margin-top: 20px;
  #chooseCard:checked ~ div {
    display: flex;
  }
`;
export const CreditCard = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  margin-right: 10px;
  input[type='radio'] {
    display: none;
  }
  label {
    display: block;
    cursor: pointer;
  }
  form {
    opacity: 0.3;
    pointer-events: none;
    transition: opacity 0.5s;
    display: flex;
    flex-direction: column;

    input {
      padding: 10px;
      margin-bottom: 5px;
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
      justify-content: center;
      font-size: 16px;
      margin: 0 0 10px 0;
      background: #999;
      border-radius: 4px;
      color: #fff;

      label {
        border-radius: 4px;
        width: 100%;
        padding: 10px;
        transition: border 0.2s linear;
        &:hover {
          border-left: 5px solid #00b894;
        }
      }

      #saveCard:checked ~ label {
        border-left: 5px solid #00b894;
        border-right: 5px solid #00b894;
        font-weight: bold;
      }
    }
    .chooseCard {
      margin: 10px 0;
      text-align: left;
      display: flex;
      align-items: center;
    }
  }
`;
export const PaymentSlip = styled.div`
  text-align: center;
  width: 100%;
  input[type='radio'] {
    display: none;
  }
  label {
    display: block;
    cursor: pointer;
  }

  .teste {
    opacity: 0.3;
    pointer-events: none;
    transition: opacity 0.5s;
    ul {
      margin-top: 20px;
      list-style: none;
      li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        svg {
          margin-right: 10px;
        }
      }
    }
    section {
      margin-top: 15%;
      padding-top: 20px;
      border-top: 1px solid #ddd;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;

      .total {
        span {
          font-size: 16px;
          font-weight: bold;
          color: #999;
          margin-right: 2px;
        }
        strong {
          font-size: 20px;
        }
      }
      .auth {
        display: flex;
        align-items: center;
        span {
          margin-right: 5px;
        }
      }

      button {
        background: #22272a;
        border: 0;
        color: #fff;
        padding: 10px 15px;
        border-radius: 4px;
        transition: background 0.5s;
        &:hover {
          background: ${darken(0.02, '#22272a')};
        }
      }
    }
  }
`;

export const AddressClient = styled.div`
  display: none;

  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  border-radius: 4px;
  z-index: 1;

  justify-content: center;

  ul {
    position: relative;
    margin: 10px 0;
    list-style: none;
    background: #fff;
    padding: 20px;
    overflow-y: scroll;

    width: 500px;
    min-width: 350px;
    li {
      display: flex;
      margin: 0 0 10px 10px;
      padding: 10px;
      border-bottom: 1px solid #eee;

      transition: 0.2s;
      label {
        margin-left: 10px;
        dd:nth-child(1) {
          font-weight: bold;
        }

        &:hover {
          cursor: pointer;
        }
      }
      &:hover {
        background: #6fa1cd;
        color: #fff;
        cursor: pointer;
      }
    }
    .close {
      position: absolute;
      top: 0;
      right: 0;
      color: #de4e3a;
      font-size: 20px;
      font-weight: bold;
      z-index: 1;
    }
  }
`;

export const ContainerAddAndDeleteAddresses = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChooseCard = styled.div`
  display: flex;

  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  border-radius: 4px;
  z-index: 1;

  justify-content: center;

  ul {
    position: relative;
    margin: 10px 0;
    list-style: none;
    background: #fff;
    overflow-y: scroll;
    width: 100%;

    li {
      display: flex;
      margin: 0 0 10px 10px;
      padding: 10px;
      border-bottom: 1px solid #eee;
      text-align: left;
      transition: 0.2s;
      align-items: center;

      input[type='radio'] {
        display: initial;
        width: 20px;
        height: 20px;
      }
      label {
        margin-left: 10px;
        dd {
          padding: 5px 2px;
        }

        &:hover {
          cursor: pointer;
        }
      }
      &:hover {
        background: #6fa1cd;
        color: #fff;
        cursor: pointer;
      }
    }
    .close {
      position: absolute;
      top: 0;
      right: 0;
      color: #de4e3a;
      font-size: 20px;
      font-weight: bold;
      z-index: 3;
    }
  }
`;
