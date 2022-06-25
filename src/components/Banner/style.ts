import styled from "styled-components";


export const Container = styled.section`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');


display: flex;
margin-left: 20rem;
margin-top: 14rem;
padding: 1rem;

button{
    display: none;
}
h1{
    color: white;
    font-weight: 600;
    line-height: 60px;
    font-size: 3rem;
    font-family: 'DM Sans', sans-serif;

}
h3{
    font-family: 'DM Sans', sans-serif;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    line-height: 21px;

}
p{
    font-family: 'DM Sans', sans-serif;
    color: #687076;
    font-size: 1rem;
    line-height: 21px;
    font-weight: 700;

}
.p{
    color: white;
    font-size: 0.875rem;
    line-height: 18px;
    font-weight: 700;
    display: flex;
    align-items: center;

    .one{
        width: 30px;
        height: 14px;
    }

}
.Container{
    max-width: 35.125rem;
    p{
        margin-top: 1rem;
    }
    h3{
        margin-top: 1rem;
    }
}

@media (max-width: 999px){
    text-align: center;
    margin: 0 auto;
    margin-top: 10rem;

    button{
        display: block;
        margin: 0 auto;
        margin-top: 2rem;
        width: 15rem;
        height: 2.50rem;
        border: none;
        border-radius: 6px;
        border: 1px solid #687076;
        background: #1C274F; 
        color: white;
        font-weight: 700;
        font-size: 1rem;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
            
        }
    }
    .p{
        display: none;

        p{
            display: none;
        }
    }
}
`