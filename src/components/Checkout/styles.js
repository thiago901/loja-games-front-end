import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  margin: 0px auto;

  width: 600px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
  svg {
    background: #de4e3a;
  }

  div {
    justify-self: center;
    position: absolute;
    border-bottom: 3px solid #fff;
    left: 0;
    width: 90%;
    z-index: -1;
  }
`;
