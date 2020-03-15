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
  background: #6fa1cd;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .content {
    display: grid;
    grid-template: repeat(1, 1fr) / repeat(2, 1fr);
    grid-gap: 10px;
    height: 90%;

    button {
      grid-column-start: 2;
      align-self: start;
      justify-self: end;
      width: 250px;
      height: 30px;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  width: 400px;

  input {
    height: 25px;
    margin-top: 10px;
  }
  button {
  }
`;

export const FormImagens = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  width: 400px;

  align-items: center;
  div {
    width: 100%;
  }
  img {
    width: 250px;
  }
  input {
    height: 25px;
    margin-top: 10px;
  }
  th,
  td {
    width: 250px;
  }
  button {
  }
`;
