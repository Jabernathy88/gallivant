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

const EditUser = (props) => {
    return (

        <div>
            <CardWrapper>
                
                    <Container onSubmit={props.handleEdit} >
                    <CardBody>
                        <div>
                            <CardInput
                                onChange={props.handleChange} name="name" placeholder="name" type="text" value={props.user.name}
                            />
                        </div>
                        <div>
                            <CardInput
                                onChange={props.handleChange} name="photo_url" placeholder="Photo" type="text" value={props.user.photo_url} />
                        </div>


                        <CardButton type="submit" value="submit">Submit</CardButton>
                        </CardBody>
                    </Container>
                
</CardWrapper>
        </div>

    )

}


export default EditUser