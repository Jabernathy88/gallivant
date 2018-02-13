import React, {Component} from 'react'
import axios from 'axios'
class City extends Component {

    state = {
        city: {},
        posts: []
    }

    async componentWillMount() {
        const cityId = parseInt(this.props.match.params.id)
        // console.log(typeof cityId)

        const responseCity = await axios.get(`/api/cities/${this.props.match.params.id}`)
        const responsePosts = await axios.get(`/api/posts`)
        // console.log(responsePosts.data)

        responsePosts.data.map((post) => {
            if (post.city_id === cityId) {
                // console.log(post)
                this.setState({city: responseCity.data, posts: post})
                console.log('this is from posts: ', this.state.posts)
                console.log('this is from city: ', this.state.city)
            }
        })

        // if (cityId === responsePosts.data.city_id) {            
        //     this.setState({city: responseCity.data, posts: responsePosts.data.cityId})
        // }
        // console.log(this.state.posts)
    }

    render() {
        const city = this.state.city
        const posts = this.state.posts
        return (
            <div>

                <h2>{city.name}</h2>
                <div>

                {/* {this.state.posts.map((post) => {
                    // stopped here for lunch
                    return (
                        <div>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                        </div>
                    )                
                })} */}

                </div>

            </div>

        )
    }

}

export default City