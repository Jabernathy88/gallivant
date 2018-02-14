import React, { Component } from 'react';
import axios from 'axios'
import EditPost from './EditPost'

class Post extends Component {

    state = {
        city: {},
        posts: {},
        users: {},
        isEditPost: false
    }

    async componentWillMount() {
        const id = parseInt(this.props.match.params.id)
        const responsePosts = await axios.get(`/api/posts/${id}`)
        const responseUsers = await axios.get(`/api/users/${responsePosts.data.city_id}`)
        
        const responseCity = await axios.get(`/api/cities/${responsePosts.data.user_id}`)
        this.setState({ city: responseCity.data, posts: responsePosts.data, users: responseUsers.data })

    }

    editPosts = async() => {
        try {
            const response = await axios.patch(`/api/posts/${this.state.posts.id}`, this.state.posts)
            const updatedPost = response.data
            console.log(response.data)
            this.setState({updatedPost, isEditPost: false})
        } catch(error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        const updatePost = {
            ...this.state.posts
        }
        updatePost[event.target.name] = event.target.value
        this.setState({posts: updatePost})
    }

    handleEdit = (event) => {
        event.preventDefault()
        this.editPosts()
    }
    

    render() {
        return (
            this.state.isEditPost ? <EditPost handleChange={this.handleChange} posts={this.state.posts} handleEdit={this.handleEdit} editPosts={this.editPosts} /> :
            <div>
                <p>Title: {this.state.posts.title}</p>
                <p>UserName: {this.state.users.name}</p>
                <p>City: {this.state.city.name}</p>
                <p>Description: {this.state.posts.description}</p>
                <button onClick={() => { { this.setState({ isEditPost: true }) } }}>Edit Post</button>
            </div>
        );
    }
}

export default Post;