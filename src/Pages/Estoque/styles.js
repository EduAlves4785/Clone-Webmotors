import styled from "styled-components";

export const Corpo=styled.section`
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns:.1fr 1fr 1fr;
`

export const Filtros=styled.div`
    margin-top: .1rem;
    width: 15rem;
    height: 40rem;
    background-color: white;
    overflow-y: scroll;
    display: block;
    padding: 1.5rem;

    & .carromoto{
        width: 4rem;
        height: 3rem;
        margin: 1rem 1rem;
        color: rgb(158,150,158);
        font-size: 15px;
        border:none;
        background: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        cursor: pointer;
        &:hover{
            border-bottom:2px solid red ;
            color: rgb(46,46,55);
        }
    }

    & label{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 13px;
    }

    & input{
        margin-top: .5rem;
        width: 13rem;
        height: 2rem;
        color: black;
        border-radius: 5px;
        border: 1px solid rgb(236,237,242);
        padding: .2rem;
    } 

    & h4{
        margin: 2.5rem 1rem 1rem 1rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    & .marcas{
        & *{
            margin: .1rem;
        }
        & button{
            background: none;
            cursor: pointer;
            border: none;
        }
        margin-top: .5rem;
        height: 20rem;
        display: grid;
        grid-template-columns: 1fr 1fr ;

        & div{
            padding: .5rem;
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            &:hover{
                transition:.3s;
                box-shadow: 0px 3px 5px 4px rgba(0,0,0,0.75);
            }
        }
    }

    & .carros{
        display: flex;
        height: 3rem;
        justify-content:center;
        align-items: center;
        font-family :-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;

        & input{
            margin: 1rem;
            width: 1.5rem;
        }
    }

    & .Filtrar{
        background-color:RGB(225 17 56) ;
        color: white;
        width: 10rem;
        height: 3rem;
        font-size: 25px;
        border: none;
        border-radius: 5px;
        margin: 2rem 2rem;
        cursor: pointer;
        transition: .2s;

        &:hover{
            transition: .3s;
            background-color: RGB(198 0 40);
        }
    }
`

export const Anuncios=styled.div`
    display: grid;
    padding: 2rem;
    grid-template-columns:1fr 1fr 1fr;

    & .Anuncio{
        & *{
            color: rgb(143,142,153);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            margin: .5rem;
        }

        cursor: pointer;
        background-color: white;
        width: 15rem;
        max-height: 20rem;
        margin: 1rem 1rem;
        border-radius: 8px;

        & h2,h4{
            color: black;
        }

        & img{
            margin: 0;
        }

        & div{
            display: flex;
            align-items: center;
        }
    }
`