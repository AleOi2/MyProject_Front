import React from 'react'
import styled from 'styled-components'
import { CardComponent } from '../../Components/CardComponent/CardComponent'
import Panel from '../../Components/Panel'

const AnimateCard = styled.div`
    padding: 20px;
    font-family: 'Bellota';

`

export let Dummy2 = () =>{

    const renderCard = [
        {
            render: () => {
                return(
                    <AnimateCard>   
                        Primeiro comentário que podemos fazer sobre essse components
                    </AnimateCard>
                )
    
            },
            title: 'Primeiro Comentário'
        } ,
        {
            render: () => {
                return(
                    <AnimateCard>   
                        Segundo comentário que podemos fazer sobre essse components
                    </AnimateCard>
                )
    
            },
            title: 'Segundo Comentário'
        } ,
        {
            render: () => {
                return(
                    <AnimateCard>   
                        Terceiro comentário que podemos fazer sobre essse components
                    </AnimateCard>
                )
    
            },
            title: 'Terceiro Comentário'
        } ,
        {
            render: () => {
                return(
                    <AnimateCard>   
                        Quarto comentário que podemos fazer sobre essse components
                    </AnimateCard>
                )
    
            },
            title: 'Quarto Comentário'
        } ,

    ]

    return(
        <Panel>
            <div style={{display:'flex', alignContent:'center', justifyContent: 'center', border:'2px solid pink', zIndex:-10}}>
                <CardComponent 
                    renderCard={renderCard}
                    onAccept = {
                        (externalData, clicked, setClicked, cardIndex) =>{
                            console.log("Esse é o meu card index");
                            console.log(cardIndex);
                        }
                    }    
                ></CardComponent>
            </div>
        </Panel>
    )



}


