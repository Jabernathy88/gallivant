import React, { Component } from 'react'
import axios from 'axios'




class Post extends Component  {

    state = {
        post: {},
        city: {},
        user: {}
    }

    async componentWillMount() {
        const resPost = await axios.get(`/api/posts/${this.props.match.params.id}`)
        
        const resCity = await axios.get(`/api/cities/${resPost.data.city_id}`)
        const resUser = await axios.get(`/api/users/${resPost.data.user_id}`)
       


        this.setState({post: resPost.data, city: resCity.data, user: resUser.data})
    }


    render() {
        const post = this.state.post
        const city = this.state.city
        const user = this.state.user
        
        return (
            <div>
                <h1>{post.title}</h1>
                <h2>{city.name}</h2>
                <h3>by: {user.name}</h3>
                <p>{post.description}</p>
                <button>Edit</button>
                <button>Delete</button>
                
            </div>
        )



    }




}


export default Post