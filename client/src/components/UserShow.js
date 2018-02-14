import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'



class UserShow extends Component {
    state = {
        user: {},
        posts: [],
        
    }
    async componentWillMount(){

        const res = await axios.get(`/api/users/${this.props.match.params.id}`)
        const resPost = await axios.get(`/api/posts`)
        const postArray = []
        const id = parseInt(this.props.match.params.id)
        
        resPost
            .data
            .map((post) => {
                if (post.user_id === id) {
                    postArray.push(post)

                }

            })
        postArray.reverse()
        this.setState({ user: res.data, posts: postArray })
        
        
    }




    render(){
        console.log(this.state.post)
        return(
            
            <div>
                <h1>{this.state.user.name}</h1>
                <img width="200" src={this.state.user.photo_url} alt={this.state.user.name}/>

            {
                this.state.posts.map((post)=>{
                    return (
                        <div>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        </div>
                    )
                })
            }
            
            </div>
        )
    }
}


export default UserShow




