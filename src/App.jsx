import React from 'react';
import './App.css';
//import addCard from './components/addCard'
import Cards from './components/Cards'
import VisibilityFilter from './components/visibilityFilter'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div>
      <Cards />
    </div>
    </Provider>
  );
}

export default App;