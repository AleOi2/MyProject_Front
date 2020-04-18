import React from 'react'
import { Button } from 'react-bootstrap'
import Form from '../../Components/Form'
import { Panel } from '../../Components/Panel/panel'
import Header from '../../Components/Header'
import styled from 'styled-components'
import Img from '../../img/tsubaki2.svg'

let style ={
    EnjoyContainer:{
        height:'20%'
    },
    InputsContainer:{
        height:'40%'
    },
    ButonsContainer:{
        height:'30%'
    }
}
export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.options = {
            render: (formState, formSetState, Accept, others) => {
                return (
                    <div style={{display:'flex', width:'100%', height:'700px',/*  border:'2px solid yellow', */ justifyContent:'center', alignItems:'center'}}>

                        <div style={{
                            position: 'relative', width: '40%',
                            height: '50%', /* border:'2px solid blue', */
                            display: 'flex', flexDirection: 'column',
                            boxShadow: ' 0 10px 100px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                        }}>
                            <div style={{
                                position:'relative',
                                fontSize: '30pt', textAlign: 'center', backgroundColor: 'black',
                                /* border:'2px solid magenta', */
                                color: 'white', fontFamily: 'Roboto Mono', padding: '20px'
                            }}>
                                Welcome to my project
                            </div>



                            <div style={{ position:'relative', display: 'flex', height: '100%', /* border:'2px solid violet', */flex:1, }}>
                                <MyName style={{
                                    color: 'white', /* border:'2px solid red', */
                                    backgroundImage: 'linear-gradient(to right, #152545, #516b9c)',
                                    width: '50%', position:'relative', 
                                }}>
                                    <div style={{
                                        position: 'relative', left: '10%', top: '40%', width: '90%', fontSize: '30pt',
                                        fontFamily: 'Great Vibes', /* border:'2px solid green', */ display: 'flex', alignItems: 'center',                                    
                                    }}>
                                        Alexandre Jun
                                    </div>
                                </MyName>





                                <div style={{
                                    color: '#11244a', /* border:'2px solid orange', */
                                    backgroundColor: 'white', flex: 1, 
                                }} className="RightContainer">
                                    <EnjoyStyle  className="EnjoyContainer">
                                        Let's enjoy
                                    </EnjoyStyle>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width:'100%', height:'100%',
                                    /* border:'2px solid red', */ height:style.InputsContainer.height, justifyContent:'center' }} className="InputsContainer">
                                        <div style={{
                                            display: 'flex', /* border:'2px solid blue',  */
                                            alignContent: 'center', justifyContent: 'center', width: '100%', flexWrap:'wrap',
                                            paddingBottom: '20px', boxSizing: 'border-box', position:'relative'
                                        }}>
                                            <div style={{ flex: 1, fontSize: '20px', paddingLeft: '2rem' }}>
                                                Login:
                                            </div>
                                            <div style={{ flex: 2 }}>
                                                <input type="text"
                                                    value={formState.user}
                                                    onChange={(event) => {
                                                        formSetState({ ...formState, user: event.target.value })
                                                    }}
                                                    style={{
                                                        border: '2px solid #172c57', height: '20px'
                                                    }}></input>
                                            </div>
                                        </div>
                                        <div style={{
                                            display: 'flex', /* border:'2px solid green', */
                                            alignContent: 'center', justifyContent: 'center', 
                                            width: '100%', flexWrap:'wrap',boxSizing: 'border-box'
                                        }}>
                                            <div style={{ flex: 1, fontSize: '20px', paddingLeft: '2rem' }}>
                                                Password:
                                            </div>
                                            <div style={{ flex: 2 }}>
                                                <input type="password"
                                                    style={{
                                                        border: '2px solid #172c57',
                                                        height: '20px'
                                                    }}
                                                    value={formState.password}
                                                    onChange={(event) => {
                                                        formSetState({ ...formState, password: event.target.value })
                                                    }}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ButonsContainer' style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                                        <Button style={{ margin: '20px' }} onClick={() => {
                                            Accept(formState, formSetState);
                                        }}>Entrar</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }

        }
    }

    render() {
        let { render } = this.options;
        return (
            <Panel>
                <Header 
                    navList={['Home', 'Fale Conosco']}
                    routerList= { [] }
                    loginCad={['Login', 'Cadastro']}
                    routerLoginCad = { [] }
                    Img={ Img }
                >

                </Header>
                <Form render={render}
                    onAccept={(formState, setFormState, /* others */) => {
                        console.log("Valor do formState");
                        console.log(formState)
                        setFormState({ ...formState, password: '', user: '' })
                    }}
                    initialState={{ user: '', password: '' }}
                ></Form>
            </Panel>
        )

    }

}

let MyName = styled.div`
    color: white; 
    /* border:2px solid red; */
    background-image: linear-gradient(to right, #152545, #516b9c);
    width: 50%; 
    position:relative;

    @media (max-width: 765px) {
        display: none;
        
    }
`

let EnjoyStyle = styled.div`
    position: relative;
    align-items:center;
    justify-content:center;
    font-size: 2rem;
    display:flex;

    @media (max-width: 1490px) {
        margin-bottom:2rem;
        color:red     
    }

`