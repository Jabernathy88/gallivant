import React from 'react';

const EditPost = (props) => {
    return (

        <div>
            < form onSubmit={props.handleEdit} >
                <input
                    onChange={props.handleEditChange} name="title" placeholder="title" type="text" value={props.post.title} 
                />
                <textarea
                    onChange={props.handleEditChange} name="description" placeholder="description" type="text" value={props.post.description} 
                    row="10" />

                <input type="submit" value="submit" />

            </form>

        </div>

    )

}


export default EditPost