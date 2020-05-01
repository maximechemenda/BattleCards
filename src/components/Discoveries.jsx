import React from 'react';
import { connect } from 'react-redux'
import Cards from './Cards'
import { deleteBattleCard } from '../redux/actions'
import { modifyBattleCardTitle } from '../redux/actions'
import { triggerAddCardState } from '../redux/actions'
import { addCard } from '../redux/actions'
import '../App.css'  



const DiscoveriesBattleCards = ({discoveriesBattleCards, deleteBattleCard, modifyBattleCardTitle, triggerAddCardState, addCard}) => (
    
    <div>
        {discoveriesBattleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <DiscoveriesBattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={'discoveries'}
                    modifyBattleCardTitle={modifyBattleCardTitle}
                    titleValue={battleCard.titleValue}
                    triggerAddCardState={triggerAddCardState}
                    addCard={addCard}
                    />
        </div> 
    )}</div>
)


const DiscoveriesBattleCard = ({cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section, modifyBattleCardTitle, titleValue, triggerAddCardState, addCard}) => (

    <div className="battleCard">   
        <button onClick={() => deleteBattleCard(battleCardId, section)}>Delete BattleCard</button>
        <div className="cards">
            <h2>Discovery</h2>
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'discoveries')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'discoveries')} placeholder="Title of Battle Card" className="titleBattleCard">{titleValue}</textarea>        
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
            <NewDiscoveriesCardMenu 
                addCard = {addCard}
                battleCardId={battleCardId}
                section={section}
            />} 
        </div>

    </div>
)

const AddCardButton = ({triggerAddCardState, battleCardId, section}) => (
    <button className="addCardButton" onClick={() => triggerAddCardState(battleCardId, section)}>+</button>
)

const NewDiscoveriesCardMenu = ({addCard, battleCardId, section}) => (
    <div className="addCardMenu">
        <button onClick = {() => addCard(battleCardId, 'commonAnswer', section)}>Common Answer</button>
        <button onClick = {() => addCard(battleCardId, 'goodPhrasing', section)}>Good Phrasing</button>
        <button onClick = {() => addCard(battleCardId, 'checklist', section)}>Checklist</button>
    </div>
)



 const mapState = (state) => {
    return ({
        discoveriesBattleCards: state.battleCards.discoveriesBattleCards,
    })
}

export default connect(mapState, {deleteBattleCard, 
                        modifyBattleCardTitle, triggerAddCardState, addCard})(DiscoveriesBattleCards); 

