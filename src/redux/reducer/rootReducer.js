import { combineReducers } from 'redux'
import FirstReducer from '../reducer/FirstReducer';
import SecondReducer from '../reducer/SecondReducer';

let rootReducer =  combineReducers({
        FirstReducer,
        SecondReducer
    })


export default rootReducer;


