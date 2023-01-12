import styled from "styled-components";

export const NavBar=styled.header`
    *{
        margin: 1.5rem;
        background-color: white;
    }
    box-shadow:0px .1px 2px black;
    width: 100%;
    height:4.2rem;
    color: red;
    display: grid;
    background-color: white;
    grid-template-columns: 5fr 1fr 1fr 1fr 1fr 4.5fr 0fr ;
    & a{
        margin: 0;
        height: .5rem;
    }
`

export const Btn=styled.button`
    color: RGB(43 43 43);
    width: 5.5rem;
    height: 3rem;
    font-size: 13px;
    border:none;
    margin-top: .6rem;
    background: none;
    cursor: pointer;
    &:hover{
        border-bottom:2px solid red ;
    }
`

export const BoxUser=styled.div`

    *{
        margin: .3rem;
        cursor: pointer;
    }
    margin: 0;
    padding-top:.5rem;
    color:RGB(43 43 43);
    font-size: 22px;
    font-family: sans-serif;
    width: 13rem;
    height:70%;
    display: flex;
    border-left:.2mm solid RGB(219 219 219);
    align-items: center;
`