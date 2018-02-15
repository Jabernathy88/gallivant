import React from 'react';

const EditUser = (props) => {
    return (

        <div>
            < form onSubmit={props.handleEdit} >
                <input
                    onChange={props.handleChange} name="name" placeholder="name" type="text" value={props.user.name} 
                />
                <input
                    onChange={props.handleChange} name="photo_url" placeholder="Photo" type="text" value={props.user.photo_url}  />

                <input type="submit" value="submit" />

            </form>

        </div>

    )

}


export default EditUser