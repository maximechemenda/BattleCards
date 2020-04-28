import {createStore, combineReducers} from 'redux'
import {cards} from './reducers'

export default createStore(combineReducers({cards}), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())