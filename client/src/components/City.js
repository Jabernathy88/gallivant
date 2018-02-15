import React, { Component } from 'react'
import axios from 'axios'
import NewPost from './NewPost'
import { Header, Footer } from './StyledComponents/HeaderFooter'
import { PageContainer, SplashImgTwo, ContainerTwo, CommentContainer, CommentLeft } from './StyledComponents/Containers'
import { Button } from './StyledComponents/Buttons'

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
        // console.log(`this is users state:`, users) console.log(posts)
        return (
            this.state.isPageNotLoad ? <div></div> :
                this.state.isNewPost ? <NewPost handleChange={this.handleChange} newPosts={this.newPostPost} /> :
                    <div>
                        <h2>{city.name}</h2>
                        <SplashImgTwo>
                            <img src={city.city_url} alt={city.name} />
                        </SplashImgTwo>

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
                                            <p>{user.name}</p>
                                        </div>
                                        <div>
                                            <h3>{post.title}</h3>
                                            <p>{post.description}</p>
                                            <a href={`/posts/${post.id}`}>Read More</a>
                                        </div>
                                    </CommentContainer>
                                )



                            }

                            )}

                            <Button onClick={() => { { this.setState({ isNewPost: true }) } }}>New Post</Button>
                        </ContainerTwo>
                        {/* new post button */}

                    </div>

        )
    }

}

export default City