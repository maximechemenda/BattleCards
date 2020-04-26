import React from 'react';
import CardType from './CardType';
import '../App.css';

export default ({
    cards, battleCardId,
    onCardClick=() => {}, onEdit=() => {}, onDelete=() => {}
  }) => (
    <div>
        {cards.map(({cardId,editing,text,type}) => 
        <div key={cardId}>
                <CardType className="cards"
                    type={type} 
                    text={text} 
                    onClick={onCardClick.bind(null, cardId)}
                    editing={editing}
                    //value={text}
                    //onEdit={onEdit.bind(null, id)}
                    onEdit={onEdit}
                    cardId = {cardId}
                    battleCardId = {battleCardId}
                    //onDelete = {onDelete.bind(null,id)} />
                    onDelete = {onDelete} />
                     
                
        </div> //</CardType> --was going above
    )}</div>
)

/*
<Card onClick={onCardClick.bind(null, id)}>
</Card> */