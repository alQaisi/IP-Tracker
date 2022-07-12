import styled from "styled-components";

export const HeaderContainer=styled.div`
    margin-top: 0;
    box-sizing: border-box;
    height:350px;
    display: block;
    position: relative;
    background: ${`url(${require(`./pattern-bg.png`)}) 50% 0 no-repeat`};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    flex-wrap: nowrap;
    justify-content:center;
    align-items: flex-start;
`;