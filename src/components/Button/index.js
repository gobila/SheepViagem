import styled from "styled-components";

export const Button=styled.button`
    background-color: #35b6ff;
    border: none;
    border-radius:10px;
    line-height: 37px;
    width: 40%;
    color:#FFF;
    font-weight: bold;
    :hover{
        cursor: pointer;
        background-color: rgb(17 40 179 / 60%);
    }

    @media(max-width:480px){
        width: 100%;
    }
`;