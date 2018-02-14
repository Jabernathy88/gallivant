import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class Post extends Component  {

    state = {
        post: {},
        city: {},
        user: {},
        isStateNotReady: true,
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


    render() {
        const post = this.state.post
        const city = this.state.city
        const user = this.state.user
        
        return (

    this.state.redirect ? <Redirect to={`/cities/${city.id}`} /> :
        
            <div>
                <h1>{post.title}</h1>
                <h2>{city.name}</h2>
                <h3>by: {user.name}</h3>
                <p>{post.description}</p>
                <button>Edit</button>
                <button onClick={this.deleteConfirm}>Delete</button>
                <a href={`/cities/${city.id}`}>Go back to {city.name}</a>
                
            </div>
        )



    }




}


export default Post
