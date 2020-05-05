/* import {createStore, combineReducers} from 'redux'
import {battleCards} from './reducers'




export default createStore(combineReducers({battleCards}), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) */



import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import {battleCards} from './reducers'


const middlewares = [thunk];

const store = createStore(battleCards, composeWithDevTools(applyMiddleware(...middlewares)));
export default store; 