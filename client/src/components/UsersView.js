import React, {Component} from 'react'




class UsersView extends Component {

    
    render(){
        console.log(this.props.users)
        return(
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
                    </div>
                    )
                })
            }
        </div>
        )
    }


}


export default UsersView