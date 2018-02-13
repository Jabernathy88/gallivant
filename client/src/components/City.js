import React, {Component} from 'react'
import axios from 'axios'
class City extends Component {

    state = {
        city: {},
        posts: []
    }

    async componentWillMount() {
        const cityId = parseInt(this.props.match.params.id)

        const responseCity = await axios.get(`/api/cities/${this.props.match.params.id}`)
        const responsePosts = await axios.get(`/api/posts`)
        const postArray = []
        responsePosts
            .data
            .map((post) => {
                if (post.city_id === cityId) {
                    postArray.push(post)

                }

            })
            postArray.reverse()
        this.setState({city: responseCity.data, posts: postArray})
    }

    render() {
        const city = this.state.city
        const posts = this.state.posts
        console.log(posts)
        return (
            <div>

                <h2>{city.name}</h2>
                <div>

                    {this.state.posts.map((post) => {

                    return (
                        <div>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                        </div>
                    )
                })}

                </div>

            </div>

        )
    }

}

export default City