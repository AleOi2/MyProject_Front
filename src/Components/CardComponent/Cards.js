import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 4px solid black;
    width: 300px;
    height: 400px;
    margin: 10px;
    position: relative;
    /* background: #375c7bcc; */

    background: red;
    z-index:2;
    overflow: hidden;

    :before{
        content: '';
        top:2px;
        left:2px;
        bottom:2px;
        right:2px;
        position: absolute;
        border: 2px solid orange;
        transform: skew(2deg,2deg);
        background: white;
        z-index: -1;
    }


`

const PosBtn = styled.div`
    position:absolute;
    bottom:50px;
    left:50%;
    transform: translate(-50%,0);

`

const CustomBtn = styled.button`
    visibility: hidden; 
    height:40px;
    width:80px;
    border-radius:3px;
    color: red;
    background: blue;


    ${Container}:hover & {           
        cursor: pointer;
        text-shadow: 25px 25px 25px rbga(0,0,0,0.5);  
        visibility: visible;
        transition: 0.5s;
        transform: scale(1.5) translateY(-20px);      
    }


`

const CardTitle = styled.div`
    display:flex;
    justify-content:center;
    padding: 20px;
`

export const Card = (props) => {
    const [clicked, setClicked] = useState(0);
    const {
        renderBody,
        externalData,
        onAccept,
        cardIndex
    } = props

    return (
        <Container>
            <CardTitle>
                {props.children}
            </CardTitle>
            {renderBody()}
            {
                (onAccept) && <PosBtn>
                    <CustomBtn onClick={() => {
                        onAccept(externalData, clicked, setClicked, cardIndex);
                    }}> Saiba mais </CustomBtn>
                </PosBtn>

            }            
        </Container>
    )
}