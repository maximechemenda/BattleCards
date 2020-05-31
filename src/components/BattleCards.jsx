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
            <div className={isEmptyObjectionsState ? "unselectedSmallIndexButton" : "selectedSmallIndexButton"} onClick={() => triggerSectionState('objections')}>Objections</div>
            <div className={isEmptyCompetitorsState ? "unselectedSmallIndexButton" : "selectedSmallIndexButton"} onClick={() => triggerSectionState('competitors')}>Competitors</div>
            {/* <div className={isEmptyProfilesState ? "unselectedSmallIndexButton" : "selectedSmallIndexButton"} onClick={() => triggerSectionState('profiles')}>Profiles</div>
            <div className={isEmptyDiscoveriesState ? "unselectedSmallIndexButton" : "selectedSmallIndexButton"} onClick={() => triggerSectionState('discoveries')}>Discoveries</div> */}
        </div>

        <div>   
            
            {!isEmptyObjectionsState &&
            <div>
 
                <div className='leftMenu'>
                    <h3 className="leftMenuTitle">
                        <i className="fa fa-axe-battle"></i>
                        <span> Objections</span>
                    </h3>
                    <ol className='itemsContainer'>
                        {objectionsBattleCards.map((battleCard) => 
                            <li onClick={() => changeSelectedBattleCards(battleCard.battleCardId, 'objections')} key={battleCard.battleCardId} className={selectedBattleCards.includes(battleCard) ? "openedLeftMenuItems" : "closedLeftMenuItems"}>
                                <span>{battleCard.titleValue}</span>
                            </li>
                        )} 
                    </ol> 

                    {selectedBattleCards.length !== 0 &&
                    <div className="closeAllOpenedBattleCardsButton" onClick={() => clearSelectedBattleCards()}>Close all opened battlecards</div>
                    }
                </div>

                {selectedBattleCards.length !== 0 && 
                <div className='addBattleCard' onClick={() => addBattleCardToSectionAndSelectedBattleCards('objections')} >
                    <span className = "addBattleCardAxeIcon">
                           <i className="fas fa-axe-battle"></i>
                    </span>
                    <span className="addBattleCardPlusIcon">
                        <i className="fas fa-plus"></i>
                    </span>
                </div>
                }

                {selectedBattleCards.length === 0 &&
                <div className='addBattleCard' onClick={() => addBattleCard('objections')}>
                    <span className = "addBattleCardAxeIcon">
                        <i className="fas fa-axe-battle"></i>
                    </span>
                    <span className="addBattleCardPlusIcon">
                        <i className="fas fa-plus"></i>
                    </span>   
                </div>
                }


            </div>
            }

            {!isEmptyCompetitorsState &&
            <div>
 
                <div className='leftMenu'>
                    <h3 className="leftMenuTitle">
                        <i className="fa fa-swords"></i>
                        <span> Competitors</span>
                    </h3>
                    <ol className='itemsContainer'>
                        {competitorsBattleCards.map((battleCard) => 
                            <li onClick={() => changeSelectedBattleCards(battleCard.battleCardId, 'competitors')} key={battleCard.battleCardId} className={selectedBattleCards.includes(battleCard) ? "openedLeftMenuItems" : "closedLeftMenuItems"}>{battleCard.titleValue}</li>
                        )} 
                    </ol> 

                    {selectedBattleCards.length !== 0 &&
                    <div className="closeAllOpenedBattleCardsButton" onClick={() => clearSelectedBattleCards()}>Close all opened battlecards</div>
                    }
                </div>

                {selectedBattleCards.length !== 0 && 
                <div className='addBattleCard' onClick={() => addBattleCardToSectionAndSelectedBattleCards('competitors')} >
                    <span className = "addBattleCardAxeIcon">
                           <i className="fas fa-swords"></i>
                    </span>
                    <span className="addBattleCardPlusIcon">
                        <i className="fas fa-plus"></i>
                    </span>
                </div>
                }

                {selectedBattleCards.length === 0 &&
                <div className='addBattleCard' onClick={() => addBattleCard('competitors')}>
                    <span className = "addBattleCardAxeIcon">
                        <i className="fas fa-swords"></i>
                    </span>
                    <span className="addBattleCardPlusIcon">
                        <i className="fas fa-plus"></i>
                    </span>   
                </div>
                }


            </div>
            }

            {!isEmptyProfilesState &&
            <div>
                
                <div className='leftMenu'>
                    <h3 className="leftMenuTitle">
                        <i className="fa fa-user"></i>
                        <span> Profiles</span>
                    </h3>
                    <ol className='itemsContainer'>
                        {profilesBattleCards.map((battleCard) => 
                            <li onClick={() => changeSelectedBattleCards(battleCard.battleCardId, 'profiles')} key={battleCard.battleCardId} className={selectedBattleCards.includes(battleCard) ? "openedLeftMenuItems" : "closedLeftMenuItems"}>{battleCard.titleValue}</li>
                        )} 
                    </ol> 
                    {selectedBattleCards.length !== 0 &&
                    <div className="closeAllOpenedBattleCardsButton" onClick={() => clearSelectedBattleCards()}>Close all opened battlecards</div>
                    }
                </div>

                {selectedBattleCards.length !== 0 && 
                <div className='addBattleCard' onClick={() => addBattleCardToSectionAndSelectedBattleCards('profiles')} >
                    <span className = "addBattleCardAxeIcon">
                           <i className="fas fa-user"></i>
                    </span>
                    <span className="addBattleCardPlusIcon">
                        <i className="fas fa-plus"></i>
                    </span>
                </div>
                }

                {selectedBattleCards.length === 0 &&
                <div className='addBattleCard' onClick={() => addBattleCard('profiles')}>
                    <span className = "addBattleCardAxeIcon">
                        <i className="fas fa-user"></i>
                    </span>
                    <span className="addBattleCardPlusIcon">
                        <i className="fas fa-plus"></i>
                    </span>   
                </div>
                }

            </div>
            }

            {!isEmptyDiscoveriesState &&
            <div>
                
                <div className='leftMenu'>
                    <h3 className="leftMenuTitle">
                        <i className="fa fa-telescope"></i>
                        <span> Discoveries</span>
                    </h3>
                    <ol className='itemsContainer'>
                        {discoveriesBattleCards.map((battleCard) => 
                            <li onClick={() => changeSelectedBattleCards(battleCard.battleCardId, 'discoveries')} key={battleCard.battleCardId} className={selectedBattleCards.includes(battleCard) ? "openedLeftMenuItems" : "closedLeftMenuItems"}>{battleCard.titleValue}</li>
                        )} 
                    </ol> 
                    {selectedBattleCards.length !== 0 &&
                    <div className="closeAllOpenedBattleCardsButton" onClick={() => clearSelectedBattleCards()}>Close all opened battlecards</div>
                    }
                </div>

                {selectedBattleCards.length !== 0 && 
                <div className='addBattleCard' onClick={() => addBattleCardToSectionAndSelectedBattleCards('discoveries')} >
                    <span className = "addBattleCardAxeIcon">
                           <i className="fas fa-telescope"></i>
                    </span>
                    <span className="addBattleCardPlusIcon">
                        <i className="fas fa-plus"></i>
                    </span>
                </div>
                }

                {selectedBattleCards.length === 0 &&
                <div className='addBattleCard' onClick={() => addBattleCard('discoveries')}>
                    <span className = "addBattleCardAxeIcon">
                    <i className="fas fa-telescope"></i>
                    </span>
                    <span className="addBattleCardPlusIcon">
                        <i className="fas fa-plus"></i>
                    </span>   
                </div>
                }

            </div>
            }

        </div>

        <div className="mainDiv">
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
        <div onClick={() => deleteBattleCard(battleCardId, section)} className="deleteBattleCardButton">
            <span className="battleCardTrash">
                <i className="fa fa-trash"></i>
            </span>
        </div>
        
        <div className="cards">
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'objections')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'objections')} placeholder="Title of Battle Card" className="titleBattleCard">{titleValue}</textarea>        
            <span className="battleCardNameHeader">
                <i className="fa fa-axe-battle"></i>
                <span> Objection</span>
            </span>
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
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'goodQuestion', section)}>Good Question</div>
        <div className='redAddButton' onClick = {() => addCard(battleCardId, 'badQuestion', section)}>Bad Question</div>
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'offerDeal', section)}>Offer Deal</div>
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'checklist', section)}>Checklist</div>
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'commonAnswer', section)}>Common Answer</div>
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'text', section)}>Text</div>
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'goodArguments', section)}>Good Arguments</div>
        <div className='redAddButton' onClick = {() => addCard(battleCardId, 'badArguments', section)}>Bad Arguments</div>
    </div>
)


