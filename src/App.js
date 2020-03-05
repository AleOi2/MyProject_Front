import React from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { SquareBox } from "./Components/SquareBox/squareBox1"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import FirstAction from './redux/actions/FirstAction'
import SecondAction from './redux/actions/SecondAction'

const containerStyle  = {
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    border: "3px solid yellow"
}

class App extends React.Component{
    constructor(props){
        super(props);
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log("Submit")
    }

    componentDidMount(){
        // axios.get("http://localhost:5000")
        //     .then((response) =>{
        //         console.log(response)
        //     })
    }


    render(){
        return(
            <div className = "container" style = { containerStyle }>
                <SquareBox></SquareBox>
                <Button onClick = {() =>{
                    console.log("Esse é o contador");
                    console.log(this.props.count);   
                    this.props.FirstAction()
                }}> Redux teste</Button>
                <Button onClick = {() =>{
                    console.log("Esse é o contador");
                    console.log(this.props.count2);   
                    this.props.SecondAction()
                }}> Second Redux teste</Button>
            </div>
        )
    }
}

const mapStateToProps = ({ FirstReducer, SecondReducer}) =>({
    count: FirstReducer,
    count2: SecondReducer
})

const mapDispatchToProps = (dispatch) =>{
    return(
        bindActionCreators({FirstAction, SecondAction}, dispatch)
    )

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
