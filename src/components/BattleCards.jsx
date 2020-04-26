import React from 'react';
import BattleCard from './BattleCard';

export default ({battleCards, cards, triggerAddBattleCardState, activateCardEdit, editCard,
                onDelete, isEmptyAddButtonState, triggerAddCardState, isAddCardState, addBasicCard,
                addWarningCard, addDealOfferCard, addCommonAnswerCard, deleteBattleCard}) => (
    <div>
        
        {battleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <BattleCard 
                    onClick={triggerAddBattleCardState}
                    cards={battleCard.cards}
                    onCardClick={activateCardEdit}
                    onEdit={editCard}
                    onDelete={onDelete}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    triggerAddCardState={triggerAddCardState}
                    isAddCardState={battleCard.isAddCardState}
                    addBasicCard={addBasicCard}
                    addWarningCard={addWarningCard}
                    addDealOfferCard={addDealOfferCard}
                    addCommonAnswerCard={addCommonAnswerCard}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}/>
        </div> 
    )}</div>
)