//////////////////////  COMPETITORS /////////////////////

const CompetitorsBattleCards = ({addBattleCard, competitorsBattleCards, deleteBattleCard, modifyBattleCardTitle, triggerAddCardState, addCard}) => (
    
    <div>
        {competitorsBattleCards.map((battleCard) => 
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
        <div onClick={() => deleteBattleCard(battleCardId, section)} className="deleteBattleCardButton">
            <span className="battleCardTrash">
                <i className="fa fa-trash"></i>
            </span>
        </div>

        <div className="cards">
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'competitors')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'competitors')} placeholder="Title of Battle Card" className="titleBattleCard">{titleValue}</textarea>        
            <span className="battleCardNameHeader">
                <i className="fa fa-swords"></i>
                <span> Competitor</span>
            </span>

            
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
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'battlePitch', section)}>Battle Pitch</div>
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'offerDeal', section)}>Offer Deal</div>
        <div className='redAddButton' onClick = {() => addCard(battleCardId, 'warning', section)}>Warning</div>
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'howWeWin', section)}>How We Win</div>
        <div className='redAddButton' onClick = {() => addCard(battleCardId, 'howWeLose', section)}>How We Lose</div>
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
        <div onClick={() => deleteBattleCard(battleCardId, section)} className="deleteBattleCardButton">
            <span className="battleCardTrash">
                <i className="fa fa-trash"></i>
            </span>
        </div>

        <div className="cards">
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'profiles')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'profiles')} placeholder="Title of Battle Card" className="titleBattleCard">{titleValue}</textarea>        
            <span className="battleCardNameHeader">
                <i className="fa fa-user"></i>
                <span> Profile</span>
            </span>
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
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'battlePitch', section)}>Battle Pitch</div>
        <div className='redAddButton' onClick = {() => addCard(battleCardId, 'warning', section)}>Warning</div>
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'checklist', section)}>Checklist</div>
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'positiveDifferences', section)}>Positive Differences</div>
        <div className='redAddButton' onClick = {() => addCard(battleCardId, 'negativeDifferences', section)}>Negative Differences</div>
    </div>
)

