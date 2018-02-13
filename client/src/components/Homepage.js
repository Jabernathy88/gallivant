import React, {Component} from 'react'

class Homepage extends Component {

    render() {
        return(
<div>
{
    this.props.cities.map((city)=>{
        return(
           <a href={`/cities/${city.id}`}> <h1>{city.name}</h1></a>
        )
    })
}

</div>




        )
    }

}



export default Homepage