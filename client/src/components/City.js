import React, {Component} from 'react'
import axios from 'axios'
class City extends Component {

    state = {
city: {}
    }
async componentWillMount() {
    const response = await axios.get(`/api/cities/${this.props.match.params.id}`)
    console.log(response.data)
    this.setState({city: response.data})

}

    render() {
        const city = this.state.city
        return (
            <div>
           
<h1>{city.name}</h1>

            </div>

        )
    }

}

export default City