import React from 'react'
import { addBattleCard } from '../redux/actions'
import { deleteBattleCard } from '../redux/actions'
import { triggerSectionState } from '../redux/actions'
import { modifyBattleCardTitle } from '../redux/actions'
import { changeSelectedBattleCards } from '../redux/actions'
import { clearSelectedBattleCards } from '../redux/actions'
import { addBattleCardToSectionAndSelectedBattleCards } from '../redux/actions'
import { triggerAddCardState } from '../redux/actions'
import { addCard } from '../redux/actions'
import { connect } from 'react-redux'
import '../App.css'  
import ObjectionsBattleCards from './Objections'
import ObjectionsBattleCard from './Objections'
import CompetitorsBattleCards from './Competitors'
import CompetitorsBattleCard from './Competitors'
import ProfilesBattleCards from './Profiles'
import ProfilesBattleCard from './Profiles'
import DiscoveriesBattleCards from './Discoveries'
import DiscoveriesBattleCard from './Discoveries'



const BattleCardsMenu = ({triggerSectionState, addBattleCard, deleteBattleCard,
        objectionsBattleCards, isEmptyObjectionsState,
        competitorsBattleCards, isEmptyCompetitorsState,
        profilesBattleCards, isEmptyProfilesState,
        discoveriesBattleCards, isEmptyDiscoveriesState,
        modifyBattleCardTitle,
        changeSelectedBattleCards, selectedBattleCards, clearSelectedBattleCards,
        addBattleCardToSectionAndSelectedBattleCards, triggerAddCardState, addCard}) => (

    <div>

    
        <div className="smallIndex">
            <button className="smallIndexButton" onClick={() => triggerSectionState('objections')}>Objections</button>
            <button className="smallIndexButton" onClick={() => triggerSectionState('competitors')}>Competitors</button>
            <button className="smallIndexButton" onClick={() => triggerSectionState('profiles')}>Profiles</button>
            <button className="smallIndexButton" onClick={() => triggerSectionState('discoveries')}>Discoveries</button>
        </div>

        <div>   
            {console.log(selectedBattleCards)}
            {!isEmptyObjectionsState &&
            <div>

 
                <div className='leftMenu'>
                    <h3>Objections</h3>
                    <ol>
                        {objectionsBattleCards.map((battleCard) => 
                            <li onClick={() => changeSelectedBattleCards(battleCard.battleCardId, 'objections')} key={battleCard.battleCardId} className="leftMenuItems">{battleCard.titleValue}</li>
                        )} 
                    </ol> 

                    {selectedBattleCards.length !== 0 &&
                    <button className="closeAllOpenedBattleCardsButton" onClick={() => clearSelectedBattleCards()}>Close all those fuckers</button>
                    }
                </div>

                {selectedBattleCards.length !== 0 && 
                <div className='addBattleCard'>
                    <button onClick={() => addBattleCardToSectionAndSelectedBattleCards('objections')}>add BattleCard</button>
                </div>
                }

                {selectedBattleCards.length === 0 &&
                <div className='addBattleCard'>
                    <button onClick={() => addBattleCard('objections')}>add BattleCard</button>
                </div>
                }


            </div>
            }

            {!isEmptyCompetitorsState &&
            <div>
                
                <div className='leftMenu'>
                    <h3>Competitors</h3>
                    <ol>
                        {competitorsBattleCards.map((battleCard) => 
                            <li onClick={() => changeSelectedBattleCards(battleCard.battleCardId, 'competitors')} key={battleCard.battleCardId} className="leftMenuItems">{battleCard.titleValue}</li>
                        )} 
                    </ol> 
                    {selectedBattleCards.length !== 0 &&
                    <button className="closeAllOpenedBattleCardsButton" onClick={() => clearSelectedBattleCards()}>Close all those fuckers</button>
                    }
                </div>

                {selectedBattleCards.length !== 0 && 
                <div className='addBattleCard'>
                    <button onClick={() => addBattleCardToSectionAndSelectedBattleCards('competitors')}>add BattleCard</button>
                </div>
                }
                
                {selectedBattleCards.length === 0 && 
                <div className='addBattleCard'>
                    <button onClick={() => addBattleCard('competitors')}>add BattleCard</button>
                </div>
                }

            </div>
            }

            {!isEmptyProfilesState &&
            <div>
                
                <div className='leftMenu'>
                    <h3>Profiles</h3>
                    <ol>
                        {profilesBattleCards.map((battleCard) => 
                            <li onClick={() => changeSelectedBattleCards(battleCard.battleCardId, 'profiles')} key={battleCard.battleCardId} className="leftMenuItems">{battleCard.titleValue}</li>
                        )} 
                    </ol> 
                    {selectedBattleCards.length !== 0 &&
                    <button className="closeAllOpenedBattleCardsButton" onClick={() => clearSelectedBattleCards()}>Close all those fuckers</button>
                    }
                </div>

                {selectedBattleCards.length !== 0 && 
                <div className='addBattleCard'>
                    <button onClick={() => addBattleCardToSectionAndSelectedBattleCards('profiles')}>add BattleCard</button>
                </div>
                }
                
                {selectedBattleCards.length === 0 &&
                <div className='addBattleCard'>
                    <button onClick={() => addBattleCard('profiles')}>add BattleCard</button>
                </div>
                }

            </div>
            }

            {!isEmptyDiscoveriesState &&
            <div>
                
                <div className='leftMenu'>
                    <h3>Discoveries</h3>
                    <ol>
                        {discoveriesBattleCards.map((battleCard) => 
                            <li onClick={() => changeSelectedBattleCards(battleCard.battleCardId, 'discoveries')} key={battleCard.battleCardId} className="leftMenuItems">{battleCard.titleValue}</li>
                        )} 
                    </ol> 
                    {selectedBattleCards.length !== 0 &&
                    <button className="closeAllOpenedBattleCardsButton" onClick={() => clearSelectedBattleCards()}>Close all those fuckers</button>
                    }
                </div>

                {selectedBattleCards.length !== 0 && 
                <div className='addBattleCard'>
                    <button onClick={() => addBattleCardToSectionAndSelectedBattleCards('discoveries')}>add BattleCard</button>
                </div>
                }
                
                {selectedBattleCards.length === 0 &&
                <div className='addBattleCard'>
                    <button onClick={() => addBattleCard('discoveries')}>add BattleCard</button>
                </div>
                }

            </div>
            }

        </div>


        {(selectedBattleCards.length === 0) &&
        <IndependentBattleCards
        isEmptyObjectionsState={isEmptyObjectionsState}
        isEmptyCompetitorsState={isEmptyCompetitorsState}
        isEmptyProfilesState={isEmptyProfilesState}
        isEmptyDiscoveriesState={isEmptyDiscoveriesState}
        />}

        {(selectedBattleCards.length !== 0) && 
        <SelectedBattleCards 
        selectedBattleCards={selectedBattleCards}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        triggerAddCardState={triggerAddCardState}
        addCard={addCard}
        />}

        
        
    </div>
)    


