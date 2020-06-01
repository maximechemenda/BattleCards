import React, { Component } from 'react';
import './App.css';
//import {Provider} from 'react-redux'
//import store from './redux/store'
import BattleCardsMenu from './components/BattleCards'
import { readItems, updateCardHeight } from './redux/actions'
import { connect } from 'react-redux'
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('./api/battleCards')
    .then(response => {
      if (response.data.length === 0) {
        axios.post('/api/battleCards',{...this.props.battleCards})
        .then(this.props.readItems())
        .catch(e => console.log("Addition failed , Error ", e));
      } else {
        this.props.readItems();
      }
  })
  .catch(e => console.log("fetching failed , Error ", e));
  
  }

  render() {
    return (
      <div >
        <BattleCardsMenu />
      </div>
    );
  }
}


const mapState = (state) => {

  axios.put(`/api/battleCards/${state.battleCards.id}`,state.battleCards).then(({data})=>{
    console.log('');
  }).catch(e => console.log('Updation failed, Error ',e));

  return ({
      battleCards: state.battleCards
  })
}

export default connect(mapState, { readItems, updateCardHeight })(App)
