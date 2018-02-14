import React from 'react'
import axios from 'axios'
// import Redirect from 'react-router-dom/Redirect';

const  NewPost =(props) => {

  const handleSubmit = (event) =>{
        event.preventDefault()
        props.newPosts()
        
    }



        return (

            <div>
                < form onSubmit={handleSubmit} >
                    <input
                        name="title" placeholder="title" type="text" onChange={props.handleChange}
                    />
                    <textarea
                        name="description" placeholder="description" type="text" onChange={props.handleChange}
                        row="10" />

                    <input type="submit" value="submit" />

                </form>

            </div>

        )

    }


export default NewPost