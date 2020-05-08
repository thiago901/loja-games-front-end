import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');


    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;

    }

    html,body, #root{
        min-height:100%;
    }

    body{
      background: #de4e3a;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23d74c38' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23d14a36' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23ca4735' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23c44533' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23bd4331' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
      background-attachment: fixed;
      background-size: cover;
      -webkit-font-smoothing:antialiased !important
    }

    button,body, input,textarea{
        font-size:14px;
        font-family: 'Roboto', sans-serif;
    }
    html,body{
      height:100%;
    }
    button{
        cursor: pointer;
    }
    a{
      text-decoration:none;
    }
`;
