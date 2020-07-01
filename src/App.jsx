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

    /* axios.get('./api/battleCards')
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
        console.log(response.data.data.caseStudies.caseStudiesBattleCards[0].cards[0])
        //console.log(response)
        //this.props.readItems();
        this.props.getMongoState(response.data.data)
      }
  }) */

  var url = window.location.href;
  var arrayUrl = url.split('companyIdentifier=')
  var companyIdentifier = arrayUrl[1]

  console.log(companyIdentifier)

  axios.get('./api/battleCards?companyIdentifier='+ companyIdentifier)
    .then(response => { 
      this.props.getMongoState(response.data.data)
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

  console.log('mashallah')

  axios.put(`/api/battleCards`,state.data)
  .then((response)=> {console.log('updated all of this');})
  .catch(e => console.log('Updation failed, Error ',e));

  return ({
      data: state.data
  })
}

export default connect(mapState, { readItems, updateCardHeight, clearSelectedBattleCards, getMongoState })(App)
