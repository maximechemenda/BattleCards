import {createStore, combineReducers} from 'redux'
import {battleCards} from './reducers'

export default createStore(combineReducers({battleCards}), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())