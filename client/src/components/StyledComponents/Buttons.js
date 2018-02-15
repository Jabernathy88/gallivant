import React from 'react'
import styled from 'styled-components'


export const Button = styled.button`
        height: 50px;
        width: 250px;
        color:#F7F9F9;
        background-color:#FFC857;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: 700;
        border-radius: 20px;

        :hover {
            color:#FFC857;
            background-color:#2E4052;
            outline-style:none;
        }
`


export default {Button}