import React from 'react';
import '../App.css';


const AddCardButton = props => {
    return <button className="addCardButton" onClick={props.addCard.bind(null,props.battleCardId, props.section)}>+</button>
  }

  export default AddCardButton

