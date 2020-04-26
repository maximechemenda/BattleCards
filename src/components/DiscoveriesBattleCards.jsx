import React from 'react';
import BattleCard from './BattleCard';

export default ({activateCardEdit, editCard, battleCards, addCard, triggerAddBattleCardState, 
                onDelete, triggerAddCardState, deleteBattleCard, addBattleCard}) => (
    <div>
        <button onClick={addBattleCard.bind(null, 'discoveries')}>+</button>
        {battleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <BattleCard 
                    activateCardEdit={activateCardEdit}
                    editCard={editCard}
                    section = {'discoveries'}
                    onClick={triggerAddBattleCardState}
                    cards={battleCard.cards}
                    addCard={addCard}
                    onDelete={onDelete}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    triggerAddCardState={triggerAddCardState}
                    isAddCardState={battleCard.isAddCardState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}/>
        </div> 
    )}</div>
)
