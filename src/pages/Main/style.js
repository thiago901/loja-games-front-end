import styled from 'styled-components';
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
  background: #de4e3a;
  background-color: #de4e3a;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23d74c38' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23d14a36' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23ca4735' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23c44533' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23bd4331' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  padding: 20px;
  margin: 0 auto;
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
  @media (max-width: 400px) {
    align-items: center;
    margin-top: 10px;
    height: 20px;
    padding: 0;
  }
`;

export const Banner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;

  .text {
    position: absolute;
    align-self: flex-end;
    left: 0;
    width: 300px;
    padding-left: 20px;
    color: #fff;
    line-height: 1.4;
    text-align: justify;
    font-weight: bold;
    text-shadow: 0 0 1px #000;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const Poster = styled.div`
  text-align: center;
  flex-shrink: 0;
  width: 400px;
  height: 400px;
  overflow: hidden;
  background: #fff;
  border-radius: 50%;
  padding: 10px;

  img {
    width: auto;
  }
  &:hover {
    /* background: #fff;
    background: #fff
      url('https://obj.ibxk.com.br/layout/bj/especiais/the-witcher-3/assets/images/witcher-main-poster.png');
    background-size: cover; */
  }
`;

export const ProductList = styled.ul`
  margin: 0 auto;
  margin-top: 30px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  a {
    text-decoration: none;
    color: #22272a;
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 10px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    .imgs {
      width: 250px;
      height: 250px;
      overflow: hidden;
      img {
        width: 250px;
        height: auto;
        border-radius: 4px;
      }
    }

    p {
      margin-top: 10px;
      font-size: 14px;
      align-self: flex-start;
      max-width: 40ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span {
      align-self: flex-start;
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      display: block;
    }
    button {
      margin: 10px;
      width: 100%;
      height: 40px;
      border: 0;
      background: #6fa1cd;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      border-radius: 4px;
      margin-top: auto;
    }
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 870px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export const Characters = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100px;
    height: 100px;
    overflow: hidden;
    background: #fff;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    box-shadow: 0px 0px 8px #22272a;
    img {
      width: 100%;
    }
    &:nth-child(1) {
      transform: translateY(-100%) scale(1.5);
    }
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Adverts = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Card = styled.div`
  width: 200px;
  height: 100px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  text-align: right;
  box-shadow: 0px 0px 8px #22272a;
  display: flex;
  justify-content: space-between;
  align-self: center;
  position: relative;
  align-items: center;

  div {
    p {
      text-align: left;
      font-size: 13px;
    }
    span {
      text-align: left;
      display: block;
      font-size: 17px;
      font-weight: bold;
    }
  }

  img {
    height: 100%;
    position: relative;
  }
  &:nth-child(1) {
    justify-self: self-start;
    transform: translate(-100px, 20px);
  }
  &:nth-child(2) {
    transform: translate(-50px, -100px);
  }
  &:hover {
    cursor: pointer;
  }

  svg {
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-100%, -100%);
  }
`;
