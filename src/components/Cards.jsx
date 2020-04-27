/* import React from 'react';
import CardType from './CardType';
import '../App.css';

export default ({activateCardEdit, editCard, cards, battleCardId, section, onDelete}) => (
    <div>
        {cards.map(({cardId,editing,text,type}) => 
        <div key={cardId}>
                <CardType className="cards"
                    type={type} 
                    text={text} 
                    activateCardEdit={activateCardEdit}
                    editCard={editCard}
                    editing={editing}
                   
                    cardId = {cardId}
                    battleCardId = {battleCardId}
                    onDelete = {onDelete}
                    section = {section} />
                     
                
        </div> 
    )}</div>
)
 */