import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import BattleCardsMenu from './components/BattleCards'

function App() {
  return (
    <Provider store={store}>
    <div>
      <BattleCardsMenu />
    </div>
    </Provider>
  );
}

export default App;