import styled from 'styled-components';

export const Header = styled.header`
  @import url('https://fonts.googleapis.com/css?family=Frijole&display=swap');
  display: flex;

  padding: 10px;
  background: #de4e3a;
  background-color: #de4e3a;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23d74c38' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23d14a36' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23ca4735' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23c44533' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23bd4331' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
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
