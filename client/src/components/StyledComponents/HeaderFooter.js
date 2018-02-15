import React from 'react'
import styled from 'styled-components'




export const Header = styled.header`
    height: 20vh;
    width: 100vw;
    background-color:#00A676;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    h1{
        margin-left: 50px;
        font-size: 4em;
        color: white;
    }

    a {
        font-size: 1.2em;
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
`







export default {Header, Footer}