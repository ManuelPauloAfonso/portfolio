import styled from "styled-components";




export const Container = styled.section`


background: #1E1F32;
margin-top: 16.125rem;
height: 48rem;

h1{
    text-align: center;
    color: #70E000;
    padding-top: 2rem;
}
h2{
    text-align: center;
    color: #70E000;


}
.about-container{
    display: flex;
    justify-content: center;
    gap: 8.813rem;
    padding-top: 5.25rem;
}



.text-about{

}
.container_ferramenta{
    margin-top: 7.375rem;
}
.container_ferramenta1{
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 2rem;
}
@media (max-width: 999px){

    margin-top: 5rem;
    height: 80rem;


    .img1{
        display: none;
    }
    .text-about{
        margin-left: 10rem;
    }
    .about-container{
    }
    .container_ferramenta1{
        flex-wrap: wrap;
    }

}


`