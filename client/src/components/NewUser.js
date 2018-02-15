import React, { Component } from 'react'
import { ContainerOne } from './StyledComponents/Containers'
import { Redirect } from 'react-router-dom'


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



                <ContainerOne>
                    < form onSubmit={this.handleSubmit} >
                        <input
                            name="name" placeholder="Name" type="text" onChange={this.props.handleChange} />
                        <input name="photo_url" placeholder="Photo" type="text" onChange={this.props.handleChange} />

                        <input type="submit" value="submit" />

                    </form>

                </ContainerOne>

        )
    }
}









export default NewUser