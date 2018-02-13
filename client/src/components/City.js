import React, {Component} from 'react'
import axios from 'axios'
class City extends Component {

    state = {
        city: {},
        posts: []
    }

    async componentWillMount() {

        const responseCity = await axios.get(`/api/cities/${this.props.match.params.id}`)
        const responsePosts = await axios.get(`/api/cities/${this.props.match.params.id}/posts`)
        console.log(responsePosts.data)
        this.setState({city: responseCity.data, posts: responsePosts})

    
    }

    render() {
        const city = this.state.city
        return (
            <div>

                <h2>{city.name}</h2>

                <p></p>

            </div>

        )
    }

}

export default City