import styled from "styled-components";


export const Container = styled.header`

display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
padding: 2rem 2rem;
background: #151627;

nav{
    ul{
        display: flex;
        gap: 2.625rem;
    }
}
.ulone{
    display: none;
}

@media (max-width: 999px) {


    .ul{
        display: none;

    }
    .ulone{
        display: block;
    }
    
}

`