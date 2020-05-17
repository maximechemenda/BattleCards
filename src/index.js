import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css'

//element where we'll mount our react app
const rootElement = document.getElementById("root");

const Application = () => (
  // making our redux store available to nested components. 
  <Provider  store={store}>
    <App/>
  </Provider>
)

//we render our app over rootElement
ReactDOM.render(<Application/>,rootElement);













/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.css'



ReactDOM.render(
    <App />, 
    document.getElementById('root')    
); */


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/*serviceWorker.register(); UNCOMMENT THIS */