import React from 'react';

export default ({battleCardId, addCard, section}) => (
    <div>
        <button onClick = {addCard.bind(null,battleCardId, 'basic', section)}>Basic Card</button>
        <button onClick = {addCard.bind(null,battleCardId, 'warning', section)}>Warning Card</button>
        <button onClick = {addCard.bind(null,battleCardId, 'dealOffer', section)}>Deal Offer Card</button>
        <button onClick = {addCard.bind(null,battleCardId, 'commonAnswer', section)}>Common Answer Card</button>
    </div>
)
