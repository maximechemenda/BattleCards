import React from 'react';
import { connect } from 'react-redux'
import Cards from './Cards'
import { deleteBattleCard } from '../redux/actions'
import { modifyBattleCardTitle } from '../redux/actions'
import { triggerAddCardState } from '../redux/actions'
import { addCard } from '../redux/actions'
import '../App.css'  



const ProfilesBattleCards = ({profilesBattleCards, deleteBattleCard, modifyBattleCardTitle, triggerAddCardState, addCard}) => (
    
    <div>
        {profilesBattleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <ProfilesBattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={'profiles'}
                    modifyBattleCardTitle={modifyBattleCardTitle}
                    titleValue={battleCard.titleValue}
                    triggerAddCardState={triggerAddCardState}
                    addCard={addCard}
                    />
        </div> 
    )}</div>
)


const ProfilesBattleCard = ({cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section, modifyBattleCardTitle, titleValue, triggerAddCardState, addCard}) => (

    <div className="battleCard">   
        <button onClick={() => deleteBattleCard(battleCardId, section)}>Delete BattleCard</button>
        <div className="cards">
            <h2>Profile</h2>
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'profiles')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'profiles')} placeholder="Title of Battle Card" className="titleBattleCard">{titleValue}</textarea>        
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
            <NewProfilesCardMenu 
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

const NewProfilesCardMenu = ({addCard, battleCardId, section}) => (
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
        profilesBattleCards: state.battleCards.profilesBattleCards,
    })
}



export default connect(mapState, {deleteBattleCard, 
                        modifyBattleCardTitle, triggerAddCardState, addCard})(ProfilesBattleCards); 

