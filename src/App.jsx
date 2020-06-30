import React, { Component } from 'react';
import './App.css';
//import {Provider} from 'react-redux'
//import store from './redux/store'
import BattleCardsMenu from './components/BattleCards'
import { readItems, updateCardHeight, clearSelectedBattleCards } from './redux/actions'
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
        console.log(response)
        console.log(response.data)
        console.log('data equal to 1')
        //axios.post('/api/battleCards',{ data: {...this.props.data}})
        //.then(this.props.readItems())
        //.catch(e => console.log("Addition failed , Error ", e));
      } else {
        console.log('didnt enter it')
        this.props.readItems();
      }
  })
  .catch(e => console.log("fetching failed , Error ", e));



     /* axios.get('./api/battleCards')
    .then(response => { 
      if (response.data.length === 0) {
        console.log('data equal to 1')
        axios.post('/api/battleCards',{...this.props.data})
        .then(this.props.readItems())
        .catch(e => console.log("Addition failed , Error ", e));
      } else {
        console.log('didnt enter it')
        this.props.readItems();
      }
  })
  .catch(e => console.log("fetching failed , Error ", e)); */
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

  console.log('mashallah')

  //axios.put(`/api/battleCards/${state.data.id}`,state.data)
  axios.put(`/api/battleCards`,state.data)
  .then((response)=> {console.log('updated all of this');})
  .catch(e => console.log('Updation failed, Error ',e));

  return ({
      data: state.data
  })
}

export default connect(mapState, { readItems, updateCardHeight, clearSelectedBattleCards })(App)
