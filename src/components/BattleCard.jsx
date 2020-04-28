import React from 'react';
import Cards from './Cards';
import AddCardButton from './AddCardButton';
import NewCardMenu from './NewCardMenu';
import '../App.css';

export default ({cards, activateCardEdit, editCard, onDelete, 
                isEmptyAddButtonState, triggerAddCardState, 
                isAddCardState, deleteBattleCard, battleCardId, 
                addCard, section
                }) => (

        <div className="battleCard">   
            <button onClick={deleteBattleCard.bind(null,battleCardId, section)}>Delete BattleCard</button>        
            <div>
            <h1>Objection</h1>
            </div>
            <Cards
            cards={cards}
            activateCardEdit={activateCardEdit} //activeCardEdit
            editCard={editCard} //editCard
            onDelete={onDelete}
            battleCardId = {battleCardId}
            section = {section}
            />

            
            <div>
            {isEmptyAddButtonState && <AddCardButton section={section} addCard={triggerAddCardState} battleCardId={battleCardId}/>}

            {isAddCardState && 
            <NewCardMenu 
                addCard = {addCard}
                battleCardId={battleCardId} 
                section = {section}
            />} 
            

            </div>
        </div> 
)