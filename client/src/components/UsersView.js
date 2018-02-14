import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'




class UsersView extends Component {
    state = {
        redirect: false,
    }

    handleLogin = (userId)=>{
        this.props.loginUser(userId)
        this.setState({redirect: true})

    }
    render(){
    
        return(
            this.state.redirect ? <Redirect to='/' /> :
        <div>
            {
                this.props.users.map((user)=>{
                    return(
                    <div>
                    <div>
                        <h2>{user.name}</h2>
                        <div>
                            <img width="200" src={user.photo_url} alt={user.name}/>
                        </div>
                    </div>
                    <a href={`/users/${user.id}`}>to user posts</a>
                    <button onClick={()=>this.handleLogin(user.id)}>Login</button>
                    </div>
                    )
                })
            }
        </div>
        )
    }


}


export default UsersView