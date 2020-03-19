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
  }
`;
export const Form = styled.form`
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
    text-indent: 1.5em;
    line-height: 1.4;
    text-align: justify;
  }
  .faq {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btns-add-faq {
    display: flex;
    justify-self: flex-end;

    button {
      align-self: flex-end;
      margin: 0 0 10px 5px;
      width: 50px;
      border-radius: 4px;
      border: none;
      border: 1px solid #eee;
      background: #6fa1cd;
      color: #fff;
    }
  }

  .table {
    max-width: 100%;
    max-height: 200px;
    overflow-y: scroll;
    margin: 10px 0;
  }
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
      background-color: #22272a;
      color: #fff;
    }
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
  table {
    width: 100%;
  }
  th,
  td {
    width: 100%;
  }
  button {
  }
`;
