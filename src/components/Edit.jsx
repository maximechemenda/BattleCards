import React from 'react'

export default ({value, cardId, editCard}) => {

  return (
        <input 
            type="text" 
            autoFocus={true} 
            defaultValue={value} 
            onBlur={(e) => editCard(e.target.value, cardId)} 
        />
  )
}