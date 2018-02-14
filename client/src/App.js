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

  render() {
    const homepageComponent = () => {
      return (<Homepage cities={this.state.cities}/>)
    }
    // const cityComponent = () => {
    //   return (<City {...props}/>)
    // }

  

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={homepageComponent}/>
          <Route exact path="/cities/:id" component={City}/> 
          <Route exact path="/posts/:id" component={Post}/>
        </Switch>
      </div>
    </Router>
  );
}
}

export default App;
