import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import axios from 'axios'
import Homepage from './components/Homepage'
import City from './components/City'
import Post from './components/Post'
import UserView from './components/UsersView'
import UserShow from './components/UserShow'

class App extends Component {

  state = {
    cities: [],
    posts: [],
    users: [],
    loginedUserId: '',
    currentUser: {},
  }

  async componentWillMount() {
    const response = await axios.get('/api/cities')
    const resPost = await axios.get('/api/posts')
    const resUsers = await axios.get('/api/users')
    // console.log(response.data)
    this.setState({cities: response.data, post: resPost.data, users: resUsers.data})

  }
  
  removePost = (post) =>{
    const postToRemove = this.state.posts.indexOf(post)
    const posts = [...this.state.posts]
    posts.splice(postToRemove, 1)
    this.componentWillMount()
    this.setState({posts})
  }
  loginUser = async(userId) => {
    const res = await axios.get(`/api/users/${userId}`)


    this.setState({loginedUserId: userId, currentUser: res.data})
  }

  render() {
    const homepageComponent = () => {
      return (<Homepage cities={this.state.cities} user={this.state.currentUser} userId={this.state.loginedUserId}/>)
    }
    // const cityComponent = () => {
    //   return (<City {...props}/>)
    // }

    const postComponent = (props) =>{
      return(
        <Post {...props} removePost={this.removePost}/>
      )
    }

    const userComponent = () => {
      return(
        <UserView users={this.state.users}/>
      )
    }

    const userShowComponent = (props) => {
      return(
        <UserShow {...props}  loginUser={this.loginUser}/>
      )
    }

    const cityComponent = (props) =>{
      return(
        <City {...props} user={this.state.currentUser} userId={this.state.loginedUserId} />
      )
    }

  

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={homepageComponent}/>
          <Route exact path="/cities/:id" render={cityComponent}/> 
          <Route exact path="/posts/:id" render={postComponent}/>
          <Route exact path="/users" render={userComponent} />
          <Route exact path="/users/:id" render={userShowComponent} />
        </Switch>
      </div>
    </Router>
  );
}
}

export default App;
