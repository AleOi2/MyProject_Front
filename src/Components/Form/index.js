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
            {(onAccept) &&
                <Button onClick={() =>{
                    onAccept(formState, setFormState, others);
                }}>Clique Aqui</Button>
            }            
        </>
    )    
} 

export default Form;