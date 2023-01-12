import styled from "styled-components";

export const Rodape=styled.footer`
    width: 100%;
    height: auto;
    background-color:rgb(46,45,55);
    margin-top: 8rem;
    bottom: 0;
    color: white;

    & p{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 13px;
    }

`
export const Faixa=styled.div`
    width: 100%;
    height: 3rem;
    background-color: rgb(225,17,56);
    color: white;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    justify-content:center;
`

export const Elementos=styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    & div{
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        transition: .3s;

        & a{
            cursor: pointer;
            width: 6.5rem;
            margin: .1rem;
        }

        & a:hover{
            border-bottom:1px solid white;
        }
    }
`