import React from 'react';
import Editable from './Editable';
import '../App.css';

export default ({editing, text, deleteCard, cardId, cardType, activateCardEdit, editCard, battleCardId, section}) => {




    if (cardType === 'text') {
         return <div>
        
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>x</button>
                        <h2>Text</h2>

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
    if (cardType === 'offerDeal') {
        return  <div>
        
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>x</button>
                        <h2>Offer a Deal</h2>
                        
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
        
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>x</button>
                        <h2>Common Answer</h2>
                        
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
    if (cardType === 'goodQuestion') {
        return  <div>
        
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>x</button>
                        <h2>Good Counter question</h2>
                        
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
    if (cardType === 'badQuestion') {
        return  <div>
        
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>x</button>
                        <h2>Bad Counter question</h2>
                        
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
    if (cardType === 'checklist') {
        return  <div>
        
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>x</button>
                        <h2>Checklist</h2>
                        
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
                        <h2>Warning</h2>
                        
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
    if (cardType === 'battlePitch') {
        return  <div>
        
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>x</button>
                        <h2>Quick Battle Pitch</h2>
                        
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
    if (cardType === 'goodPhrasing') {
        return  <div>
        
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>x</button>
                        <h2>Good Phrasing</h2>
                        
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
