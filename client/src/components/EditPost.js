import React from 'react';

const EditPost = (props) => {
    return (

        <div>
            < form onSubmit={props.handleEdit} >
                <input
                    onChange={props.handleChange} name="title" placeholder="title" type="text" value={props.posts.title} 
                />
                <textarea
                    onChange={props.handleChange} name="description" placeholder="description" type="text" value={props.posts.description} 
                    row="10" />

                <input type="submit" value="submit" />

            </form>

        </div>

    )

}


export default EditPost