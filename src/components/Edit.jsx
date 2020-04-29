import React from 'react'

export default ({value, cardId, editCard, battleCardId}) => {
  return (
        <input 
            type="text" 
            autoFocus={true} 
            defaultValue={value} 
            onBlur={(e) => editCard(e.target.value, battleCardId, cardId)} 
        />
  )
}