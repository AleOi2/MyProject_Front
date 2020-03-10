import React from 'react'
import { Button } from 'react-bootstrap'
import App  from '../App'
import Form from '../../Components/Form'
import Panel from '../../Components/Panel';
import { BrowserRouter as Router,
    Switch, Route  } from 'react-router-dom'

export class Login extends React.Component{
    constructor(props){
        super(props);
        this.options={
            render: (formState, formSetState, Accept) =>{
                return(
                    <>
                        <div style={{fontSize:'30pt', textAlign:'center', background:'black', 
                            color:'white', fontFamily:'Roboto Mono', padding:'20px',
                        }}>
                            Welcome to my project
                        </div>
                        <div style={{display:'flex',height:'90%', position:'relative'}}>
                            <div style={{color:'white', /* border:'2px solid red', */ 
                                backgroundImage: 'linear-gradient(to right, #152545, #516b9c)',
                                width:'50%', minHeight:'200px'
                            }}>
                            <div style={{position:'relative', left:'10%', top:'20%', width:'90%', fontSize:'30pt', 
                                fontFamily:'Great Vibes'/* , border:'2px solid green' */, display:'flex', alignItems:'center'}}>
                                Alexandre Jun 
                            </div>
                        </div>


                        <div style={{color:'#11244a'/* , border:'2px solid orange' */, width:'100%',
                            backgroundColor:'white', flex:1
                        }}>
                            <div style={{/* border:'2px solid blue', */ position:'relative', top:'20%', 
                                textAlign:'center', fontSize:'30px'}}>
                                Let's enjoy
                            </div>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center', position:'relative', top:'30%'}}>
                                <div style = {{display:'flex', /* border:'2px solid blue',  */
                                    alignContent:'center', justifyContent:'center', width:'100%' ,
                                    paddingLeft:'40px', paddingBottom:'20px', boxSizing:'border-box',
                                    flexWrap:'wrap'
                                }}>
                                    <div style={{flex:1 , fontSize:'20px', paddingLeft:'10%'}}>
                                        Login:
                                    </div>
                                    <div style={{flex:2}}>
                                        <input type="text" 
                                            value={formState.login}
                                            onChange={(event) =>{
                                                formSetState({...formState, login:event.target.value})
                                            }}
                                            style={{border:'2px solid #172c57', height:'20px'
                                        }}></input>
                                    </div>
                                </div>
                                <div style = {{display:'flex', /* border:'2px solid green', */
                                    alignContent:'center', justifyContent:'center', width:'100%',
                                    paddingLeft:'40px', boxSizing:'border-box',
                                    flexWrap:'wrap'
                                }}>
                                    <div style={{flex:1 , fontSize:'20px', paddingLeft:'10%'}}>
                                        Password:
                                    </div>
                                    <div style={{flex:2}}>
                                        <input type="password" 
                                            style={{border:'2px solid #172c57',  
                                            height:'20px'}}
                                            value={formState.password}
                                            onChange={(event) =>{
                                                formSetState({...formState, password:event.target.value})
                                        }}></input>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>

                    </>
                )
            }
        }
    }

    render(){
        let { render } = this.options;
        let { history } = this.props;
        return(
            <Panel PanelStyle={{width:'100%', height:'100%', zIndex:'-1', 
                background:'#3c5178', opacity:'0.9', 
                backgroundImage: 'linear-gradient(to right, #152545, #516b9c)'
            }}>
                <Form render={render}
                    onAccept = { (formState, setFormState) =>{
                        console.log(formState)
                        setFormState({...formState, password:'', login:''})

                        history.push('/app');
                    }}
                    initialState={{login:'', password:''}}
                ></Form>
            </Panel>
        )

    }

}