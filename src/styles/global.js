import { createGlobalStyle } from 'styled-components';

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
        background: #fff;
        -webkit-font-smoothing:antialiased !important
    }

    button,body, input{
        font-size:14px;
        font-family: 'Roboto', sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
