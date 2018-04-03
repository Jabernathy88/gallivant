import React from 'react'
import styled from 'styled-components'




export const Header = styled.header`
    height: 10vh;
    width: 100vw;
    background-color:#00A676;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    h1{
        font-family: 'Amatic SC', cursive;
        font-size: 2.7em;
        color: white;
        margin: 50px 50px -10px 50px;
    }

    a {
        font-size: 1.9em;
        text-decoration: none;
        color: white;
        margin-bottom: 0px;
        align-self: flex-start;
    
        &:hover {
            color:#0A2463;
        }
    }


`


export const Footer = styled.footer`
    height: 10vh;
    width: 100vw;
    background-color:#0A2463;
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;


    p {
        margin-right: 30px;
        font-size: .5em;
        color: white;
        text-transform: uppercase;
    }
    span{
        font-size: .7em;
        font-weight: bold;
        color:#FF715B;

    }
`







export default {Header, Footer}