import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import EditPost from './EditPost'
import {Button, ButtonLogin} from './StyledComponents/Buttons'




class Post extends Component  {

    state = {
        post: {},
        city: {},
        user: {},
        isStateNotReady: true,
        isEditPost: false,
        redirect: false
    }

    async componentWillMount() {
        const resPost = await axios.get(`/api/posts/${this.props.match.params.id}`)
        const resCity = await axios.get(`/api/cities/${resPost.data.city_id}`)
        const resUser = await axios.get(`/api/users/${resPost.data.user_id}`)


        this.setState({post: resPost.data, city: resCity.data, user: resUser.data, isStateNotReady: false})
    }

    deletePost = async ()=>{
        const postId = this.props.match.params.id
        console.log(postId)
        const res = await axios.delete(`/api/posts/${postId}`)
        const post = this.state.post
        this.props.removePost(post)

    }

    setStateToTrue = () =>{

        this.setState({redirect: true})
    }

    handleDelete = () =>{
    
        this.setStateToTrue()
        this.deletePost()
        
    }

    deleteConfirm = () => {
        if (window.confirm(`Are you sure you want to delete ${this.state.post.title}`)){
            this.handleDelete()
        }
        else {
            this.setState({redirect: true})
        }
    }

    editPosts = async() => {
        try {
            const response = await axios.patch(`/api/posts/${this.state.post.id}`, this.state.post)
            const updatedPost = response.data
            this.setState({updatedPost, isEditPost: false})
        }
        catch(error) {
            console.log(error)
        }
    }
    
    handleEditChange = (event) => {
        const updatePost = {
            ...this.state.post
        }
        updatePost[event.target.name] = event.target.value
        this.setState({post: updatePost})
    }

    handleEdit = (event) => {
        event.preventDefault()
        this.editPosts()
    }


    render() {
        const post = this.state.post
        const city = this.state.city
        const user = this.state.user
        const PostCard = styled.div`
            height: 60vh;
            width: 30vw;
            background-color:#F7F9F9;
            display:flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            border: 2px solid black;

            p{
                text-align: center;
                width: 50%;
            }

            h1, h2, h3 {
                margin: 0;
            }

            a {
                font-size: 1.5em;
                text-decoration: none;
                color:#FFC857;
                :hover{
                    color:#2E4052;
                }
            }

        
        `
        const EditButton = Button.extend `
        background-color:#2E4052;
        :hover {
            color:#2E4052;
            background-color:#FFC857;
        `
        
        return (
    this.state.redirect ? <Redirect to={`/cities/${city.id}`} /> :
            this.state.isEditPost ? <EditPost handleEditChange={this.handleEditChange} post={this.state.post} handleEdit={this.handleEdit} editPosts={this.editPosts} /> :
            <PostCard>
                <h1>{post.title}</h1>
                <h2>{city.name}</h2>
                <h3>by: {user.name}</h3>
                <p>{post.description}</p>
                <EditButton onClick={() => {this.setState({isEditPost: true})}}>Edit</EditButton>
                <Button onClick={this.deleteConfirm}>Delete</Button>
                <Link to={`/cities/${city.id}`}>Go back to {city.name}</Link>
                
            </PostCard>
        )



    }




}


export default Post