import React, { Component } from 'react'
import { PageContainer, ContainerOne, SplashImg, LinkContainer } from './StyledComponents/Containers'
import { Header, Footer } from './StyledComponents/HeaderFooter'
import Skyline from './StyledComponents/img/splash.jpg'
import { Link } from 'react-router-dom'

class Homepage extends Component {

    render() {
        return (



            <div>



                <ContainerOne>
                    


                        <LinkContainer>
                        <h1>Let's Go Places...</h1>
                        <p>With <span>Roam</span>, you never have to go alone. We offer reviews and comments about many places around the world, so you can be sure of what to do in the city you're visiting! See what others have said about our two pilot cites below:</p>

                    {
                        this.props.cities.map((city) => {
                            return (
                                
                                    <Link to={`/cities/${city.id}`}> {city.name}</Link>
                                    
                                
                            )
                        })
                    }
                    </LinkContainer>
                </ContainerOne>


            </div>


        )
    }

}



export default Homepage