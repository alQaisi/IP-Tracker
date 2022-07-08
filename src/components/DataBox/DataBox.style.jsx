import styled from "styled-components";

export const Databox=styled.div`
    position:absolute;
    background:white;
    width: auto;
    display: flex;
    text-align: left;
    top:225px;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    margin:50px;
    z-index: 1000;
    & p{
        margin:35px;
        margin-top:10px;
        color:black;
        font-size:20px;
        padding:15px;
        padding-right:25px;
        line-height:25px;
        border-right: rgb(0 0 0 /.4) 1px solid;
        &::before{
            display: block;
            color:hsl(0, 0%, 59%);
            font-size: small;
            margin-bottom:15px;
        }
    }
    & p:last-of-type{
        padding:15px;
        border: none;
    }
    @media screen and (max-width:950px){
        & p{
        margin:5px 0px 5px 5px;
        font-size: 18px;
        }
    }
    @media screen and (max-width:750px){
        & p{
            font-size: 15px;
        }
    }
    @media screen and (max-width:550px){
        &{
            flex-direction: column;
            top: 125px;
        }
        & p{
            margin-bottom:5px;
            margin-top:5px;
            margin:5px 15px;
            padding: 5px;
            border:none;
            line-height: 13px;
            font-size: 15px;
        }
    }
    @media screen and (max-width:300px){
        &{
            top: 100px;
            text-align: center;
        }
        & p::before{
            font-size:10px;
        }
    }
`;

export const DataboxItem=styled.p`
    &::before{
        ${({title})=>`content:${title}`};
    }
`