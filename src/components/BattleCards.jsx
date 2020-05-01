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
import Cards from './Cards'
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
        addBattleCard={addBattleCard} 
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        isEmptyObjectionsState={isEmptyObjectionsState}
        isEmptyCompetitorsState={isEmptyCompetitorsState}
        isEmptyProfilesState={isEmptyProfilesState}
        isEmptyDiscoveriesState={isEmptyDiscoveriesState}
        triggerAddCardState={triggerAddCardState}
        addCard={addCard}
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

const IndependentBattleCards = ({addBattleCard, deleteBattleCard, modifyBattleCardTitle,
                                isEmptyObjectionsState, isEmptyCompetitorsState, isEmptyProfilesState, isEmptyDiscoveriesState,
                                triggerAddCardState, addCard}) => (
    <div>

        {!isEmptyObjectionsState &&
        <ObjectionsBattleCards 
        addBattleCard={addBattleCard}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        triggerAddCardState={triggerAddCardState}
        addCard={addCard}
        />}

        {!isEmptyCompetitorsState && 
        <CompetitorsBattleCards 
        addBattleCard={addBattleCard}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        triggerAddCardState={triggerAddCardState}
        addCard={addCard}
        />}

        {!isEmptyProfilesState && 
        <ProfilesBattleCards 
        addBattleCard={addBattleCard}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        triggerAddCardState={triggerAddCardState}
        addCard={addCard}
        />}

        {!isEmptyDiscoveriesState && 
        <DiscoveriesBattleCards 
        addBattleCard={addBattleCard}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        triggerAddCardState={triggerAddCardState}
        addCard={addCard}
        />}

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
        isEmptyDiscoveriesState: state.sectionStates.isEmptyDiscoveriesState,
        
        selectedBattleCards: state.battleCards.selectedBattleCards
    })
}

export default connect(mapState, { addBattleCard, deleteBattleCard, triggerSectionState, 
                        modifyBattleCardTitle, changeSelectedBattleCards, clearSelectedBattleCards,
                        addBattleCardToSectionAndSelectedBattleCards, 
                        triggerAddCardState, addCard})(BattleCardsMenu);