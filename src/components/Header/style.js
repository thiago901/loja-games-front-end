import styled from 'styled-components';

export const Header = styled.header`
  @import url('https://fonts.googleapis.com/css?family=Frijole&display=swap');
  display: flex;

  padding: 10px;
  background: #de4e3a;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
  h1 {
    color: #fff;
    font-family: 'Frijole', cursive;
  }

  ul {
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
  }

  .shopping-basket {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60px;
    color: #fff;
    font-weight: bold;
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
