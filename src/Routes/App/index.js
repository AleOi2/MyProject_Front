import React from 'react'
import { BrowserRouter as Router,
    Switch, Route  } from 'react-router-dom'


export default class App extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
    }

    componentDidMount(){
        let {history} = this.props;
        console.log(history)
        // history.push('/login')   
    }

    render(){
        return(
            <div>
                Este é o meu app
            </div>
    )}

}