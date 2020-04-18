import React, { useState } from 'react'
import { Button, ModalFooter } from 'react-bootstrap'
import styled from 'styled-components';
import { safeAccess } from '../../utils/utils'


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

const Square = styled.div`
    position:${props => (props.position)?props.position:'relative' };
    width: ${props => (props.position)?props.width:'50%'}; 
    height: ${props => (props.position)?props.height:'50%'}; 
    min-width:60%;
    top:${props => (props.position)?props.top:'35%'}; 
    left:${props => (props.position)?props.left:'50%'}; 
    transform:translate(-50%,-50%);  /* border:'2px solid blue', */
    display:flex;
    flex-direction:column;
    box-shadow: 0 10px 100px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border:${props => (props.position)?props.top:''}
`

const BtnConteiner = styled.div`
    display:flex;
    justify-content:flex-end;
    padding:${props => (props.padding)?props.padding:'10px' };
    background-color:${props => (props.backgroundColor)?props.backgroundColor:'black' };
    position:relative
`

/* const CustomButton = styled.button`
    background: #3498db;
    width: 180px;
    padding: 4px 0;    
    position: absolute;
    border-radius: 3px;
    text-align: center;
  	text-transform: uppercase;
    user-select: none;

    :hover{
		cursor: pointer;
    };
    :after {
        display: block;
        position: absolute;
        width: 100%;
        height: 10%;
        border-radius: 50%;
        opacity: 0.4;
        bottom: -30px;
    }
` */
const CustomButton = styled.button`
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