import styled from 'styled-components';

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
  @import url('https://fonts.googleapis.com/css?family=Trade+Winds&display=swap');
  display: flex;

  div {
    width: 45%;

    img {
      width: 100%;
      opacity: 0.7;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  div {
    width: 40%;

    h1 {
      font-family: 'Trade Winds', cursive;
      margin-bottom: 20px;
      color: #260c39;
    }

    input {
      display: block;
      border: 1px solid #eee;
      padding: 10px 15px;
      border-radius: 4px;
      font-size: 16px;
      margin-bottom: 10px;
      width: 110%;
    }
  }
`;

export const Button = styled.button`
  border: 0;
  border-radius: 4px;
  background: #de4e3a;
  font-weight: bold;
  color: #fff;
  padding: 10px 15px;
  width: 100px;
`;
