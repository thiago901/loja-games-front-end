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

export const Carrousel = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 10px;
  img {
    border-radius: 4px;
    width: 250px;
  }

  .content {
    display: flex;
    width: 250px;
    overflow: hidden;
    scroll-behavior: smooth;
  }
  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    a {
      margin: 5px 0 0 5px;
      display: inline-block;
      padding: 5px 10px;

      text-decoration: none;
      text-align: center;
      align-items: center;
      color: #22272a;
      background: #de4e3a;
      border-radius: 4px;
      color: #fff;
    }
    a:active {
      background: #22272a;
    }
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  .data-description {
    align-self: start;
    strong {
      font-size: 40px;
    }
    p {
      padding: 10px;
      text-align: justify;
      line-height: 1.3;
    }
  }
  button {
    margin: 10px;
    padding: 10px;
    height: 40px;
    border: 0;
    background: #6fa1cd;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
  }
`;

export const Faq = styled.div`
  table {
    margin: 0 auto;
    width: 90%;
  }
  tr {
    height: 25px;
  }
  td {
    padding: 10px;
  }
  tbody tr:nth-child(even) {
    background: #eee;
  }
`;
