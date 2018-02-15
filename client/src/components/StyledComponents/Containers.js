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
    margin-bottom: 50px;
    

`
export const ContainerThree = styled.div`
    min-height: 50vh;
    width: 90vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 50px 0;
    border: 2px solid black;
    background-color: #E1E3E3;
    flex: 1 0 auto;

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

export const UserContainer = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    marign-top: 10px;

    h2{
        font-size: .95em;
        color: #00A676
    }

`
export const UserImgContainer = styled.div`
    width: 50%;
    height: 20vh;
    border: 1px solid black;
    overflow: hidden;

    img {
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
                ContainerThree, 
                SplashImgTwo,
                CommentContainer,
                CommentLeft,
                UserContainer,
                UserImgContainer}