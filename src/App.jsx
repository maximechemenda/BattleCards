import React from 'react';
import './App.css';
//import addCard from './components/addCard'
import BattleCards from './components/BattleCards'
import VisibilityFilter from './components/visibilityFilter'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div>
      <BattleCards />
    </div>
    </Provider>
  );
}

export default App;