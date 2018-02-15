import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import EditUser from './EditUser'
import { Button, ButtonLogin } from './StyledComponents/Buttons.js'
import styled from 'styled-components';

const DeleteButton = ButtonLogin.extend`
    background-color: red;
`

const Container = styled.div`
    color: white;
`

class UserShow extends Component {
    state = {
        user: {},
        updatedUser: {},
        posts: [],
        redirect: false,
        redirectToEdit: false,

    }
    async componentWillMount() {

        const res = await axios.get(`/api/users/${this.props.match.params.id}`)
        const resPost = await axios.get(`/api/posts`)
        const postArray = []
        const id = parseInt(this.props.match.params.id)

        resPost
            .data
            .map((post) => {
                if (post.user_id === id) {
                    postArray.push(post)

                }

            })
        postArray.reverse()
        this.setState({ user: res.data, posts: postArray })


    }

    deleteUser = async () => {
        const userId = this.props.match.params.id
        const res = await axios.delete(`/api/users/${userId}`)
        const user = this.state.user
        this.props.removeUser(user)
        ///works upon reload

    }

    setStateToTrue = () => {

        this.setState({ redirect: true })
    }

    handleDelete = () => {

        this.setStateToTrue()
        this.deleteUser()

    }


    editUser = async () => {
        try {
            const response = await axios.patch(`/api/users/${this.state.user.id}`, this.state.user)

            this.setState({ updatedUser: response.data, redirectToEdit: false })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        const updateUser = {
            ...this.state.user
        }
        updateUser[event.target.name] = event.target.value
        this.setState({ user: updateUser })
    }

    handleEdit = (event) => {
        event.preventDefault()
        this.editUser()
        this.setState({ redirectToEdit: false })
    }

    setStateToEdit = () => {
        this.setState({ redirectToEdit: true })
    }

    deleteConfirm = () => {
        if (window.confirm(`Are you sure you want to delete ${this.state.user.name}?`)) {
            this.handleDelete()
        }
        else {
            this.setState({ redirect: true })
        }
    }



    render() {

        return (
            this.state.redirect ? <Redirect to={'/users'} /> :
                this.state.redirectToEdit ? <EditUser user={this.state.user} handleEdit={this.handleEdit} handleChange={this.handleChange} /> :
                    <Container>
                        <h1>{this.state.user.name}</h1>
                        <img width="200" src={this.state.user.photo_url} alt={this.state.user.name} />

                        {
                            this.state.posts.map((post) => {
                                return (
                                    <div>
                                        <h3>{post.title}</h3>
                                        <p>{post.description}</p>
                                    </div>
                                )
                            })
                        }
                        <ButtonLogin onClick={this.setStateToEdit}>Edit</ButtonLogin>
                        <DeleteButton onClick={this.deleteConfirm}>Delete</DeleteButton>
                    </Container>
        )
    }
}


export default UserShow