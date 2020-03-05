import React from 'react';
import { Button } from 'react-bootstrap';

const ContainerStyle = {
    margin: 0,
    padding: 0,
    border: "2px solid red",
    width: "300px",
    heigth: "300px"
}

const ContentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
}
export const SquareBox = () => {

    let Primeiro = () => {
        console.log("Primeiro Click teste")
    }
    
    return(
        <div className = "container" style = { ContainerStyle }>
            <div className = "header">
                Login
            </div>
            <div className = "content" style = { ContentStyle }>
                <input placeholder = "Username" style = { ContainerStyle } type = "text"></input>
                <input placeholder = "Password" style = { ContainerStyle } type = "text"></input>                    

            </div>
            <div className = "Footer">
                <Button onClick = { Primeiro }>Submit</Button>
            </div>
        </div>
    )
}
