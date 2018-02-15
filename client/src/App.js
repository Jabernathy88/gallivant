import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from 'axios'
import Homepage from './components/Homepage'
import City from './components/City'
import Post from './components/Post'
import UserView from './components/UsersView'
import UserShow from './components/UserShow'
import NewUser from './components/NewUser'
import {Header, Footer} from './components/StyledComponents/HeaderFooter'
import {PageContainer} from './components/StyledComponents/Containers'

class App extends Component {

  state = {
    cities: [],
    posts: [],
    users: [],
    loginedUserId: '',
    currentUser: {},
    newUser: {},
    isUserLogedIn: false,
  }

  async componentWillMount() {
    const response = await axios.get('/api/cities')
    const resPost = await axios.get('/api/posts')
    const resUsers = await axios.get('/api/users')
    // console.log(response.data)
    this.setState({ cities: response.data, post: resPost.data, users: resUsers.data })

  }

  removePost = (post) => {
    const postToRemove = this.state.posts.indexOf(post)
    const posts = [...this.state.posts]
    posts.splice(postToRemove, 1)
    this.componentWillMount()
    this.setState({ posts })
  }

  removeUser = (user) => {
    const userToRemove = this.state.users.indexOf(user)
    const users = [...this.state.users]
    users.splice(userToRemove, 1)
    this.componentWillMount()
    this.setState({ users })
  }

  loginUser = async (userId) => {
    const res = await axios.get(`/api/users/${userId}`)


    this.setState({ loginedUserId: userId, currentUser: res.data, isUserLogedIn: true })
  }

  addNewUser = (newUser) => {
    const users = [...this.state.users]
    users.push(newUser)
    this.componentWillMount()
    this.setState({ users: users })


  }

  newUserPost = () => {

    axios
      .post("/api/users", this.state.newUser)
      .then((response) => {
        const updateNewUser = this.state.newUser


        updateNewUser._id = response.data._id
        this.addNewUser(updateNewUser)

      }).catch((error) => {
        console.log(error)
      })

  }


  handleChange = (event) => {
    const attribute = event.target.name
    const val = event.target.value
    const newUser = { ...this.state.newUser }
    newUser[attribute] = val

    this.setState({ newUser })

  }

  render() {
    const homepageComponent = () => {
      return (<Homepage cities={this.state.cities} user={this.state.currentUser} userId={this.state.loginedUserId} />)
    }
    // const cityComponent = () => {
    //   return (<City {...props}/>)
    // }

    const postComponent = (props) => {
      return (
        <Post {...props} removePost={this.removePost} />
      )
    }

    const userComponent = () => {
      return (
        <UserView users={this.state.users} loginUser={this.loginUser} />
      )
    }

    const userShowComponent = (props) => {
      return (
        <UserShow {...props} removeUser={this.removeUser} />
      )
    }

    const cityComponent = (props) => {
      return (
        <City {...props} user={this.state.currentUser} userId={this.state.loginedUserId} />
      )
    }

    const newUserComponent = (props) =>{
      return(
        <NewUser  {...props} handleChange={this.handleChange} newUser={this.newUserPost} />
      )
    }



    return (
      <PageContainer>
      <Header>
        <h1>Roam</h1>
        {this.state.isUserLogedIn ? <h2><a href={`/users/${this.state.currentUser.id}`}>{this.state.currentUser.name}/</a><a href="/users">SignOut</a></h2>
        : <h2><a href="/users">Sign-In/</a><a href="/users/new">Sign up</a></h2>
        }
      </Header>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={homepageComponent} />
            <Route exact path="/cities/:id" render={cityComponent} />
            <Route exact path="/posts/:id" render={postComponent} />
            <Route exact path="/users" render={userComponent} />
            <Route exact path="/users/new" render={newUserComponent} />
            <Route exact path="/users/:id" render={userShowComponent} />
          </Switch>
        </div>
      </Router>
      <Footer />
      </PageContainer>
    );
  }
}

export default App;
