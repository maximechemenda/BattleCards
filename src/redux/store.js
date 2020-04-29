import {createStore, combineReducers} from 'redux'
import {battleCards, sectionStates} from './reducers'

export default createStore(combineReducers({battleCards, sectionStates}), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())