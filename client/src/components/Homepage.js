import React, { Component } from 'react'
import { PageContainer, ContainerOne, SplashImg, LinkContainer } from './StyledComponents/Containers'
import { Header, Footer } from './StyledComponents/HeaderFooter'
import skyline from './StyledComponents/img/skyline.jpg'
import { Link } from 'react-router-dom'

class Homepage extends Component {

    render() {
        return (
            <PageContainer>
                <Header >
                    <h1>Roam</h1>
                    
                    <a href={`/users`}><h2>Sign In/Sign Up</h2></a>
                </Header>
                <SplashImg>
                    <img src={skyline} alt="Skyline" />
                </SplashImg>
                
                <ContainerOne>
                <h2>{this.props.user.name}</h2>

                    {
                        this.props.cities.map((city) => {
                            return (
                                <LinkContainer>
                                    <Link to={`/cities/${city.id}`}> <h1>{city.name}</h1></Link>
                                    <img src={city.city_url} alt={city.name} />
                                </LinkContainer>
                            )
                        })
                    }
                </ContainerOne>
                <Footer />
            </PageContainer>




        )
    }

}



export default Homepage