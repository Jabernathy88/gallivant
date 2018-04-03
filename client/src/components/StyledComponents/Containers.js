import React from 'react'
import styled from 'styled-components'
import Skyline from './img/splash.jpg'



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
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1 0 auto;
    background: linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)), url(${Skyline}) center no-repeat;
    background-size: cover;



  


`
export const ContainerTwo = styled.div`
    
    width: 100vw;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    background: none;
    

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
    margin: 20px auto;
    height: 20vh;
    width: 50%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
    background-color:#F7F9F9;

`
export const PostContainer = CommentContainer.extend`
        height: 10%;
        width: 95%;
        flex-direction: column;
        border: none;
        background-color: transparent;

        h3{
            margin: 0;
        }

        p {
            margin: 0;
            font-size: 0.9em;
            align-self: flex-start;
        }

`
export const CommentLeft = styled.div`
    height: 100px;
    width: 100px;
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
    a{
        text-decoration: none;
        color:#FF715B;

        :hover{
            color:#241E4E;
        }
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


export const SplashImgTwo = styled.div`
        marign: 30px 0;
        height: 40vh;
        width: 100vw;
        overflow: hidden;
        border: 2px solid black;
        position: relative;
        text-align: center;

        img {
            margin: 0;
            width: 100%;

            transform: translateY(-240px);
        }
        h2 {
            margin: 0;
            font-family: 'Lobster', cursive;
            color: #FFC857;
            -webkit-text-stroke: .5px black;
            font-size: 10em;
            position: absolute;
            z-index: 1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
`

export const LinkContainer = styled.div`
        margin: 40px 0;
        height: 80vh;
        width: 30vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        color: white;
        text-align: center;
        
        h1{
            font-family: 'Patua One', cursive;
            font-size: 3em;
            margin: 0;
        }
        p{

            font-size: 1.5em;
        }

        a{
            font-size: 4em;
            font-family: 'Lobster', cursive;
            color: white;
            text-decoration: none;

            :hover {
                color:#FFC857;
            }

        }

`





export default { PageContainer, 
                ContainerOne,  
                LinkContainer, 
                ContainerTwo,
                ContainerThree, 
                SplashImgTwo,
                CommentContainer,
                PostContainer,
                CommentLeft,
                UserContainer,
                UserImgContainer}