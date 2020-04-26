import React from 'react';

export default ({addBasicCard, addWarningCard, addDealOfferCard, addCommonAnswerCard,battleCardId, addCard}) => (
    <div>
        <button onClick = {addCard.bind(null,battleCardId, 'basic')}>Basic Card</button>
        <button onClick = {addCard.bind(null,battleCardId, 'warning')}>Warning Card</button>
        <button onClick = {addCard.bind(null,battleCardId, 'dealOffer')}>Deal Offer Card</button>
        <button onClick = {addCard.bind(null,battleCardId, 'commonAnswer')}>Common Answer Card</button>
    </div>
)
