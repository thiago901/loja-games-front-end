import styled from 'styled-components';

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
