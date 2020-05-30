import React, { Component } from 'react';
import './App.css';
//import {Provider} from 'react-redux'
//import store from './redux/store'
import BattleCardsMenu from './components/BattleCards'
import { readItems } from './redux/actions'
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



  //code for blue textareas
  var blueTextAreas = document.getElementsByClassName('blueCardText');

  for(var i=0; i<blueTextAreas.length; ++i) {
    var textarea = blueTextAreas[i]
    textarea.addEventListener('keydown', autosize);
              
  function autosize(){
    var el = this;
    setTimeout(function(){
      el.style.cssText = 'height:auto; padding:0';
      // for box-sizing other than "content-box" use:
      //el.style.cssText = '-moz-box-sizing:content-box';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    },0);
  }
  }

  }

  //allows the textareas to get bigger and bigger according to the size of the text
  componentDidUpdate() {

    //code for red textareas
    var redTextAreas = document.getElementsByClassName('redCardText');

    for(var i=0; i<redTextAreas.length; ++i) {
      var textarea = redTextAreas[i]
      textarea.addEventListener('keydown', autosize);
                
    function autosize(){
      var el = this;
      setTimeout(function(){
        el.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        //el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
      },0);
    }
    }

    //code for blue textareas
    var blueTextAreas = document.getElementsByClassName('blueCardText');

    for(var i=0; i<blueTextAreas.length; ++i) {
      var textarea = blueTextAreas[i]
      textarea.addEventListener('keydown', autosize);
                
    function autosize(){
      var el = this;
      setTimeout(function(){
        el.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        //el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
      },0);
    }
    }
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

export default connect(mapState, { readItems })(App)





/* function App() {
  return (
    //<Provider store={store}>
    <div >
      <BattleCardsMenu />
    </div>
    //</Provider>
  );
} */

//export default App;