import React from 'react'
import { Card } from './Cards'
//import { renderCard } from './inputFile'
import styled from 'styled-components'
import { safeAccess } from '../../utils/utils'


const ListContainer = styled.div`
    display: flex; 
    justify-content:space-between;
    width: 90%;
    border: 2px solid blue;
    flex-wrap: wrap;
    background: black;
    z-index: 1;

`

export let CardComponent = (props) =>{
    const { 
        renderCard,
        externalData,
        onAccept
    } = props

    return(
        <ListContainer>
            {
                (renderCard) &&
                    renderCard.map((card, index) =>
                        (
                            <Card 
                                key={index}
                                renderBody={ 
                                    safeAccess(card, ['render'], ()=>{ 
                                        return undefined
                                } ) } 
                                externalData={externalData}
                                onAccept={onAccept}   
                                cardIndex = {index}
                            >
                                {card.title}
                            </Card>
                        )
                    )
            }
            {
                (!renderCard) &&
                    <div style={{color:'red'}}>Adicione um render(DOM) e um title(opcional)</div>
            }
        </ListContainer>


    )



}


