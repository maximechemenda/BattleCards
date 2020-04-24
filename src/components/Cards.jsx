import React from 'react';
import Card from './Card';
import Editable from './Editable';
import CardType from './CardType';

export default ({
    cards,
    onCardClick=() => {}, onEdit=() => {}, onDelete=() => {}
  }) => (
    <div>
        {cards.map(({id,editing,text,type}) => 
        <div key={id}>
                <CardType type={type} onClick={onCardClick.bind(null, id)}>
                    <Editable
                        editing={editing}
                        value={text}
                        onEdit={onEdit.bind(null, id)} />
                        <button onClick={onDelete.bind(null, id)}>x</button> 
                </CardType>
        </div>
    )}</div>
)

/*
<Card onClick={onCardClick.bind(null, id)}>
</Card> */