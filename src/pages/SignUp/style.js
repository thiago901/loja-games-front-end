import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  height: 100vh;
  overflow: hidden;
  .img-left {
    width: 55%;

    img {
      width: 100%;
      opacity: 0.7;
    }
  }
  form {
    display: flex;
    position: relative;
    z-index: 1;
    background-color: #22272a;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='328' height='328' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23222222' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23999999'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");

    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      text-align: center;
      font-family: 'Trade Winds', cursive;
      margin-bottom: 20px;
      font-size: 40px;
      color: #fff;
    }
    .content {
      display: flex;
      flex-direction: column;
      width: 600px;
      max-width: 600px;
      padding: 20px;
      span {
        color: #de4e3a;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 10px;
      }
      span::before {
        content: '*';
      }
      input {
        border: 0;
        padding: 10px 15px;
        border-radius: 4px;
        margin-bottom: 10px;
        width: 100%;
      }
      input:read-only {
        opacity: 0.7;
      }

      .group {
        display: flex;
        align-items: center;
        input + input {
          margin-left: 10px;
        }

        span {
          margin: 0 0 10px 3px;
          width: 100%;
        }
      }
      .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      p {
        color: #fff;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 1160px) {
    .img-left {
      display: none;
    }
  }
`;

export const ButtonCreate = styled.button`
  text-transform: uppercase;
  border: 0;
  border-radius: 4px;
  background: #de4e3a;
  font-weight: bold;
  color: #fff;
  padding: 10px 15px;
  width: 120px;
  margin-bottom: 5px;
`;

export const ButtonSignin = styled(Link)`
  color: #6fa1cd;
  text-decoration: none;
  /*
  #de4e3a
  #6fa1cd
  #6c0a12
  #22272a
*/
`;
