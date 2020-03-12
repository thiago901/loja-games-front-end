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
  background:#de4e3a;
`;

export const Header = styled.header`
@import url('https://fonts.googleapis.com/css?family=Frijole&display=swap');
  display:flex;
  padding:10px;
  background:#de4e3a;
  width:100%;
  height:100px;
  align-items:center;
  justify-content:space-between;
  h1{
    color:#fff;
    font-family: 'Frijole', cursive;
  }

  ul{
    display:flex;
    flex:1;
    height:100%;
    align-items:center;
    justify-content:space-around;
    list-style:none;
    margin-left:20px;

    li{
      padding:15px 10px;
      color:#fff;
      font-weight:bold;
      font-size:17px;
      text-align:center;
      width:100%;

      &:hover{
        color:#eee;
        cursor: pointer;
        background:#22272a;
        border-radius:4px;
        padding:10px 15px;
        transition: background 0.5s linear;
      }
    }
  }

  .shopping-basket{
      margin-left:10px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      width:60px;
      color:#fff;
      font-weight:bold;
  }



`;

export const InputSearch = styled.div`
  flex-shrink:0;
  display:flex;
  width:250px;
  height: 30px;
  background:none;
  border-radius:4px;
  justify-content:flex-end;

  &:hover{
    input{
      width:100%;

    }

  }

  input {
      width: 0;
      border:0;
      background:#eee;
      border-radius:4px;
      transition: width .7s;

    &:focus{
      width:100%;
      padding:5px 0 5px 10px;
    }
  }
  svg{
    width:26px;
    height:26px;
    border-radius:50%;
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
    flex-shrink:0;
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

export const ProductList = styled.ul`

    margin:0 auto;
    margin:30px;
    list-style:none;
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap:20px;




  li{
    display:flex;
    flex-direction:column;
    background:#fff;
    padding:10px;
    border-radius:4px;
    align-items:center;
    justify-content:center;
    img{
      width:250px;
    }
    p{
      margin-top:10px;
      font-size:14px;
      align-self:flex-start;
    }
    span{
      align-self:flex-start;
      font-size:20px;
      font-weight:bold;
      text-align:left;
      display:block;
    }
    button{
      margin:10px;
      width:100%;
      height:40px;
      border:0;
      background:#6fa1cd;
      color: #fff;
      font-size:16px;
      font-weight:bold;
      border-radius:4px;


    }
  }

`;
export const Characters = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;

  div{
    width: 100px;
    height: 100px;
    overflow:hidden;
    background:#fff;
    border-radius:50%;
    padding:10px;
    text-align:center;
    box-shadow: 0px 0px 8px #22272a;
    img{
      width: 100%;
    }
    &:nth-child(1){
      transform:translateY(-100px) scale(1.5);
    }
    &:hover{
      cursor: pointer;
    }
  }

`;

export const Adverts = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;



`;

export const Card = styled.div`
    width: 200px;
    height: 100px;
    overflow:hidden;
    background:#fff;
    border-radius:4px;
    padding:10px;
    text-align:right;
    box-shadow: 0px 0px 8px #22272a;
    display:flex;
    justify-content:space-between;
    align-self:center;
    position:relative;
    align-items:center;

    div{


      p{
        text-align:left;
        font-size:13px;
      }
      span{
        text-align:left;
        display:block;
        font-size:17px;
        font-weight:bold;
      }
    }

    img{
      height:100%;
      position:relative;
    }
    &:nth-child(1){
      justify-self:self-start;
      transform:translate(-100px,20px);
    }
    &:nth-child(2){

      transform:translate(-50px,-100px);
    }
    &:hover{
      cursor: pointer;
    }

    svg{
      position:absolute;
      left:100%;
      top:100%;
      transform:translate(-100%, -100%);

    }

`;
