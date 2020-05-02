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
            <button className={isEmptyObjectionsState ? "unselectedSmallIndexButton" : "selectedSmallIndexButton"} onClick={() => triggerSectionState('objections')}>Objections</button>
            <button className={isEmptyCompetitorsState ? "unselectedSmallIndexButton" : "selectedSmallIndexButton"} onClick={() => triggerSectionState('competitors')}>Competitors</button>
            <button className={isEmptyProfilesState ? "unselectedSmallIndexButton" : "selectedSmallIndexButton"} onClick={() => triggerSectionState('profiles')}>Profiles</button>
            <button className={isEmptyDiscoveriesState ? "unselectedSmallIndexButton" : "selectedSmallIndexButton"} onClick={() => triggerSectionState('discoveries')}>Discoveries</button>
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
        objectionsBattleCards={objectionsBattleCards}
        competitorsBattleCards={competitorsBattleCards}
        profilesBattleCards={profilesBattleCards}
        discoveriesBattleCards={discoveriesBattleCards}
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
                                objectionsBattleCards, competitorsBattleCards, profilesBattleCards, discoveriesBattleCards,
                                triggerAddCardState, addCard}) => (
    <div>

        {!isEmptyObjectionsState &&
        <ObjectionsBattleCards 
        addBattleCard={addBattleCard}
        objectionsBattleCards={objectionsBattleCards}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        triggerAddCardState={triggerAddCardState}
        addCard={addCard}
        />}

        {!isEmptyCompetitorsState && 
        <CompetitorsBattleCards 
        addBattleCard={addBattleCard}
        competitorsBattleCards={competitorsBattleCards}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        triggerAddCardState={triggerAddCardState}
        addCard={addCard}
        />}

        {!isEmptyProfilesState && 
        <ProfilesBattleCards 
        addBattleCard={addBattleCard}
        profilesBattleCards={profilesBattleCards}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        triggerAddCardState={triggerAddCardState}
        addCard={addCard}
        />}

        {!isEmptyDiscoveriesState && 
        <DiscoveriesBattleCards 
        addBattleCard={addBattleCard}
        discoveriesBattleCards={discoveriesBattleCards}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        triggerAddCardState={triggerAddCardState}
        addCard={addCard}
        />}

    </div>
)


//////////////////////  OBJECTIONS /////////////////////

const ObjectionsBattleCards = ({addBattleCard, objectionsBattleCards, deleteBattleCard, modifyBattleCardTitle, triggerAddCardState, addCard}) => (
    
    <div>
        {/* <button onClick={() => addBattleCard('objections')}>add BattleCard</button> */}
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

const ObjectionsBattleCard = ({cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section, modifyBattleCardTitle, titleValue, triggerAddCardState, addCard}) => (

    <div className="battleCard">   
        <button onClick={() => deleteBattleCard(battleCardId, section)}>Delete BattleCard</button>
        <div className="cards">
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'objections')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'objections')} placeholder="Title of Battle Card" className="titleBattleCard">{titleValue}</textarea>        
            <span className="battleCardNameHeader">Objection</span>
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

const NewObjectionsCardMenu = ({addCard, battleCardId, section}) => (
    <div className="addCardMenu">
        
        <button className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'goodQuestion', section)}>Good Question</button>
        <button className='redAddButton' onClick = {() => addCard(battleCardId, 'badQuestion', section)}>Bad Question</button>
        <button className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'offerDeal', section)}>Offer Deal</button>
        <button className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'checklist', section)}>Checklist</button>
        <button className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'commonAnswer', section)}>Common Answer</button>
        <button className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'text', section)}>Text</button>
    </div>
)


//////////////////////  COMPETITORS /////////////////////

const CompetitorsBattleCards = ({addBattleCard, competitorsBattleCards, deleteBattleCard, modifyBattleCardTitle, triggerAddCardState, addCard}) => (
    
    <div>
{/*         <button onClick={() => addBattleCard('competitors')}>add BattleCard</button>
 */}        {competitorsBattleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <CompetitorsBattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={'competitors'}
                    modifyBattleCardTitle={modifyBattleCardTitle}
                    titleValue={battleCard.titleValue}
                    triggerAddCardState={triggerAddCardState}
                    addCard={addCard}
                    />
        </div> 
    )}</div>
)

