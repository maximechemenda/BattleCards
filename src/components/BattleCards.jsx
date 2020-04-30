import React from 'react'
import { addBattleCard } from '../redux/actions'
import { deleteBattleCard } from '../redux/actions'
import { triggerSectionState } from '../redux/actions'
import { modifyBattleCardTitle } from '../redux/actions'
import { connect } from 'react-redux'
import '../App.css'  
import Cards from './Cards'



const BattleCardsMenu = ({triggerSectionState, addBattleCard, deleteBattleCard,
        objectionsBattleCards, isEmptyObjectionsState,
        competitorsBattleCards, isEmptyCompetitorsState,
        profilesBattleCards, isEmptyProfilesState,
        discoveriesBattleCards, isEmptyDiscoveriesState,
        modifyBattleCardTitle}) => (

    <div>
        <button onClick={() => triggerSectionState('objections')}>Objections</button>
        <button onClick={() => triggerSectionState('competitors')}>Competitors</button>
        <button onClick={() => triggerSectionState('profiles')}>Profiles</button>
        <button onClick={() => triggerSectionState('discoveries')}>Discoveries</button>





        {!isEmptyObjectionsState &&
        <ObjectionsBattleCards 
        addBattleCard={addBattleCard}
        objectionsBattleCards={objectionsBattleCards}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        />}

        {!isEmptyCompetitorsState && 
        <CompetitorsBattleCards 
        addBattleCard={addBattleCard}
        battleCards={competitorsBattleCards}
        deleteBattleCard={deleteBattleCard}
        />}

        {!isEmptyProfilesState && 
        <ProfilesBattleCards 
        addBattleCard={addBattleCard}
        battleCards={profilesBattleCards}
        deleteBattleCard={deleteBattleCard}
        />}

        {!isEmptyDiscoveriesState && 
        <DiscoveriesBattleCards 
        addBattleCard={addBattleCard}
        battleCards={discoveriesBattleCards}
        deleteBattleCard={deleteBattleCard}
        />}


    </div>
     
)    

const ObjectionsBattleCards = ({addBattleCard, objectionsBattleCards, deleteBattleCard, modifyBattleCardTitle}) => (
    
    <div>
        <div className='leftMenu'>
            <h3>Objections</h3>
            <ul>
                {console.log(objectionsBattleCards[0])}
                {objectionsBattleCards.map((battleCard) => 
                    <li key={battleCard.battleCardId}>{battleCard.titleValue}</li>
                )} 
            </ul>
            
            
        </div>
        <button onClick={() => addBattleCard('objections')}>add BattleCard</button>
        {objectionsBattleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <BattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={'objections'}
                    modifyBattleCardTitle={modifyBattleCardTitle}/>
        </div> 
    )}</div>
)

const CompetitorsBattleCards = ({addBattleCard, battleCards, deleteBattleCard}) => (
    
    <div>
        <button onClick={() => addBattleCard('competitors')}>add BattleCard</button>
        {battleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <BattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={'competitors'}/>
        </div> 
    )}</div>
)

const ProfilesBattleCards = ({addBattleCard, battleCards, deleteBattleCard}) => (
    
    <div>
        <button onClick={() => addBattleCard('profiles')}>add BattleCard</button>
        {battleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <BattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={'profiles'}/>
        </div> 
    )}</div>
)

const DiscoveriesBattleCards = ({addBattleCard, battleCards, deleteBattleCard}) => (
    
    <div>
        <button onClick={() => addBattleCard('discoveries')}>add BattleCard</button>
        {battleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <BattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={'discoveries'}/>
        </div> 
    )}</div>
)

const BattleCard = ({cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section, modifyBattleCardTitle}) => (

        <div className="battleCard">   
            <button onClick={() => deleteBattleCard(battleCardId, section)}>Delete BattleCard</button>
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId)} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId)} placeholder="Title of Battle Card" className="titleBattleCard"></textarea>        
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
        isEmptyObjectionsState: state.sectionStates.isEmptyObjectionsState,

        competitorsBattleCards: state.battleCards.competitorsBattleCards,
        isEmptyCompetitorsState: state.sectionStates.isEmptyCompetitorsState,

        profilesBattleCards: state.battleCards.profilesBattleCards,
        isEmptyProfilesState: state.sectionStates.isEmptyProfilesState,

        discoveriesBattleCards: state.battleCards.discoveriesBattleCards,
        isEmptyDiscoveriesState: state.sectionStates.isEmptyDiscoveriesState        
    })
}

export default connect(mapState, { addBattleCard, deleteBattleCard, triggerSectionState, 
                        modifyBattleCardTitle})(BattleCardsMenu);