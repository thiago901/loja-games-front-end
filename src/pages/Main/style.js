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
  div{
    input{
      border:0;
      height:26px;
      width:26px;

      &:hover{
        width:100%;

      }
    }
  }

`;
