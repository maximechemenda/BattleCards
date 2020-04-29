import React from 'react'
import { addBattleCard } from '../redux/actions'
import { deleteBattleCard } from '../redux/actions'
import { triggerSectionState } from '../redux/actions'
import { connect } from 'react-redux'
import '../App.css'  
import Cards from './Cards'

const BattleCardsMenu = ({triggerSectionState, addBattleCard, deleteBattleCard, objectionsBattleCards, isEmptyObjectionsState}) => (
    <div>
        <button onClick={() => triggerSectionState('objections')}>Objections</button>
        <button onClick={() => triggerSectionState('competitors')}>Competitors</button>
        <button onClick={() => triggerSectionState('profiles')}>Profiles</button>
        <button onClick={() => triggerSectionState('discoveries')}>Discoveries</button>

      

        {isEmptyObjectionsState &&
        <ObjectionsBattleCards 
        addBattleCard={addBattleCard}
        battleCards={objectionsBattleCards}
        deleteBattleCard={deleteBattleCard}
        />}


    </div>
    /* {isEmptyCompetitorsState && 
        <CompetitorsBattleCards />}

        {isEmptyProfilesState && 
        <ProfilesBattleCards />}

        {isEmptyDiscoveriesState && 
        <DiscoveriesBattleCards />} */
)    

const ObjectionsBattleCards = ({addBattleCard, battleCards, deleteBattleCard}) => (
    
    <div>
        <button onClick={() => addBattleCard('objections')}>add BattleCard</button>
        {battleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <BattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={'objections'}/>
        </div> 
    )}</div>
)


/* const BattleCards = ({addBattleCard, battleCards, deleteBattleCard}) => (
    
    <div>
        <button onClick={() => addBattleCard()}>add BattleCard</button>
        {battleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <BattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}/>
        </div> 
    )}</div>
) */


const BattleCard = ({cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section}) => (

        <div className="battleCard">   
            <button onClick={() => deleteBattleCard(battleCardId, section)}>Delete BattleCard</button>        
            <Cards
            cards={cards}
            battleCardId = {battleCardId}
            isEmptyAddButtonState={isEmptyAddButtonState}
            section = {section}
            />

        </div>

)

const mapState = (state) => {
    return ({
        objectionsBattleCards: state.battleCards.objectionsBattleCards,
        isEmptyObjectionsState: state.sectionStates
        
    })
}

export default connect(mapState, { addBattleCard, deleteBattleCard, triggerSectionState})(BattleCardsMenu);