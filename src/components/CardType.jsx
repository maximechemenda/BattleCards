import React from 'react';
import Editable from './Editable';
import '../App.css';
import Edit from './Edit'

export default ({editing, text, deleteCard, cardId, cardType, activateCardEdit, editCard, battleCardId}) => {
    if (cardType === 'basic') {
        return  <div>
        
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId)}>
                        <button className="deleteCardButton" onClick={() => deleteCard(battleCardId, cardId)}>x</button>
                        <h2>Basic Card</h2>
                        
                        <Editable
                            editing={editing}
                            value={text}
                            cardId={cardId}
                            editCard={editCard}
                        />    
                    </div> 
                    <br></br>
                </div>
    }
     if (cardType === 'warning') {
        return  <div>
        
                    <div className="cards" onClick={() => activateCardEdit(cardId)}>
                        <button className="deleteCardButton" onClick={() => deleteCard(cardId)}>x</button>
                        <h2>Warning Card</h2>
                        
                        <Editable
                            editing={editing}
                            value={text}
                            cardId={cardId}
                            editCard={editCard}
                        />    
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'dealOffer') {
        return  <div>
        
                    <div className="cards" onClick={() => activateCardEdit(cardId)}>
                        <button className="deleteCardButton" onClick={() => deleteCard(cardId)}>x</button>
                        <h2>Deal Offer Card</h2>
                        
                        <Editable
                            editing={editing}
                            value={text}
                            cardId={cardId}
                            editCard={editCard}
                        />    
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'commonAnswer') {
        return  <div>
        
                    <div className="cards" onClick={() => activateCardEdit(cardId)}>
                        <button className="deleteCardButton" onClick={() => deleteCard(cardId)}>x</button>
                        <h2>Common Answer Card</h2>
                        
                        <Editable
                            editing={editing}
                            value={text}
                            cardId={cardId}
                            editCard={editCard}
                        />    
                    </div> 
                    <br></br>
                </div>
    }
}
