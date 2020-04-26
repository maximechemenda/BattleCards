import React from 'react';
import '../App.css';


const AddCardButton = props => {
    return <button className="addCardButton" onClick={props.addCard.bind(null,props.battleCardId)}>+</button>
  }

  export default AddCardButton

