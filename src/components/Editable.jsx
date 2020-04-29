import React from 'react';

export default ({editing, cardId, value, editCard, battleCardId, section}) => {
  if(editing) {
    return <Edit cardId={cardId} value={value} editCard={editCard} battleCardId={battleCardId} section={section}/>
  }

  return <span>{value}</span>;

} 

const Edit = ({value, cardId, editCard, battleCardId, section}) => (

    <input 
        type="text" 
        autoFocus={true} 
        defaultValue={value} 
        onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
    />
)

