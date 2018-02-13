import React, {Component} from 'react'
import axios from 'axios'
class City extends Component {

    state = {
        city: {},
        posts: [],
        users: []
    }

    async componentWillMount() {
        const id = parseInt(this.props.match.params.id)
        const responseUsers = await axios.get(`/api/users`)
        const responseCity = await axios.get(`/api/cities/${this.props.match.params.id}`)
        const responsePosts = await axios.get(`/api/posts`)
        const postArray = []
        responsePosts
            .data
            .map((post) => {
                if (post.city_id === id) {
                    postArray.push(post)

                }

            })
        postArray.reverse()
        this.setState({city: responseCity.data, posts: postArray, users: responseUsers.data})

    }

    render() {
        const city = this.state.city
        const posts = this.state.posts
        const users = this.state.users
        // console.log(`this is users state:`, users) console.log(posts)
        return (
            <div>

                <h2>{city.name}</h2>
                <img width="200" src={city.city_url}/>

                <div>

                    {this
                        .state
                        .posts
                        .map((post) => {
                            const userId = post.user_id - 1
                            const user = this.state.users[userId]
                            console.log(this.state.users[userId])

                            return (
                                <div>
                                    <h3>{post.title}</h3>
                                    <p>{user.name}</p>
                                    <p>{post.description}</p>
                                </div>
                            )
                        })}

                </div>
                {/* new post button */}
                <button>New Post</button>
            </div>

        )
    }

}

export default City