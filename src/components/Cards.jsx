import React from 'react';
import Card from './Card';

export default ({cards}) => (


    <div>
    {cards.map(card => 
    <div><Card text={card.text} /></div>
    )}
   </div>

)