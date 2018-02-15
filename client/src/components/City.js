import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import NewPost from './NewPost'
import { Header, Footer } from './StyledComponents/HeaderFooter'
import { PageContainer, SplashImgTwo, ContainerTwo, CommentContainer, CommentLeft } from './StyledComponents/Containers'
import { Button } from './StyledComponents/Buttons'
import { Link } from 'react-router-dom'

class City extends Component {

    state = {
        city: {},
        posts: [],
        users: {},
        isNewPost: false,
        isPageNotLoad: true,
        newPost: {
            title: "",
            description: "",
            user_id: `${this.props.userId}`,
            city_id: `${this.props.match.params.id}`
        }
    }


    async componentWillMount() {
        const id = parseInt(this.props.match.params.id)
        const responseUsers = await axios.get(`/api/users`)
        const responseCity = await axios.get(`/api/cities/${this.props.match.params.id}`)
        const responsePosts = await axios.get(`/api/posts`)
        const postArray = []
        responsePosts
            .data
            .map((post) => {
                if (post.city_id === id) {
                    postArray.push(post)

                }

            })
        postArray.reverse()
        this.setState({ city: responseCity.data, posts: postArray, users: responseUsers.data, isPageNotLoad: false })

    }
    addNewPost = (newPost) => {
        const posts = [...this.state.posts]
        posts.push(newPost)
        this.componentWillMount()
        this.setState({ posts: posts, isNewPost: false })


    }

    handleChange = (event) => {
        const attribute = event.target.name
        const val = event.target.value
        const newPost = { ...this.state.newPost }
        newPost[attribute] = val

        this.setState({ newPost })

    }




    newPostPost = () => {
        // console.log("POSTING?!")
        axios
            .post("/api/posts", this.state.newPost)
            .then((response) => {
                const updateNewPost = this.state.newPost


                updateNewPost._id = response.data._id

                // console.log(`this is userId: ${updateNewPost.user_id} and this is cityId: ${updateNewPost.city_id}`)
                this.addNewPost(updateNewPost)

            }).catch((error) => {
                console.log(error)
            })

    }


    render() {
        const city = this.state.city
        const posts = this.state.posts
        const users = this.state.users
        const Container = styled.div`
            min-height: 60vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        `
        const CommentRight = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 60%;
            height: 100%;
            overflow: hidden;
            
            h3{
                font-style: italic;
                margin: 0;
                padding: 0;
            }
            h4{
                font-size: .9em;
                margin: 0;
            }
            p {
                overflow: hidden;
                margin: 0 0 10px 0;
                height: 1.2em;
                width: 100%;
            }
            a{
                color:#00A676;
                text-decoration: none;
            }

        `
        return (
            this.state.isPageNotLoad ? <div></div> :
                this.state.isNewPost ? <NewPost handleChange={this.handleChange} newPosts={this.newPostPost} /> :
                    <Container>
                        
                        
                        <SplashImgTwo>
                            <img src={city.city_url} alt={city.name} />
                            <h2>{city.name}</h2>
                        
                        </SplashImgTwo>
                        <Button onClick={() => { { this.setState({ isNewPost: true }) } }}>New Post</Button>
                        <ContainerTwo>
                        
                    
    
            

                            {this.state.posts.map((post) => {
                            
                                const user = this.state.users.find((person) => {
                                    return person.id === post.user_id 
                                })
                                console.log(user)

                                return (
                                    <CommentContainer>
                                        <div>

                                            <CommentLeft>
                                                <img src={user.photo_url} alt={user.name} />
                                            </CommentLeft>
                        
                                        </div>
                                        <CommentRight>
                                            <h3>{post.title}</h3>
                                            <h4>by: {user.name}</h4>
                                            <p>{post.description}</p>
                                            <Link to={`/posts/${post.id}`}>Read More...</Link>
                                        </CommentRight>
                                    </CommentContainer>
                                )



                            }

                            )}

                            
                        </ContainerTwo>
                        {/* new post button */}

                    </Container>

        )
    }

}

export default City