import styled from "styled-components";

export const Content=styled.section`
    margin: 2rem;
    .rec.rec-arrow {
        background-color: RGB(198 198 198);
        &:hover{
            background-color: white;
            color: black;
        }
    }

    button.rec-dot{
        display: none;
    }

    .Carousel{
        margin-top: -1.95rem;
        height: 25rem;
    }
`

export const InputBox=styled.div`
    width:60rem;
    height:7.5rem;
    border-radius: 8px;
    margin:auto 11rem;
    background-color: white;
    padding: 1rem;
    margin-top: -5rem;
`
export const ButtonInputBox=styled.button`
    color: rgb(178,178,190);
    width: 8rem;
    height: 3rem;
    font-size: 15px;
    border:none;
    background: none;
    cursor: pointer;
    transition:.1s;
    &:hover{
        color: RGB(43 43 43);
        border-bottom:3px solid red ;
    }
`

export const InputPesquisa=styled.input`
    width: 30rem;
    height: 2rem;
    font-size: 20px;
    border-radius: 5px;
    margin-top: .8rem;
    border: 1px solid rgb(157,164,176);
    padding:.5rem;
    color: black;
    outline:0;
`

export const BntOfertas=styled.button`
    width: 15rem;
    height: 3rem;
    margin-left:2rem;
    border: none;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
    font-family: sans-serif;
    background-color:rgb(246,17,60);
    transition: .3s;

    &:hover{
        background-color: RGB(180 12 43);
    }
`
