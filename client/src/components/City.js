import React, {Component} from 'react'
import axios from 'axios'
class City extends Component {

    state = {
        city: {},
        posts: [],
        isStateNotSet: true
    }

    async componentWillMount() {

        const responseCity = await axios.get(`/api/cities/${this.props.match.params.id}`)
        const responsePosts = await axios.get(`/api/cities/${this.props.match.params.id}/posts`)
        // console.log(responsePosts.data)
        this.setState({city: responseCity.data, posts: responsePosts.data, isStateNotSet: false})
        

    
    }

    render() {
        const city = this.state.city
        console.log(this.state.posts)

        
        return (
            <div>

                <h2>{city.name}</h2>
                <div>
                {
                    this.state.posts.map((post)=> {
                        <div>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        </div>
                    })
                }
                </div>
            </div>

        )
    }

}

export default City