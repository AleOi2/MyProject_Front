import React from 'react'
import styled from 'styled-components'
import { elvisOperator } from '../../utils/utils' 

export const Panel = (props) =>{
    
    return(
        <Template Style={props}>
            { props.children }
        </Template>
    )

}

let Template = styled.div`
    width: ${(props) => elvisOperator(props.width ,props.width, '100%')};
    min-height: ${(props) => elvisOperator(props.height ,props.minHeight, '100%')};
    z-index: ${(props) => elvisOperator(props.zIndex ,props.zIndex, '-1')};
    background: ${(props) => elvisOperator(props.background ,props.background, '#3c5178')};;
    opacity: ${(props) => elvisOperator(props.opacity ,props.opacity, '0.9')};;
    background-image: ${(props) => elvisOperator(props.backgroundImage ,props.backgroundImage, 'linear-gradient(to right, #152545, #516b9c)')};;
    border: ${(props) => elvisOperator(props.border ,props.border, 'none')};
`