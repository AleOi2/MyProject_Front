import React from 'react'
import { Button } from 'react-bootstrap'
import Form from '../../Components/Form'

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.options = {
            render: (formState, formSetState, Accept, others) => {
                return (
                    <div style={{
                        width: '100%', height: '100%', zIndex: '-1',
                        background: '#3c5178', opacity: '0.9',
                        backgroundImage: 'linear-gradient(to right, #152545, #516b9c)'
                    }}>
                        <div style={{
                            position: 'relative', width: '60%',
                            height: '40%', top: '50%', left: '50%',
                            transform: 'translate(-50%,-50%)',  /* border:'2px solid blue', */
                            display: 'flex', flexDirection: 'column',
                            boxShadow: ' 0 10px 100px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                        }}>
                            <div style={{
                                fontSize: '30pt', textAlign: 'center', background: 'black',
                                color: 'white', fontFamily: 'Roboto Mono', padding: '20px'
                            }}>
                                Welcome to my project
                            </div>
                            <div style={{ display: 'flex', height: '100%' }}>
                                <div style={{
                                    color: 'white', /* border:'2px solid red', */ width: '100%',
                                    backgroundImage: 'linear-gradient(to right, #152545, #516b9c)',
                                    width: '50%'
                                }}>
                                    <div style={{
                                        position: 'relative', left: '10%', top: '20%', width: '90%', fontSize: '30pt',
                                        fontFamily: 'Great Vibes'/* , border:'2px solid green' */, display: 'flex', alignItems: 'center'
                                    }}>
                                        Alexandre Jun
                                </div>
                                </div>

                                <div style={{
                                    color: '#11244a'/* , border:'2px solid orange' */, width: '100%',
                                    backgroundColor: 'white', flex: 1
                                }}>
                                    <div style={{/* border:'2px solid blue', */ position: 'relative', top: '20%',
                                        textAlign: 'center', fontSize: '30px'
                                    }}>
                                        Let's enjoy
                                </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', top: '30%' }}>
                                        <div style={{
                                            display: 'flex', /* border:'2px solid blue',  */
                                            alignContent: 'center', justifyContent: 'center', width: '100%',
                                            paddingLeft: '40px', paddingBottom: '20px', boxSizing: 'border-box'
                                        }}>
                                            <div style={{ flex: 1, fontSize: '20px', paddingLeft: '10%' }}>
                                                Login:
                                        </div>
                                            <div style={{ flex: 2 }}>
                                                <input type="text"
                                                    value={formState.login}
                                                    onChange={(event) => {
                                                        formSetState({ ...formState, login: event.target.value })
                                                    }}
                                                    style={{
                                                        border: '2px solid #172c57', height: '20px'
                                                    }}></input>
                                            </div>
                                        </div>
                                        <div style={{
                                            display: 'flex', /* border:'2px solid green', */
                                            alignContent: 'center', justifyContent: 'center', width: '100%',
                                            paddingLeft: '40px', boxSizing: 'border-box'
                                        }}>
                                            <div style={{ flex: 1, fontSize: '20px', paddingLeft: '10%' }}>
                                                Password:
                                        </div>
                                            <div style={{ flex: 2 }}>
                                                <input type="text"
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
                                        <div>
                                            <Button style={{ margin: '20px' }} onClick={() => {
                                                Accept(formState);
                                            }}>Entrar</Button>
                                        </div>
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
            <Form render={render}
                onAccept={(formState, setFormState, /* others */) => {
                    console.log(formState)
                    setFormState({ ...formState, password: '', user: '' })
                }}
                initialState={{ login: '', password: '' }}
            ></Form>
        )

    }

}