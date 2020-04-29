import React from 'react'
import { addBattleCard } from '../redux/actions'
import { deleteBattleCard } from '../redux/actions'
import { connect } from 'react-redux'
import '../App.css'  
import Cards from './Cards'


const BattleCards = ({addBattleCard, battleCards, triggerAddBattleCardState, deleteBattleCard}) => (
    
    <div>
        <button onClick={() => addBattleCard()}>add BattleCard</button>
        {battleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <BattleCard
                    onClick={triggerAddBattleCardState}
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}/>
        </div> 
    )}</div>
)


const BattleCard = ({cards, deleteBattleCard, battleCardId}) => (

        <div className="battleCard">   
            <button onClick={() => deleteBattleCard(battleCardId)}>Delete BattleCard</button>        
            <Cards
            cards={cards}
            battleCardId = {battleCardId}
            />

            {/* <div>
            {isEmptyAddButtonState && <AddCardButton section={section} addCard={triggerAddCardState} battleCardId={battleCardId}/>}

            {isAddCardState && 
            <NewCardMenu 
                addCard = {addCard}
                battleCardId={battleCardId} 
                section = {section}
            />} */}

            </div>

)

const mapState = (state) => {
    return ({
        battleCards: state.battleCards.battleCards,
    })
}

export default connect(mapState, { addBattleCard, deleteBattleCard})(BattleCards);