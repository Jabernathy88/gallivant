import React from 'react'
import axios from 'axios'
// import Redirect from 'react-router-dom/Redirect';
import styled from 'styled-components';
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardInput,
    CardIcon,
    CardOptionsNote,
    CardOptions,
    CardOptionsItem,
    CardButton,
    CardLink
} from "./StyledComponents/Card";

const Container = styled.form`
    display: flex;
    flex-direction: column;
    `




const NewPost = (props) => {

    const handleSubmit = (event) => {

        props.newPosts()

    }



    return (

        <div>
            <CardWrapper>
            <Container onSubmit={handleSubmit} >
            <CardBody>
                <div>
                <CardInput
                    name="title" placeholder="title" type="text" onChange={props.handleChange}
                />
                </div>
                <div>
                <CardInput
                    name="description" placeholder="description" type="text" onChange={props.handleChange}
                    row="10" />
</div>
                <CardButton type="submit" value="submit">Submit</CardButton>

            </CardBody>
</Container>
</CardWrapper>
        </div>

    )

}


export default NewPost