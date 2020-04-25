import React from 'react';
import BattleCard from './BattleCard';

export default ({battleCards, cards, triggerAddBattleCardState, activateCardEdit, editCard,
                onDelete, isEmptyAddButtonState, triggerAddCardState, isAddCardState, addBasicCard,
                addWarningCard, addDealOfferCard, addCommonAnswerCard, deleteBattleCard}) => (
    <div>
        {battleCards.map(({id}) => 
        <div key={id}>
                <BattleCard 
                    onClick={triggerAddBattleCardState}
                    cards={cards}
                    onCardClick={activateCardEdit}
                    onEdit={editCard}
                    onDelete={onDelete}
                    isEmptyAddButtonState={isEmptyAddButtonState}
                    triggerAddCardState={triggerAddCardState}
                    isAddCardState={isAddCardState}
                    addBasicCard={addBasicCard}
                    addWarningCard={addWarningCard}
                    addDealOfferCard={addDealOfferCard}
                    addCommonAnswerCard={addCommonAnswerCard}
                    deleteBattleCard={deleteBattleCard}
                    id={id}/>
        </div> 
    )}</div>
)
