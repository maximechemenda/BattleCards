import React from 'react';
import { editCard } from '../redux/actions'
import Edit from './Edit'

export default ({editing, cardId, value, editCard, battleCardId}) => {
  if(editing) {
    return <Edit cardId={cardId} value={value} editCard={editCard} battleCardId={battleCardId}/>
  }

  return <span>{value}</span>;

} 

/* const Edit = ({value, cardId, editCard}) => {

  return 
  <input
    type="text"
    autoFocus={true}
    defaultValue={value}
    onBlur={(e) => editCard(e.target.value, cardId)}
    //onKeyPress={checkEnter}
    /> 
} */

/* <input
    type="text"
    autoFocus={true}
    defaultValue={value}
    onBlur={finishEdit}
    onKeyPress={checkEnter}
    /> */

/* checkEnter = (e) => {
  if(e.key === 'Enter') {
    finishEdit(e);
  }
}
    
  finishEdit = (e) => {
    const value = e.target.value;

    if(editCard) {
      editCard(value, cardId);
    }
  } */