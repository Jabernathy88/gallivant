import React, { Component } from 'react'
import axios from 'axios'
import NewPost from './NewPost'
import {Header, Footer} from './StyledComponents/HeaderFooter'
import {PageContainer, SplashImgTwo, ContainerTwo, CommentContainer, CommentLeft} from './StyledComponents/Containers'

class City extends Component {

    state = {
        city: {},
        posts: [],
        users: [],
        isNewPost: false,
        newPost: {
            title: "",
            description: "",
            user_id: "1", //hacked motherfucker
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
        this.setState({ city: responseCity.data, posts: postArray, users: responseUsers.data })

    }
    addNewPost = (newPost) => {
        const posts = [...this.state.posts]
        posts.push(newPost)
        this.setState({ posts })


    }

    handleChange = (event) => {
        const attribute = event.target.name
        const val = event.target.value
        const newPost = { ...this.state.newPost }
        newPost[attribute] = val
        
        this.setState({ newPost })
        
    }




    newPostPost = () => {
        console.log("POSTING?!")
        axios
            .post("/api/posts", this.state.newPost)
            .then((response) => {
                const updateNewPost = this.state.newPost

                
                updateNewPost._id = response.data._id
                
                console.log(`this is userId: ${updateNewPost.user_id} and this is cityId: ${updateNewPost.city_id}`)
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
            this.state.isNewPost ? <NewPost handleChange={this.handleChange} newPosts={this.newPostPost} /> :

                <PageContainer>
                    <Header>
                    <h1>RoamAtl</h1>
                    </Header>
                    <h2>{city.name}</h2>
                    <SplashImgTwo>
                    <img src={city.city_url} alt={city.name}/>
                    </SplashImgTwo>

                    <ContainerTwo>

                        {this
                            .state
                            .posts
                            .map((post) => {
                                const userId = post.user_id - 1
                                const user = this.state.users[userId]
                                // console.log(this.state.users[userId])

                                return (
                                    <CommentContainer>
                                        <div>
                                        
                                        <CommentLeft>
                                        <img src={user.photo_url} alt={user.name}/>
                                        </CommentLeft>
                                        <p>{user.name}</p>
                                        </div>
                                        <div>
                                        <h3>{post.title}</h3>
                                        <p>{post.description}</p>
                                        </div>
                                    </CommentContainer>
                                )
                            })}

                    </ContainerTwo>
                    {/* new post button */}
                    <button onClick={() => { { this.setState({ isNewPost: true }) } }}>New Post</button>
                    <Footer />
                </PageContainer>

        )
    }

}

export default City