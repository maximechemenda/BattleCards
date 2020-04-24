import React from 'react';
import Cards from './Cards';
import AddCardButton from './AddCardButton';
import NewCardMenu from './NewCardMenu';
import '../App.css';

export default ({cards, onCardClick, onEdit, onDelete, 
                isEmptyAddButtonState, triggerAddCardState, 
                isAddCardState, addBasicCard, addWarningCard,
                addDealOfferCard, addCommonAnswerCard}) => (

        <div className="battleCard">           
            <Cards
            cards={cards}
            onCardClick={onCardClick}
            onEdit={onEdit}
            onDelete={onDelete}
            />

            <div>
            {isEmptyAddButtonState && <AddCardButton addCard={triggerAddCardState} />}

            {isAddCardState && 
            <NewCardMenu 
                addBasicCard = {addBasicCard}
                addWarningCard = {addWarningCard}
                addDealOfferCard = {addDealOfferCard}
                addCommonAnswerCard = {addCommonAnswerCard}
            />}

            </div>
        </div> 
)