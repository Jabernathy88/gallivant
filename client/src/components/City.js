import React, {Component} from 'react'
import axios from 'axios'
class City extends Component {

    state = {
        city: {},
        posts: []
    }

    async componentWillMount() {
        const cityId = parseInt(this.props.match.params.id)
        console.log(typeof cityId)

        const responseCity = await axios.get(`/api/cities/${this.props.match.params.id}`)
        const responsePosts = await axios.get(`/api/posts`)
        // console.log(typeof responsePosts.data.city_id)

        // console.log(responsePosts.data)
        if (cityId === responsePosts.data.city_id) {
            this.setState({city: responseCity.data, posts: responsePosts.data.cityId})
        }
        console.log(responsePosts.data)
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