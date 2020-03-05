import React from 'react'
import styled from 'styled-components';

const Panel = (props) =>{
    let {PanelStyle} = props;
    return(
        <Title style={PanelStyle}>
            {props.children}            
        </Title>
    )

}


export default Panel;

const Title = styled.div`
    width:100%;
    height:100%;
    z-index:-1; 
    background:#3c5178;
    opacity:0.9;
    background-image: linear-gradient(to right, #152545, #516b9c)`

