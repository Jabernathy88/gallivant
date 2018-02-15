import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import EditPost from './EditPost'




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
        
        return (
    this.state.redirect ? <Redirect to={`/cities/${city.id}`} /> :
            this.state.isEditPost ? <EditPost handleEditChange={this.handleEditChange} post={this.state.post} handleEdit={this.handleEdit} editPosts={this.editPosts} /> :
            <div>
                <h1>{post.title}</h1>
                <h2>{city.name}</h2>
                <h3>by: {user.name}</h3>
                <p>{post.description}</p>
                <button onClick={() => {this.setState({isEditPost: true})}}>Edit</button>
                <button onClick={this.deleteConfirm}>Delete</button>
                <a href={`/cities/${city.id}`}>Go back to {city.name}</a>
                
            </div>
        )



    }




}


export default Post