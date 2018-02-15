import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {Button, ButtonLogin} from './StyledComponents/Buttons'
import { ContainerThree, UserContainer, UserImgContainer } from './StyledComponents/Containers'




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
        <ContainerThree>
            {
                this.props.users.map((user)=>{
                    return(
                    <UserContainer>
        
                        <h2>{user.name}</h2>
                        <UserImgContainer>
                            <img src={user.photo_url} alt={user.name}/>
                        </UserImgContainer>
    
                    <Link to={`/users/${user.id}`}>to Profile</Link>
                    <ButtonLogin onClick={()=>this.handleLogin(user.id)}>Login</ButtonLogin>
                    </UserContainer>
                    )
                })
            }
        </ContainerThree>
        )
    }


}


export default UsersView