//////////////////////  DISCOVERIES /////////////////////

const DiscoveriesBattleCards = ({addBattleCard, discoveriesBattleCards, deleteBattleCard, modifyBattleCardTitle, triggerAddCardState, addCard}) => (
    
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
        <div onClick={() => deleteBattleCard(battleCardId, section)} className="deleteBattleCardButton">
            <span className="battleCardTrash">
                <i className="fa fa-trash"></i>
            </span>
        </div>

        <div className="cards">
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'discoveries')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'discoveries')} placeholder="Title of Battle Card" className="titleBattleCard">{titleValue}</textarea>        
            <span className="battleCardNameHeader">
                <i className="fa fa-telescope"></i>
                <span> Discovery</span>
            </span>
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
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'commonAnswer', section)}>Common Answer</div>
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'goodPhrasing', section)}>Good Phrasing</div>
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'checklist', section)}>Checklist</div>
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'whenToAsk', section)}>When To Ask</div>
        <div className='redAddButton' onClick = {() => addCard(battleCardId, 'whenNotToAsk', section)}>When Not To Ask</div>
    </div>
)


/////////////////// ADD CARD div ////////////////
const AddCardButton = ({triggerAddCardState, battleCardId, section}) => (
    <div className="addCardButton" onClick={() => triggerAddCardState(battleCardId, section)}>
        <span className="addCardIcon">
            <i className="fa fa-plus"></i>
        </span>
    </div>
) 


const mapState = (state) => {

    return ({
        objectionsBattleCards: state.battleCards.objectionsBattleCards,
        isEmptyObjectionsState: state.battleCards.isEmptyObjectionsState,

        competitorsBattleCards: state.battleCards.competitorsBattleCards,
        isEmptyCompetitorsState: state.battleCards.isEmptyCompetitorsState,

        profilesBattleCards: state.battleCards.profilesBattleCards,
        isEmptyProfilesState: state.battleCards.isEmptyProfilesState,

        discoveriesBattleCards: state.battleCards.discoveriesBattleCards,
        isEmptyDiscoveriesState: state.battleCards.isEmptyDiscoveriesState,
        
        selectedBattleCards: state.battleCards.selectedBattleCards
    })
}

export default connect(mapState, { addBattleCard, deleteBattleCard, triggerSectionState, 
                        modifyBattleCardTitle, changeSelectedBattleCards, clearSelectedBattleCards,
                        addBattleCardToSectionAndSelectedBattleCards, 
                        triggerAddCardState, addCard})(BattleCardsMenu);