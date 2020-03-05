import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Form = (props) =>{
    let {
        initialState,
        render,
        onAccept
    } = props;
    let [formState, setFormState] = useState(initialState);

    return(
        <>
            { render(formState, setFormState, onAccept) }
            {(onAccept) &&
                <Button onClick={() =>{
                    onAccept(formState, setFormState);
                }}>Clique Aqui</Button>
            }            
        </>
    )    
} 

export default Form;