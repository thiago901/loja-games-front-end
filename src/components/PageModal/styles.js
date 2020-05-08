import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  z-index: 1;

  display: none;
  justify-content: center;
  .close {
    color: red;
    position: absolute;

    right: 0;
    font-size: 40px;
    top: 0;
  }
`;