const SelectedBattleCards = ({selectedBattleCards, deleteBattleCard, modifyBattleCardTitle, addCard}) => (
    <div>
        
        {selectedBattleCards.map(battleCard => {
            console.log('inspector gadget')
            if (battleCard.section === 'objections') {
                return <ObjectionsBattleCard 
                cards={battleCard.cards}
                isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                deleteBattleCard={deleteBattleCard}
                battleCardId={battleCard.battleCardId}
                section={battleCard.section}
                modifyBattleCardTitle={modifyBattleCardTitle}
                titleValue={battleCard.titleValue}
                triggerAddCardState={triggerAddCardState}
                addCard={addCard}
                />
            }
            if (battleCard.section === 'competitors') {
                return <CompetitorsBattleCard 
                cards={battleCard.cards}
                isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                deleteBattleCard={deleteBattleCard}
                battleCardId={battleCard.battleCardId}
                section={battleCard.section}
                modifyBattleCardTitle={modifyBattleCardTitle}
                titleValue={battleCard.titleValue}
                triggerAddCardState={triggerAddCardState}
                addCard={addCard}
                />
            }
            if (battleCard.section === 'profiles') {
                return <ProfilesBattleCard 
                cards={battleCard.cards}
                isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                deleteBattleCard={deleteBattleCard}
                battleCardId={battleCard.battleCardId}
                section={battleCard.section}
                modifyBattleCardTitle={modifyBattleCardTitle}
                titleValue={battleCard.titleValue}
                triggerAddCardState={triggerAddCardState}
                addCard={addCard}
                />
            }
            if (battleCard.section === 'discoveries') {
                return <DiscoveriesBattleCard 
                cards={battleCard.cards}
                isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                deleteBattleCard={deleteBattleCard}
                battleCardId={battleCard.battleCardId}
                section={battleCard.section}
                modifyBattleCardTitle={modifyBattleCardTitle}
                titleValue={battleCard.titleValue}
                triggerAddCardState={triggerAddCardState}
                addCard={addCard}
                />
            }
        })}
    </div>
    
)

const IndependentBattleCards = ({isEmptyObjectionsState, isEmptyCompetitorsState, isEmptyProfilesState, isEmptyDiscoveriesState}) => (
    <div>
        {console.log('whyyyyyyyy')}

        {!isEmptyObjectionsState &&
        <ObjectionsBattleCards />}

        {!isEmptyCompetitorsState && 
        <CompetitorsBattleCards />}

        {!isEmptyProfilesState && 
        <ProfilesBattleCards />}

        {!isEmptyDiscoveriesState && 
        <DiscoveriesBattleCards />}

    </div>
)


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

/////////////::test/////////
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
////////////////





const mapState = (state) => {
    return ({
        objectionsBattleCards: state.battleCards.objectionsBattleCards,
        isEmptyObjectionsState: state.sectionStates.isEmptyObjectionsState,

        competitorsBattleCards: state.battleCards.competitorsBattleCards,
        isEmptyCompetitorsState: state.sectionStates.isEmptyCompetitorsState,

        profilesBattleCards: state.battleCards.profilesBattleCards,
        isEmptyProfilesState: state.sectionStates.isEmptyProfilesState,

        discoveriesBattleCards: state.battleCards.discoveriesBattleCards,
        isEmptyDiscoveriesState: state.sectionStates.isEmptyDiscoveriesState,
        
        selectedBattleCards: state.battleCards.selectedBattleCards
    })
}

export default connect(mapState, { addBattleCard, deleteBattleCard, triggerSectionState, 
                        modifyBattleCardTitle, changeSelectedBattleCards, clearSelectedBattleCards,
                        addBattleCardToSectionAndSelectedBattleCards, 
                        triggerAddCardState, addCard})(BattleCardsMenu);