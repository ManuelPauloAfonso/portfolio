import styled from "styled-components";


export const Container = styled.section`

margin-top: 11.188rem;

.section-container{
    display: flex;
    justify-content: space-between;
    max-width: 68.688rem;
    margin: 0 auto;
    
    img{
        cursor: pointer;
        transition: 0.5s;

        &:hover{
            filter: brightness(2.5)
        }
    }

    h2{
        font-weight: 700;
        line-height: 4.688rem;
        color: #70E000;
        font-size: 3rem;
    }
    button{
        width: 11.063rem;
        height: 2.625rem;
        border: 2px solid #70E000;
        border-radius: 10px;
        background: black;
        margin-top: 2rem;
        transition: 0.5s;
        cursor: pointer;

        &:hover{
            opacity: 0.3;
        }
    }
}
.container1{
    display: flex;
    flex-direction: column;
    gap: 1.688rem;
}
@media (max-width: 999px) {

    .container1{
        display: none;
    }
    .section-container{
        display: flex;
        justify-content: center;
        h2{
            text-align: center;
        }
        p{
            text-align: center;
        }
        .btn{
            display: flex;
            justify-content: center;
        }
    }
    
}

`