import React from 'react';
import Card from './Card';
import Editable from './Editable';


export default ({
    cards,
    onCardClick=() => {}, onEdit=() => {}, onDelete=() => {}
  }) => (
    <div>
        {cards.map(({id,editing,text}) => 
        <div key={id}>
            <Card style={{borderStyle: 'ridge', borderWidth: '10px 10px 10px 10px'}} onClick={onCardClick.bind(null, id)}> 
                <Editable
                    editing={editing}
                    value={text}
                    onEdit={onEdit.bind(null, id)} />
                <button onClick={onDelete.bind(null, id)}>x</button>
            </Card>
        </div>
    )}</div>

)