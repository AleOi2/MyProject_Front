import React from 'react'
import { BrowserRouter as Router,
    Switch, Route  } from 'react-router-dom'
import Panel from '../../Components/Panel';
import Form from '../../Components/Form';
    


export default class App extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
    }

    optionRender = (formState, setFormState, onAccept) => {
        return (
            <div>
                Vamos testar o componente option render
            </div>  
        )
    }
    componentDidMount(){
        let {history} = this.props;
        console.log(history)
        if(!this.props.entry) history.push('/login');
        // history.push('/login')   
    }

    render(){
        return(
            <Panel PanelStyle={{width:'100%', height:'100%', zIndex:'-1', 
                background:'#3c5178', opacity:'0.9', 
                backgroundImage: 'linear-gradient(to right, #152545, #516b9c)'
            }}> 
                <Form render={this.optionRender}>
                </Form>
            </Panel>
                )}

}