import React from 'react';
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

const EditPost = (props) => {
    return (

        <div>
            <CardWrapper>
            <Container onSubmit={props.handleEdit} >
            <CardBody>
            <div>
                <CardInput
                    onChange={props.handleEditChange} name="title" placeholder="title" type="text" value={props.post.title} 
                />
                </div>
                <div>
                <CardInput
                    onChange={props.handleEditChange} name="description" placeholder="description" type="text" value={props.post.description} 
                    row="10" />
</div>
                <CardButton type="submit" value="submit">Submit</CardButton>

            </CardBody>
            </Container>
</CardWrapper>
        </div>

    )

}


export default EditPost