const CompetitorsBattleCard = ({cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section, modifyBattleCardTitle, titleValue, triggerAddCardState, addCard}) => (

    <div className="battleCard">   
        <button onClick={() => deleteBattleCard(battleCardId, section)}>Delete BattleCard</button>
        <div className="cards">
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'competitors')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'competitors')} placeholder="Title of Battle Card" className="titleBattleCard">{titleValue}</textarea>        
            <span className="battleCardNameHeader">Competitor</span>
            <h3>Bad arguments/good arguments</h3>
        </div>
        <br></br>

        <Cards
        cards={cards}
        battleCardId = {battleCardId}
        isEmptyAddButtonState={isEmptyAddButtonState}
        section = {section}
        />
        
        <div>
            {isEmptyAddButtonState && <AddCardButton section={section} battleCardId={battleCardId} triggerAddCardState={triggerAddCardState}/>}

            {!isEmptyAddButtonState &&
            <NewCompetitorsCardMenu 
                addCard = {addCard}
                battleCardId={battleCardId}
                section={section}
            />} 
        </div>
    </div>
)

const NewCompetitorsCardMenu = ({addCard, battleCardId, section}) => ( 
    <div className="addCardMenu">
        <button className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'battlePitch', section)}>Battle Pitch</button>
        <button className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'offerDeal', section)}>Offer Deal</button>
        <button className='redAddButton' onClick = {() => addCard(battleCardId, 'warning', section)}>Warning</button>
    </div>
)



//////////////////////  PROFILES /////////////////////

const ProfilesBattleCards = ({addBattleCard, profilesBattleCards, deleteBattleCard, modifyBattleCardTitle, triggerAddCardState, addCard}) => (
    
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
            <span className="battleCardNameHeader">Profile</span>
            <h3>Bad arguments/good arguments</h3>
        </div>
        <br></br>

        <Cards
        cards={cards}
        battleCardId = {battleCardId}
        isEmptyAddButtonState={isEmptyAddButtonState}
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

const NewProfilesCardMenu = ({addCard, battleCardId, section}) => (
    <div className="addCardMenu">
        <button className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'battlePitch', section)}>Battle Pitch</button>
        <button className='redAddButton' onClick = {() => addCard(battleCardId, 'warning', section)}>Warning</button>
        <button className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'checklist', section)}>Checklist</button>
    </div>
)

//////////////////////  DISCOVERIES /////////////////////

const DiscoveriesBattleCards = ({addBattleCard, discoveriesBattleCards, deleteBattleCard, modifyBattleCardTitle, triggerAddCardState, addCard}) => (
    
    <div>
{/*         <button onClick={() => addBattleCard('discoveries')}>add BattleCard</button>
 */}        {discoveriesBattleCards.map((battleCard) => 
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
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'discoveries')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'discoveries')} placeholder="Title of Battle Card" className="titleBattleCard">{titleValue}</textarea>        
            <span className="battleCardNameHeader">Discovery</span>
            <h3>Bad arguments/good arguments</h3>
        </div>
        <br></br>

        <Cards
        cards={cards}
        battleCardId = {battleCardId}
        isEmptyAddButtonState={isEmptyAddButtonState}
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

const NewDiscoveriesCardMenu = ({addCard, battleCardId, section}) => (
    <div className="addCardMenu">
        <button className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'commonAnswer', section)}>Common Answer</button>
        <button className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'goodPhrasing', section)}>Good Phrasing</button>
        <button className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'checklist', section)}>Checklist</button>
    </div>
)


/////////////////// ADD CARD BUTTON ////////////////
const AddCardButton = ({triggerAddCardState, battleCardId, section}) => (
    <button className="addCardButton" onClick={() => triggerAddCardState(battleCardId, section)}>+</button>
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