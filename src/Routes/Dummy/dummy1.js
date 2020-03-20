import React from 'react'
import styled from 'styled-components'


const UlContainer = styled.ul`
    display:flex;
    flex-direction: column;
    list-style:none;
`;

const LiContainer = styled.li`
    font-size:15pt;
    transition: 0.5s;
    margin:10px;
    /* props.children[0].props.name */
    &:before{
        content: ${props => (props.theme)};
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        color:#fff;
        font-size:6em;
        font-weight:700;
        pointer-events:none;
        letter-spacing:20px;
        transition:0.5s;
        white-space:nowrap;
        opacity:0;
    }

    &:hover:before{
        opacity:1;
        transition: opacity 0.5s ease-in-out;
        letter-spacing: 20px;
    }

`;

const Name = styled.a`
    color: white;
    position: relative;
    display:inline-block;
    padding: 6px 15px;
    text-decoration: none;
    background:#2196f3;
    color:#fff;
    text-transform:uppercase;
    letter-spacing:2px;
    overflow:hidden;
    transition:0.5;
    z-index:1;

    ${UlContainer}:hover & {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    :hover{
        transform:scale(1.4);
        opacity:1!important;
        z-index:10;
        background:#ff3f81;
    }

    :before{
        content:'';
        top:0;
        left:-100px;
        width:100%;
        height:100%;
        position:absolute;
        background:linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
        transform: skewX(35deg);
        transition:0s;
    }

    :hover:before{
        left:calc(100% + 100px);
        transition:0.5s;
        transition-delay:0.2s;
    }
`;



export const HoverEffect = () => {


    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',background:'#0d0f1b', width: '100vw', height: '100vh'}}>
            <UlContainer >
                <LiContainer theme="'Home'"><Name > Home</Name> </LiContainer>
                <LiContainer theme="'About'"><Name > About</Name> </LiContainer>
                <LiContainer theme="'Services'"><Name > Services </Name></LiContainer>
                <LiContainer theme="'Portfolio'"><Name > Portfolio</Name> </LiContainer>
            </UlContainer>
        </div>
    )
    

}