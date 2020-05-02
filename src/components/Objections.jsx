/* import React from 'react';
import { connect } from 'react-redux'
import Cards from './Cards'
import { deleteBattleCard } from '../redux/actions'
import { modifyBattleCardTitle } from '../redux/actions'
import { triggerAddCardState } from '../redux/actions'
import { addCard } from '../redux/actions'
import '../App.css'  



const ObjectionsBattleCards = ({objectionsBattleCards, deleteBattleCard, modifyBattleCardTitle, triggerAddCardState, addCard}) => (

    
    <div>
        {console.log('are you kidding me')}
        {objectionsBattleCards.map((battleCard) => 
        
        <div key={battleCard.battleCardId}>
                <ObjectionsBattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={'objections'}
                    modifyBattleCardTitle={modifyBattleCardTitle}
                    titleValue={battleCard.titleValue}
                    triggerAddCardState={triggerAddCardState}
                    addCard={addCard}
                    />
        </div> 
    )}</div>
)


const ObjectionsBattleCard = ({cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section, modifyBattleCardTitle, titleValue, triggerAddCardState, addCard, addBattleCardToSectionAndSelectedBattleCards}) => (


    <div className="battleCard">   
        {console.log('himalaya')}
        <button onClick={() => deleteBattleCard(battleCardId, section)}>Delete BattleCard</button>
        <div className="cards">
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'objections')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'objections')} placeholder="Title of Battle Card" className="titleBattleCard">{titleValue}</textarea>  
            <h2>Objection</h2>      
            <h3>Bad arguments/good arguments</h3>
        </div>
        <br></br>

        <Cards
        cards={cards}
        battleCardId = {battleCardId}
        section = {section}
        />

        <div>
            {isEmptyAddButtonState && <AddCardButton section={section} battleCardId={battleCardId} triggerAddCardState={triggerAddCardState}/>}

            {!isEmptyAddButtonState &&
            <NewObjectionsCardMenu 
                addCard = {addCard}
                battleCardId={battleCardId}
                section={section}
            />} 
        </div>

    </div>
)

const AddCardButton = ({triggerAddCardState, battleCardId, section}) => (
    <button className="addCardButton" onClick={() => triggerAddCardState(battleCardId, section)}>
        <span style={{fontSize: '20px'}}>+</span>
    </button>
)

const NewObjectionsCardMenu = ({addCard, battleCardId, section}) => (
    <div className="addCardMenu">
        
        <button onClick = {() => addCard(battleCardId, 'goodQuestion', section)}>Good Question</button>
        <button onClick = {() => addCard(battleCardId, 'badQuestion', section)}>Bad Question</button>
        <button onClick = {() => addCard(battleCardId, 'offerDeal', section)}>Offer Deal</button>
        <button onClick = {() => addCard(battleCardId, 'checklist', section)}>Checklist</button>
        <button onClick = {() => addCard(battleCardId, 'commonAnswer', section)}>Common Answer</button>
        <button onClick = {() => addCard(battleCardId, 'text', section)}>Text</button>
    </div>
)




const mapState = (state) => {
    return ({
        objectionsBattleCards: state.battleCards.objectionsBattleCards,
    })
}

export default connect(mapState, {deleteBattleCard, 
                        modifyBattleCardTitle, triggerAddCardState, addCard})(ObjectionsBattleCards); 

 */