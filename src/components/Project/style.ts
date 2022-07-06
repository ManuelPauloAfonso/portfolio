import styled from "styled-components"

export const Container = styled.section`

margin-top: 8.188rem;

h1{
    text-align: center;
    line-height: 62px;
    color: #70E000;
}
button{
    color: black;
}
p{
    max-width: 312px;
}
.containerimg_project{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    img{
        width: 35rem;
        height: 23.813rem;

    }
}
.project-img{
    background: #1A1F27;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    border: 1px solid rgba(112, 224, 0, 0.29);
    width: 27.938rem;
    height: 19.990rem;
    padding-left: 4.375rem;
    padding-top: 5rem;

    .btn{
        margin-top: 2rem;
        border-radius: 6px;
        border: 2px solid #FFFFFF;
        background: #1A1F27;
        width: 7.5rem;
        height: 2rem;
        color: white;
        line-height: 19px;
        font-weight: 700;
        
        &:hover{

            background: rgb(112, 224, 0);


        }


    }
    .btn1{
        margin-left: 1rem;
        width: 7.5rem;
        border-radius: 6px;
        height: 2rem;
        line-height: 19px;
        font-weight: 700;
        border: 2px solid #70E000;
        background: #1A1F27;
        color: white;
        transition: 0.5s;
        cursor: pointer;

        &:hover{
            background: rgb(112, 224, 0);

        }




    }
    
}
@media (max-width: 999px) {
    .containerimg_project{

        img{
            width: 22rem;
        }
    }
    
}


`