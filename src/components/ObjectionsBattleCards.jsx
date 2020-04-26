import React from 'react';
import BattleCard from './BattleCard';

export default ({battleCards, addCard, triggerAddBattleCardState, activateCardEdit, editCard,
                onDelete, triggerAddCardState, deleteBattleCard, addObjectionBattleCard}) => (
    <div>
        <button onClick={addObjectionBattleCard}>+</button>
        {battleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <BattleCard 
                    onClick={triggerAddBattleCardState}
                    cards={battleCard.cards}
                    addCard={addCard}
                    //onCardClick={activateCardEdit}
                    //onEdit={editCard}
                    onDelete={onDelete}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    triggerAddCardState={triggerAddCardState}
                    isAddCardState={battleCard.isAddCardState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}/>
        </div> 
    )}</div>
)
