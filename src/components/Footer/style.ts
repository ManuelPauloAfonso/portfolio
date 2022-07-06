import styled from "styled-components";

export const Container = styled.footer`


background: #1D1E31;
margin-top: 6.375rem;
height: 12rem;

h2{
    text-align: center;
    padding-top: 2rem;
    color: #70E000;

}

.container_footer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 3rem;

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        text-align: center;
        gap: 2rem;
    }
    span{
        display: flex;
        align-items: center;
    }
}

@media (max-width: 999px) {
    height: 14rem;
    
}

`