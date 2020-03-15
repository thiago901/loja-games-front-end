import styled from 'styled-components';

export const Carrousel = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 250px;
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
