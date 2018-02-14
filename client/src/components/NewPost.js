import React, { Component } from 'react'
import axios from 'axios'

const  NewPost =(props) => {



        return (

            <div>
                < form onSubmit={props.newPosts} >
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