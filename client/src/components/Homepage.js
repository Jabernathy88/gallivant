import React, { Component } from 'react'
import { PageContainer, ContainerOne, SplashImg, LinkContainer } from './StyledComponents/Containers'
import { Header, Footer } from './StyledComponents/HeaderFooter'
import skyline from './StyledComponents/img/skyline.jpg'

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


                    {
                        this.props.cities.map((city) => {
                            return (
                                <LinkContainer>
                                    <a href={`/cities/${city.id}`}> <h1>{city.name}</h1></a>
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