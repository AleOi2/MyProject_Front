import React, { useState } from 'react'
import { Button, ModalFooter } from 'react-bootstrap'

const Form = (props) =>{
    let {
        initialState,
        render,
        onAccept
    } = props;
    let [formState, setFormState] = useState(initialState);

    return(
        <>
            <div style={{
                position:'relative', width: '60%', 
                height: '60%',top:'50%', left:'50%', 
                transform:'translate(-50%,-50%)',  /* border:'2px solid blue', */
                display:'flex', flexDirection:'column',
                boxShadow:' 0 10px 100px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                border:'2px solid red'
            }}>
                { render(formState, setFormState, onAccept) }
                <div style={{display:'flex', justifyContent:'flex-end',
                    padding:'10px',backgroundColor:'black', position:'relative',
                    
                }}>
                    {
                        (onAccept) &&
                        <Button onClick={() =>{
                            onAccept(formState, setFormState);
                        }}>Clique Aqui</Button>
                    }            
                </div>
            </div>

        </>
    )    
} 

export default Form;