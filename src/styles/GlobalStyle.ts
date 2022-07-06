import { createGlobalStyle  } from "styled-components";
import text from '../Assets/text.png'

export const GlobalStyle = createGlobalStyle`


*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: white;
}
body{
    background: #000000;
    font-family: 'Poppins', sans-serif;
    background-image: url(${text});

}
li{
    list-style: none;
}
a{
    list-style: none;
    text-decoration: none;
}



`

