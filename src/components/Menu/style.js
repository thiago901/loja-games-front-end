import styled from 'styled-components';
import { darken } from 'polished';

export const Menu = styled.div`
  width: 300px;
  height: 100%;
  background: #de4e3a;
  ul {
    width: 100%;
    a {
      text-decoration: none;
    }

    li {
      color: #fff;
      padding: 15px 10px;
      font-size: 16px;
      font-weight: bold;
      border-bottom: 1px solid ${darken(0.03, '#de4e3a')};

      &:hover {
        background: ${darken(0.3, '#de4e3a')};
        cursor: pointer;
      }
    }
  }
`;
