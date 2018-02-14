import React from 'react'
import styled from 'styled-components'



export const PageContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#F7F9F9;
`

export const ContainerOne = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1 0 auto;


`
export const ContainerTwo = ContainerOne.extend`
    flex-direction: column;
    justify-content: space-between;
    

`

export const CommentContainer = styled.div`
    margin: 10px auto;
    height: 20vh;
    width: 50%;
    display:flex;
    border: 1px solid black;
    background-color:#E0D0C1;

`
export const CommentLeft = styled.div`
    height: 70%;
    width: 45%;
    overflow: hidden;
    

    img{
        border-radius: 100px;
        height: 100%;
        width: auto;
    }
`

export const SplashImg = styled.div`
        height: 40vh;
        width: 100vw;
        overflow: hidden;
        border: 2px solid black;

        img {
            height: auto;
            width: auto;
            transform: translateY(-650px);
        }
`
export const SplashImgTwo = SplashImg.extend`

        img{
            transform: translateY(-250px) translateX(-55px);
        }
`

export const LinkContainer = styled.div`
        margin: 40px 0;
        height: 50vh;
        width: 30vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        a{
            color: black;

        }
        img {
            height: 50%;
            width: auto;
            transform: translateY(-20px);
            border: 1px solid black;
        }

`




export default { PageContainer, 
                ContainerOne, 
                SplashImg,  
                LinkContainer, 
                ContainerTwo, 
                SplashImgTwo,
                CommentContainer,
                CommentLeft }