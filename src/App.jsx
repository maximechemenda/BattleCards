import React, { Component } from 'react';
import './App.css';
//import {Provider} from 'react-redux'
//import store from './redux/store'
import BattleCardsMenu from './components/BattleCards'
import { readItems, updateCardHeight, clearSelectedBattleCards, getMongoState } from './redux/actions'
import { connect } from 'react-redux'
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    console.log(this)
    console.log(this.props)

  var url = window.location.href;
  var arrayUrl = url.split('companyIdentifier=')
  var companyIdentifier = arrayUrl[1]

  console.log(companyIdentifier)

  axios.get(`./api/battleCards/${companyIdentifier}`)
    .then(response => { 
      this.props.getMongoState(response.data.data)
  })
  .catch(e => console.log("fetching failed , Error ", e));
  } 

  componentDidUpdate() {

    var url = window.location.href;
    var arrayUrl = url.split('companyIdentifier=')
    var companyIdentifier = arrayUrl[1]

   axios.put(`/api/battleCards/${companyIdentifier}`,this.props.data)
  .then((response)=> {console.log('updated all of this');})
  .catch(e => console.log('Updation failed, Error ',e));
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

  console.log(state.data)

  console.log('mashallah')

  /* var url = window.location.href;
  var arrayUrl = url.split('companyIdentifier=')
  var companyIdentifier = arrayUrl[1]

  axios.put(`/api/battleCards/${companyIdentifier}`,state.data)
  .then((response)=> {console.log('updated all of this');})
  .catch(e => console.log('Updation failed, Error ',e)); */

  return ({
      data: state.data
  })
}

export default connect(mapState, { readItems, updateCardHeight, clearSelectedBattleCards, getMongoState })(App)
