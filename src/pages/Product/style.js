import styled from 'styled-components';

/*
  #de4e3a
  #6fa1cd
  #6c0a12
  #22272a
  #27ae60
*/
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Menu = styled.div`
  width: 300px;
  height: 100%;
  background: #de4e3a;
  ul {
    width: 100%;
    background: #6c0a12;

    li {
      color: #fff;
      padding: 15px 10px;
      font-size: 16px;
      font-weight: bold;

      &:hover {
        background: green;
        cursor: pointer;
      }
    }
  }
`;
export const Panel = styled.div`
  flex: 1;
  height: 100%;
  background: #22272a;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  .content {
    display: flex;
    justify-content: space-around;
    height: 100%;
    width: 90%;
  }
`;
export const ProductForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  width: 700px;
  margin-right: 10px;

  input {
    height: 25px;
    margin-bottom: 10px;
    padding: 15px 10px;
    border-radius: 4px;
    border: 1px solid #eee;
  }
  textarea {
    padding: 5px 10px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #eee;
    line-height: 1.4;
    text-align: justify;
  }
  .input-groups {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input[type='number'] {
      margin-left: 10px;
    }
    .plataform {
      flex: 1;
    }
    .input-radio {
      margin: 0 10px 0 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
      h1 {
        font-size: 16px;
      }
      div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100px;
        input {
          margin: 0;
        }
      }
    }
  }
`;

export const Faq = styled.div`
  height: 100%;
  .btns-add-faq {
    display: flex;

    .faq {
      width: 90%;
      display: block;
      input {
        width: 100%;
      }
    }
    button {
      justify-self: stretch;
      flex: 1;
      padding: 0 5px;
      margin: 0 0 10px 5px;
      border-radius: 4px;
      border: none;
      border: 1px solid #eee;
      background: #de4e3a;
      font-weight: bold;
      color: #fff;
    }
  }
`;

export const TableContainer = styled.div`
  max-width: 100%;
  height: 250px;
  justify-self: stretch;
  overflow-y: scroll;
  margin: 10px 0;

  table {
    border-collapse: collapse;
    width: 100%;

    td,
    th {
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
      background-color: #de4e3a;
      color: #fff;
    }
    td {
      max-width: 15ch;
      overflow: hidden;
    }
  }
  svg {
    cursor: pointer;
  }
`;
export const FormImagens = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  width: 300px;

  .carrousel {
    display: flex;
    flex-shrink: 0;
    width: 250px;
    height: 250px;
    overflow: hidden;
    scroll-behavior: smooth;

    img {
      width: 250px;
    }
  }

  input {
    height: 25px;
    margin-top: 10px;
  }
  .button-save {
    background: #27ae60;
    height: 55px;
    border: 0;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    margin: 10px 0;
  }
  .listImages {
    height: 100%;
    overflow-y: scroll;
    table {
      width: 100%;
    }
    th,
    td {
      width: 100%;
    }
    .button_upload {
      background: #de4e3a;
      height: 35px;
      border-radius: 4px;
      margin: 10px 0;

      label {
        display: inline-block;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          cursor: pointer;
        }
        strong {
          text-align: center;
          display: inline-block;
          color: #fff;
        }
      }
    }
    input[type='file'] {
      display: none;
    }
    svg {
      cursor: pointer;
    }
    a {
      p {
        overflow: hidden;
        max-width: 25ch;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      text-decoration: none;
      color: #22272a;

      &:hover {
        color: #de4e3a;
      }
    }
  }

  button {
  }
`;
