import React from 'react';
import Card from './Card';

export default ({cards,onDelete=() => {}}) => (


    <div>
        {cards.map(({id,text}) => 
        <div key={id}>
            <Card 
                text={text} 
                onDelete={onDelete.bind(null,id)} />
        </div>
        )}
   </div>

)