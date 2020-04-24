import React from 'react';

export default ({addBasicCard, addWarningCard, addDealOfferCard, addCommonAnswerCard}) => (
    <div>
        <button onClick = {addBasicCard}>Basic Card</button>
        <button onClick = {addWarningCard}>Warning Card</button>
        <button onClick = {addDealOfferCard}>Deal Offer Card</button>
        <button onClick = {addCommonAnswerCard}>Common Answer Card</button>
    </div>
)
