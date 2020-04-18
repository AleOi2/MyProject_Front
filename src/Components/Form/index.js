import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Form = (props) =>{
    let {
        initialState,
        render,
        onAccept, 
        others
    } = props;
    let [formState, setFormState] = useState(initialState);

    return(
        <>
            { render(formState, setFormState, onAccept, others) }
        </>
    )    
} 

export default Form;