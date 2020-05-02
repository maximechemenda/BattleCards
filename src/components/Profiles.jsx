/* import React from 'react';
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
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'profiles')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'profiles')} placeholder="Title of Battle Card" className="titleBattleCard">{titleValue}</textarea>        
            <h2>Profile</h2>
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
    <button className="addCardButton" onClick={() => triggerAddCardState(battleCardId, section)}>
        <span style={{fontSize: '20px'}}>+</span>
    </button>
)

const NewProfilesCardMenu = ({addCard, battleCardId, section}) => (
    <div className="addCardMenu">
        <button onClick = {() => addCard(battleCardId, 'battlePitch', section)}>Battle Pitch</button>
        <button onClick = {() => addCard(battleCardId, 'warning', section)}>Warning</button>
        <button onClick = {() => addCard(battleCardId, 'checklist', section)}>Checklist</button>
    </div>
)




 const mapState = (state) => {
    return ({
        profilesBattleCards: state.battleCards.profilesBattleCards,
    })
}

export default connect(mapState, {deleteBattleCard, 
                        modifyBattleCardTitle, triggerAddCardState, addCard})(ProfilesBattleCards); 

 */