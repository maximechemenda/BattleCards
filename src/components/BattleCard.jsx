import React from 'react';
import Cards from './Cards';
import AddCardButton from './AddCardButton';
import NewCardMenu from './NewCardMenu';
import '../App.css';

export default ({cards, onCardClick, onEdit, onDelete, 
                isEmptyAddButtonState, triggerAddCardState, 
                isAddCardState, addBasicCard, addWarningCard,
                addDealOfferCard, addCommonAnswerCard,
                deleteBattleCard, battleCardId //id refers to battleCardId
                }) => (

        <div className="battleCard">   
            <button onClick={deleteBattleCard.bind(null,battleCardId)}>Delete BattleCard</button>        
            <Cards
            cards={cards}
            onCardClick={onCardClick}
            onEdit={onEdit}
            onDelete={onDelete}
            battleCardId = {battleCardId}
            />

            <div>
            {isEmptyAddButtonState && <AddCardButton addCard={triggerAddCardState} battleCardId={battleCardId}/>}

            {isAddCardState && 
            <NewCardMenu 
                addBasicCard = {addBasicCard}
                addWarningCard = {addWarningCard}
                addDealOfferCard = {addDealOfferCard}
                addCommonAnswerCard = {addCommonAnswerCard}
                battleCardId={battleCardId} //id of battlecard
            />}

            </div>
        </div> 
)