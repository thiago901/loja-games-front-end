import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  z-index: -1;

  .ul {
    position: absolute;
    z-index: -1;
    width: 100%;
  }
  .ul li {
    list-style: none;
    position: absolute;
    background: #eee;
    opacity: 0.1;
    animation-name: up-down;

    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .ul li:nth-child(1) {
    left: 5%;
    width: 36px;
    height: 36px;
    animation-duration: 7s;
  }
  .ul li:nth-child(2) {
    left: 25%;
    width: 76px;
    height: 76px;
    animation-duration: 17s;
  }
  .ul li:nth-child(3) {
    left: 45%;
    width: 15px;
    height: 15px;
    animation-duration: 10s;
  }
  .ul li:nth-child(4) {
    left: 65%;
    width: 36px;
    height: 36px;
    animation-duration: 14s;
  }
  .ul li:nth-child(5) {
    left: 80%;
    width: 100px;
    height: 100px;
    animation-duration: 20s;
  }
  @keyframes up-down {
    to {
      transform: translateY(-200px) rotate(0deg);
    }
    from {
      transform: translateY(110vh) rotate(170deg);
    }
  }
`;
