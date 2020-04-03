import styled from 'styled-components';

/*
  #de4e3a
  #6fa1cd
  #6c0a12
  #22272a
*/
export const Content = styled.div`
  background: #22272a;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  background: #fff;
  max-width: 600px;
  width: 450px;
  min-height: 350px;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .group-input {
    display: flex;
    flex-direction: column;

    input:not([type='checkbox']) {
      height: 25px;
      margin-bottom: 10px;
      padding: 15px 10px;
      border-radius: 4px;
      border: 1px solid #eee;
    }

    .employee-active {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      label {
        margin-right: 5px;
        font-weight: bold;
      }
    }
  }

  button {
    justify-content: flex-end;
  }
`;
