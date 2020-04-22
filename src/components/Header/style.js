import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  @import url('https://fonts.googleapis.com/css?family=Frijole&display=swap');
  display: flex;
  flex: 1;

  background: #de4e3a;
  background-color: #de4e3a;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23d74c38' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23d14a36' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23ca4735' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23c44533' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23bd4331' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
  h1 {
    color: #fff;
    font-family: 'Frijole', cursive;
  }

  .shopping-basket {
    position: relative;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40px;
    color: #fff;
    font-weight: bold;
    span {
      position: absolute;
      text-align: center;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: orange;

      top: 0;
      left: 20px;
    }
  }
  @media (max-width: 640px) {
    display: inline-block;
    h1 {
      text-align: center;
      font-size: 20px;
      width: 100%;
    }
    ul {
      display: inline-block;
      margin-left: 0px;
      width: 100%;
      li {
        width: 100%;
        margin-top: 5px;
        padding: 2px;
      }
      &:hover {
        border-radius: 0px;
        padding: 2px;
        transition: background 0.5s ease-in-out;
      }
    }
    .shopping-basket {
      margin-left: 0px;
      width: 100%;
      color: #fff;
      font-weight: bold;
      justify-content: center;
    }
  }
`;

export const InputSearch = styled.div`
  display: flex;
  width: 250px;
  height: 30px;
  background: none;
  border-radius: 4px;
  justify-content: flex-end;

  &:hover {
    input {
      width: 100%;
    }
  }

  input {
    width: 0;
    border: 0;
    background: #eee;
    border-radius: 4px;
    transition: width 0.7s;

    &:focus {
      width: 100%;
      padding: 5px 0 5px 10px;
    }
  }
  svg {
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }
  @media (max-width: 640px) {
    align-items: center;
    margin-top: 10px;
    height: 25px;
    padding: 0;
    width: 100%;
  }
`;
export const ListMenu = styled.ul`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  margin-left: 20px;

  li {
    padding: 15px 10px;
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    text-align: center;
    width: 100%;

    &:hover {
      color: #eee;
      cursor: pointer;
      background: #22272a;
      border-radius: 4px;
      padding: 10px 15px;
      transition: background 0.5s linear;
    }
  }
`;

export const MenuHeader = styled.ul`
  list-style: none;
  margin-left: 10px;
  position: relative;
  button {
    background: none;
    border: 0;
    color: #fff;
    width: 100%;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
    }
    span {
      position: relative;
      font-size: 12px;
      top: -10px;
      background: rgba(0, 0, 0, 0.6);
      padding: 5px;
      color: #fff;
      font-weight: bold;
      max-width: 15ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  &:hover {
    cursor: pointer;
  }
  &:hover ul {
    /* display: block; */
    z-index: 1;
    opacity: 1;
  }
  ul {
    /* display: none; */
    opacity: 0;
    list-style: none;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: -1;
    transition: opacity 1s;
    li {
      a {
        text-decoration: none;
        color: #fff;
      }

      margin-bottom: 5px;
      padding: 2px;
      &:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.6);
      }
    }
    li:nth-child(1n) {
      transition-delay: opacity 0.5s;
    }
    li:nth-child(2n) {
      transition-delay: opacity 1s;
    }
  }
`;

export const Login = styled(Link)`
  color: #fff;
  margin: 0 5px;
  font-size: 16px;
  transition: color 0.5s;
  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;
/*
  #de4e3a
  #6fa1cd
  #6c0a12
  #22272a
  #27ae60
*/
