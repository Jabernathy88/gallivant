import React, { Component } from 'react'
import { ContainerOne } from './StyledComponents/Containers'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components';
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardInput,
    CardIcon,
    CardOptionsNote,
    CardOptions,
    CardOptionsItem,
    CardButton,
    CardLink
} from "./StyledComponents/Card";


const Container = styled.form`
    display: flex;
    flex-direction: column;
`

class NewUser extends Component {

    state = {
        redirect: false
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.newUser()
        this.setState({redirect: true})



    }

    render() {
        return (
            this.state.redirect ? <Redirect to="/users" /> :

<div>
    <CardWrapper>
                        <Container onSubmit={this.handleSubmit} >
<CardBody>
    <div>
                    
                        <CardInput
                            name="name" placeholder="Name" type="text" onChange={this.props.handleChange} />
                        <CardInput name="photo_url" placeholder="Photo" type="text" onChange={this.props.handleChange} />
</div>
                        <CardButton type="submit" value="submit">Submit</CardButton>

    
</CardBody>
                </Container>
                </CardWrapper>
</div>
        )
    }
}









export default NewUser