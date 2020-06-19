import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(222, 78, 58, 0.8);
  height: 100%;
  width: 100%;
  z-index: 1;
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;

  button {
    width: 80px;
    height: 80px;
    background: 0;
    border: 2px solid #000;
    font-size: 30px;
  }
`;
