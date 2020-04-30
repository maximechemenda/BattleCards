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
        competitorsBattleCards={competitorsBattleCards}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        />}

        {!isEmptyProfilesState && 
        <ProfilesBattleCards 
        addBattleCard={addBattleCard}
        profilesBattleCards={profilesBattleCards}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        />}

        {!isEmptyDiscoveriesState && 
        <DiscoveriesBattleCards 
        addBattleCard={addBattleCard}
        discoveriesBattleCards={discoveriesBattleCards}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        />}


    </div>
     
)    

//////////////////////  OBJECTIONS /////////////////////

const ObjectionsBattleCards = ({addBattleCard, objectionsBattleCards, deleteBattleCard, modifyBattleCardTitle}) => (
    
    <div>
        <div className='leftMenu'>
            <h3>Objections</h3>
            <ul>
                {objectionsBattleCards.map((battleCard) => 
                    <li key={battleCard.battleCardId}>{battleCard.titleValue}</li>
                )} 
            </ul>
            
            
        </div>
        <button onClick={() => addBattleCard('objections')}>add BattleCard</button>
        {objectionsBattleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <ObjectionsBattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={'objections'}
                    modifyBattleCardTitle={modifyBattleCardTitle}/>
        </div> 
    )}</div>
)

const ObjectionsBattleCard = ({cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section, modifyBattleCardTitle}) => (

    <div className="battleCard">   
        <button onClick={() => deleteBattleCard(battleCardId, section)}>Delete BattleCard</button>
        <div className="cards">
            <h2>Objection</h2>
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'objections')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'objections')} placeholder="Title of Battle Card" className="titleBattleCard"></textarea>        
            <h3>Bad arguments/good arguments</h3>
        </div>
        <br></br>

        <Cards
        cards={cards}
        battleCardId = {battleCardId}
        isEmptyAddButtonState={isEmptyAddButtonState}
        section = {section}
        />
    </div>
)



//////////////////////  COMPETITORS /////////////////////

const CompetitorsBattleCards = ({addBattleCard, competitorsBattleCards, deleteBattleCard, modifyBattleCardTitle}) => (
    
    <div>
        <div className='leftMenu'>
            <h3>Competitors</h3>
            <ul>
                {competitorsBattleCards.map((battleCard) => 
                    <li key={battleCard.battleCardId}>{battleCard.titleValue}</li>
                )} 
            </ul>
            
            
        </div>
        <button onClick={() => addBattleCard('competitors')}>add BattleCard</button>
        {competitorsBattleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <CompetitorsBattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={'competitors'}
                    modifyBattleCardTitle={modifyBattleCardTitle}/>
        </div> 
    )}</div>
)

const CompetitorsBattleCard = ({cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section, modifyBattleCardTitle}) => (

    <div className="battleCard">   
        <button onClick={() => deleteBattleCard(battleCardId, section)}>Delete BattleCard</button>
        <div className="cards">
            <h2>Competitor</h2>
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'competitors')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'competitors')} placeholder="Title of Battle Card" className="titleBattleCard"></textarea>        
            <h3>Bad arguments/good arguments</h3>
        </div>
        <br></br>

        <Cards
        cards={cards}
        battleCardId = {battleCardId}
        isEmptyAddButtonState={isEmptyAddButtonState}
        section = {section}
        />
    </div>
)



//////////////////////  PROFILES /////////////////////

const ProfilesBattleCards = ({addBattleCard, profilesBattleCards, deleteBattleCard, modifyBattleCardTitle}) => (
    
    <div>
        <div className='leftMenu'>
            <h3>Profiles</h3>
            <ul>
                {profilesBattleCards.map((battleCard) => 
                    <li key={battleCard.battleCardId}>{battleCard.titleValue}</li>
                )} 
            </ul>
            
            
        </div>
        <button onClick={() => addBattleCard('profiles')}>add BattleCard</button>
        {profilesBattleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <ProfilesBattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={'profiles'}
                    modifyBattleCardTitle={modifyBattleCardTitle}/>
        </div> 
    )}</div>
)

const ProfilesBattleCard = ({cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section, modifyBattleCardTitle}) => (

    <div className="battleCard">   
        <button onClick={() => deleteBattleCard(battleCardId, section)}>Delete BattleCard</button>
        <div className="cards">
            <h2>Profiles</h2>
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'profiles')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'profiles')} placeholder="Title of Battle Card" className="titleBattleCard"></textarea>        
            <h3>Bad arguments/good arguments</h3>
        </div>
        <br></br>

        <Cards
        cards={cards}
        battleCardId = {battleCardId}
        isEmptyAddButtonState={isEmptyAddButtonState}
        section = {section}
        />
    </div>
)


//////////////////////  DISCOVERIES /////////////////////

const DiscoveriesBattleCards = ({addBattleCard, discoveriesBattleCards, deleteBattleCard, modifyBattleCardTitle}) => (
    
    <div>
        <div className='leftMenu'>
            <h3>Discoveries</h3>
            <ul>
                {discoveriesBattleCards.map((battleCard) => 
                    <li key={battleCard.battleCardId}>{battleCard.titleValue}</li>
                )} 
            </ul>
            
            
        </div>
        <button onClick={() => addBattleCard('discoveries')}>add BattleCard</button>
        {discoveriesBattleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <DiscoveriesBattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={'discoveries'}
                    modifyBattleCardTitle={modifyBattleCardTitle}/>
        </div> 
    )}</div>
)

const DiscoveriesBattleCard = ({cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section, modifyBattleCardTitle}) => (

    <div className="battleCard">   
        <button onClick={() => deleteBattleCard(battleCardId, section)}>Delete BattleCard</button>
        <div className="cards">
            <h2>Discoveries</h2>
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'discoveries')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'discoveries')} placeholder="Title of Battle Card" className="titleBattleCard"></textarea>        
            <h3>Bad arguments/good arguments</h3>
        </div>
        <br></br>

        <Cards
        cards={cards}
        battleCardId = {battleCardId}
        isEmptyAddButtonState={isEmptyAddButtonState}
        section = {section}
        />
    </div>
)















/* 
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
) */

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