import React from 'react';
import CardType from './CardType';
import '../App.css';

export default ({
    cards,
    onCardClick=() => {}, onEdit=() => {}, onDelete=() => {}
  }) => (
    <div>
        {cards.map(({id,editing,text,type}) => 
        <div key={id}>
                <CardType className="cards"
                    type={type} 
                    text={text} 
                    onClick={onCardClick.bind(null, id)}
                    editing={editing}
                    //value={text}
                    //onEdit={onEdit.bind(null, id)}
                    onEdit={onEdit}
                    id = {id}
                    //onDelete = {onDelete.bind(null,id)} />
                    onDelete = {onDelete} />
                     
                
        </div> //</CardType> --was going above
    )}</div>
)

/*
<Card onClick={onCardClick.bind(null, id)}>
</Card> */