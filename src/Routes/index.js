import React from 'react'
import { BrowserRouter as Router,
    Switch, Route, Redirect  } from 'react-router-dom'
import App  from './App'
import { Login } from './Login'
import WebFont from 'webfontloader';
import { Dummy2 } from './Dummy/dummy2'


WebFont.load({
  google: {
    families: ['Trade Winds', 'cursive',
        'Roboto Mono', 'monospace',
        'Lobster', 'cursive',
        'Great Vibes', 'cursive'
    ],

  }
});

export class Routes extends React.Component{
    constructor(props){
        super(props);
        this.logged = true;
    }
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/app" component={ App }   />
                    <Route path="/teste" component={ Dummy2 }   />
                    {/* <Route path="/app" render = {
                        () =>{
                            return (this.logged)?<App entry={this.logged}/>:<Redirect to="/"/>
                        }
                    }/> */}
                    <Route path="/" component={ Login } />
                </Switch>
            </Router>
        )
    }
}