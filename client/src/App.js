import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import axios from 'axios'
import Homepage from './components/Homepage'
import City from './components/City'
import Post from './components/Post'

class App extends Component {

  state = {
    cities: [],
    posts: []
  }

  async componentWillMount() {
    const response = await axios.get('/api/cities')
    const resPost = await axios.get('/api/posts')
    // console.log(response.data)
    this.setState({cities: response.data})

  }
  
  removePost = (post) =>{
    const postToRemove = this.state.posts.indexOf(post)
    const posts = [...this.state.posts]
    posts.splice(postToRemove, 1)
    this.componentWillMount()
    this.setState({posts})
  }

  render() {
    const homepageComponent = () => {
      return (<Homepage cities={this.state.cities}/>)
    }
    // const cityComponent = () => {
    //   return (<City {...props}/>)
    // }

    const postComoponet = (props) =>{
      return(
        <Post {...props} removePost={this.removePost}/>
      )
    }

  

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={homepageComponent}/>
          <Route exact path="/cities/:id" component={City}/> 
<<<<<<< HEAD
          <Route exact path="/posts/:id" component={Post}/>
=======
          <Route exact path="/posts/:id" render={postComoponet}/>
>>>>>>> ffb07697ca2ff586dd68c9fff1e5a3143ffe78e3
        </Switch>
      </div>
    </Router>
  );
}
}

export default App;
