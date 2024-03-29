import styled from "styled-components";

export const FormTitle=styled.p`
    margin-top: 0;
    color: #f5f5f5;
    font-size: 2.3rem;
    margin-top:35px;
    @media screen and (max-width:520px){
        &{
            font-size:1.8rem;
        }
    }
`;

export const InputCont=styled.div`
    margin-top:-20px;
    width:100vw;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    & input{
        outline: none;
        font-size:1.1rem;
        margin-left:15px;
        max-width: 400px;
        flex-grow:1;
        border: none;
        border-top-left-radius:17px;
        border-bottom-left-radius:17px;
        padding-left:22px ;
    }
    & button{
        outline: none;
        margin-right:15px;
        border:none;
        border-top-right-radius:35%;
        border-bottom-right-radius:35%;
        font-size:1.5rem;
        padding:15px;  
        color: #f5f5f5; 
        cursor: pointer;
        background:black ;
        transition: background-color .5s ease;
        &:hover{
            background-color:rgb(53, 53, 53); 
        }
    }
    @media screen and (max-width:520px){
        & input{
            font-size:11.5px;
            max-width:350px
        }
        & button{
            font-size: 1rem;
            padding: 10px;
        }
    }
`;