import React from 'react'
import { BrowserRouter as Router,
    Switch, Route  } from 'react-router-dom'
import App  from './App'
import { Login } from './Login'
import WebFont from 'webfontloader';

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
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/app" component={ App }   />
                    <Route path="/" component={ Login } />
                </Switch>
            </Router>
        )
    }
}