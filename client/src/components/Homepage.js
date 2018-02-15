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
                    {
                        this.props.cities.map((city) => {
                            return (
                                
                                    <Link to={`/cities/${city.id}`}> <h1>{city.name}</h1></Link>
                                    
                                
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