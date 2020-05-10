import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import BattleCardsMenu from './components/BattleCards'



class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div >
        <BattleCardsMenu />
      </div>
    );
  }
}


/* function App() {
  return (
    //<Provider store={store}>
    <div >
      <BattleCardsMenu />
    </div>
    //</Provider>
  );
} */

export default App;