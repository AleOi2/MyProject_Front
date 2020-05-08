// Menu.js
import React from 'react';
import styled from 'styled-components';
import { safeAccess, elvisOperator } from '../../utils/utils';

const theme = {
    primaryDark: '#0D0C1D',
    primaryLight: 'lightgray',
    primaryHover: '#343078',
    mobile: '576px',
}

const StyledMenu = styled.nav`

    box-sizing:border-box;

    z-index: ${(props) => {
        let zIndex = safeAccess(props, ['styles', 'StyledMenu', 'zIndex'], undefined);
        return elvisOperator(zIndex, zIndex, '100')
    }};

    display: ${(props) => {
        let display = safeAccess(props, ['styles', 'StyledMenu', 'display'], undefined);
        return elvisOperator(display, display, 'flex')
    }};

    flex-direction: ${(props) => {
        let flexDirection = safeAccess(props, ['styles', 'StyledMenu', 'flexDirection'], undefined);
        return elvisOperator(flexDirection, flexDirection, 'column')
    }};

    justify-content: ${(props) => {
        let justifyContent = safeAccess(props, ['styles', 'StyledMenu', 'justifyContent'], undefined);
        return elvisOperator(justifyContent, justifyContent, 'center')
    }};

    height: ${(props) => {
        let height = safeAccess(props, ['styles', 'StyledMenu', 'height'], undefined);
        return elvisOperator(height, height, '100%')
    }};

    text-align: ${(props) => {
        let textAlign = safeAccess(props, ['styles', 'StyledMenu', 'textAlign'], undefined);
        return elvisOperator(textAlign, textAlign, 'left')
    }};

    padding: ${(props) => {
        let padding = safeAccess(props, ['styles', 'StyledMenu', 'padding'], undefined);
        return elvisOperator(padding, padding, '2rem')
    }};

    position: ${(props) => {
        let position = safeAccess(props, ['styles', 'StyledMenu', 'position'], undefined);
        return elvisOperator(position, position, 'absolute')
    }};


    top: ${(props) => {
        let top = safeAccess(props, ['styles', 'StyledMenu', 'top'], undefined);
        return elvisOperator(top, top, '0')
    }};


    left: ${(props) => {
        let left = safeAccess(props, ['styles', 'StyledMenu', 'left'], undefined);
        return elvisOperator(left, left, '0')
    }};

    transition: ${(props) => {
        let transition = safeAccess(props, ['styles', 'StyledMenu', 'transition'], undefined);
        return elvisOperator(transition, transition, 'transform 0.3s ease-in-out')
    }};

    background: ${({ theme }) => theme.primaryLight};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};


    /* 
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        text-align: left;
        padding: 2rem;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.3s ease-in-out; 
    */

  
    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
    }

    a {
        position:relative;
        top:-200px;
        font-size: 1.3rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.primaryDark};
        text-decoration: none;
        transition: color 0.3s linear;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            /* font-size: 1.5rem; */
            text-align: center;
        }

        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
`;

const Menu = (props) => {   
    let {
        open, menuRender
    } = props;
    return (
        <StyledMenu open={open} theme={theme}>
            {
                (menuRender) &&
                menuRender.map((element, index) => {
                    return (
                        <a key={element.label} href="/" style={{borderBottom:'1px solid red'}}>
                            <span role="img" aria-label={element.label.toLowerCase()}>></span>
                            {element.label}
                        </a>
                    )
                })
            }
        </StyledMenu>
    )
}

export default Menu;