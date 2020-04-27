/* import React from 'react';
import '../App.css';
import ObjectionsBattleCard from './ObjectionsBattleCard';

export default ({activateCardEdit, editCard, battleCards, addCard, triggerAddBattleCardState, 
                onDelete, triggerAddCardState, deleteBattleCard, addBattleCard}) => (
    <div>
        <div>
            <h2 className="leftMenu">Objections</h2>
        </div>

        
        <button onClick={addBattleCard.bind(null, 'objections')}>+</button>
        {battleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>

            <ObjectionsBattleCard 
                activateCardEdit={activateCardEdit}
                editCard={editCard}
                section = {'objections'}
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
 */