import React from 'react';
import Editable from './Editable';
import '../App.css';

export default ({editing, text, deleteCard, cardId, cardType, activateCardEdit, editCard, battleCardId, section}) => {
    if (cardType === 'basic') {
        return  <div>
        
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>x</button>
                        <h2>Basic Card</h2>
                        
                        <Editable
                            editing={editing}
                            value={text}
                            cardId={cardId}
                            editCard={editCard}
                            battleCardId={battleCardId}
                            section={section}
                        />    
                    </div> 
                    <br></br>
                </div>
    }
     if (cardType === 'warning') {
        return  <div>
        
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>x</button>
                        <h2>Warning Card</h2>
                        
                        <Editable
                            editing={editing}
                            value={text}
                            cardId={cardId}
                            editCard={editCard}
                            battleCardId={battleCardId}
                            section={section}
                        />    
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'dealOffer') {
        return  <div>
        
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>x</button>
                        <h2>Deal Offer Card</h2>
                        
                        <Editable
                            editing={editing}
                            value={text}
                            cardId={cardId}
                            editCard={editCard}
                            battleCardId={battleCardId}
                            section={section}
                        />    
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'commonAnswer') {
        return  <div>
        
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>x</button>
                        <h2>Common Answer Card</h2>
                        
                        <Editable
                            editing={editing}
                            value={text}
                            cardId={cardId}
                            editCard={editCard}
                            battleCardId={battleCardId}
                            section={section}
                        />    
                    </div> 
                    <br></br>
                </div>
    }
}
