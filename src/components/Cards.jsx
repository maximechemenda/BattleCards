import React from 'react';
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
                    //onClick={onCardClick.bind(null, cardId)} //activeCardEdit
                    editing={editing}
                    //onEdit={onEdit.bind(null, id)}    //editCard
                    //onEdit={onEdit} //editCard
                    cardId = {cardId}
                    battleCardId = {battleCardId}
                    //onDelete = {onDelete.bind(null,id)} />
                    onDelete = {onDelete}
                    section = {section} />
                     
                
        </div> //</CardType> --was going above
    )}</div>
)

/*
<Card onClick={onCardClick.bind(null, id)}>
</Card> */