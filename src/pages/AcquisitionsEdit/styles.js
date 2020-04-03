import styled from 'styled-components';
/*
  #de4e3a
  #6fa1cd
  #6c0a12
  #22272a
*/
export const Content = styled.div`
  width: 30%;
  margin: 20px;
  background: #de4e3a;
  border-radius: 4px;
  padding: 20px;
  p {
    font-size: 16px;
    color: #fff;
    margin-bottom: 10px;
    strong {
      width: 15ch;
      margin-right: 5px;
    }
  }
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    label {
      font-size: 16px;
      color: #fff;
      margin: 10px 0;
    }

    input[type='number'] {
      width: 100%;
      border: 0;
      padding: 5px 10px;
    }
  }

  .button-save {
    background: #27ae60;
    height: 3rem;
    width: 100%;
    border: 0;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    margin-top: 10px;
  }
`;
