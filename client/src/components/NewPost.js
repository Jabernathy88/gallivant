import React, { Component } from 'react'
import axios from 'axios'

class NewPost extends Component {

    render() {

        return (

            <div>
                < form onSubmit={this.props.newPosts} >
                    <input
                        name="title" placeholder="title" type="text" onChange={this.props.handleChange}
                    />
                    <textarea
                        name="description" placeholder="description" type="text" onChange={this.props.handleChange}
                        row="10" />

                    <input type="submit" value="submit" />

                </form>

            </div>

        )

    }

}

export default NewPost