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


export const Header = styled.header`
@import url('https://fonts.googleapis.com/css?family=Trade+Winds&display=swap');
  display:flex;
  width:100%;
  background:#de4e3a;
  height:100px;
  align-items:center;
  h1{
    color:#fff;
    font-family: 'Trade Winds', cursive;
  }

  ul{
    display:flex;
    flex:1;
    height:100%;
    align-items:center;
    justify-content:space-around;
    list-style:none;
    li{
      padding:15px 10px;
      color:#fff;
      font-weight:bold;
      font-size:17px;
      &:hover{
        color:#eee;
        cursor: pointer;
      }
    }
  }





`;

export const InputSearch = styled.div`
  display:flex;
  width:250px;
  height: 30px;
  background:#fff;
  border-radius:4px;


  input {
      width: 100%;
      border:0;
      border-radius:4px;
    }
  svg{
    background:#eee;
    width:26px;
    height:100%;
    border-radius:4px;
  }

`;

export const Banner = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:400px;
  background:#de4e3a;

`;

export const Poster = styled.div`
    text-align:center;
    width: 400px;
    height: 400px;
    overflow:hidden;
    background:#fff;
    border-radius:50%;
    padding:10px;

    img{
      width: auto;
    }

`;
