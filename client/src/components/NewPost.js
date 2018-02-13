import React, {Component} from 'react'
import axios from 'axios'

class NewPost extends Component {

    state = {
        newPost: {
            title: " ",
            description: " ",
            user_id: ""
        }
      

        }

        

        // newPostPost = () => {
        //     axios
        //         .post("/api/posts", this.state.newPost)
        //         .then((response) => {
        //             const updateNewPost = {
        //                 ...this.state.newPost
        //             }

        //         })

        // }

    

    render() {

        return (

            <div>hello from the posts!</div>

        )

    }

}

export default NewPost