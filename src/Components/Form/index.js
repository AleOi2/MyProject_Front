import React, { useState } from 'react'
//import { Button, ModalFooter } from 'react-bootstrap'
import styled  from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: blue;
  border: 2px solid blue;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

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
                minWidth:'80%',
                height: '80%',top:'50%', left:'50%', 
                transform:'translate(-50%,-50%)',  /* border:'2px solid blue', */
                display:'flex', flexDirection:'column',
                boxShadow:' 0 10px 100px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                // border:'2px solid red'
            }}>
                { (render)?render(formState, setFormState, onAccept):<div>You have to put render</div> }
                {
                    (onAccept) && <div style={{display:'flex', justifyContent:'flex-end',
                        padding:'10px',backgroundColor:'black', position:'relative',                        
                    }}>
                            
                        <Button onClick={() =>{
                            onAccept(formState, setFormState);
                        }}>Accept</Button>
                    </div>
                }            
            </div>

        </>
    )    
} 

export default Form;

