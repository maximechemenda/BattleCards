import React from 'react'
import { addBattleCard } from '../redux/actions'
import { deleteBattleCard } from '../redux/actions'
import { triggerSectionState } from '../redux/actions'
import { modifyBattleCardTitle } from '../redux/actions'
import { changeSelectedBattleCards } from '../redux/actions'
import { clearSelectedBattleCards } from '../redux/actions'
import { addCard } from '../redux/actions'
import { addBattleCardToSectionAndSelectedBattleCards } from '../redux/actions'
import { triggerAddCardState, triggerBigSectionState } from '../redux/actions'
import { addBlueHeaderValue, editBlueHeaderValue } from '../redux/actions'
import { connect } from 'react-redux'
import { clearSelectedCaseStudiesBattleCards } from '../redux/actions'
import { editSearchBoxValue } from '../redux/actions'
import '../App.css'  
import Cards from './Cards'



const BattleCardsMenu = ({triggerSectionState, addBattleCard, deleteBattleCard,
        objectionsBattleCards, isEmptyObjectionsState,
        competitorsBattleCards, isEmptyCompetitorsState,
        profilesBattleCards, isEmptyProfilesState,
        discoveriesBattleCards, isEmptyDiscoveriesState,
        modifyBattleCardTitle,
        changeSelectedBattleCards, selectedBattleCards, clearSelectedBattleCards,
        addBattleCardToSectionAndSelectedBattleCards, triggerAddCardState, addCard,
        isEmptyBattleCardsState, isEmptyCaseStudiesState, triggerBigSectionState,
        caseStudiesBattleCards, selectedCaseStudiesBattleCards,
        clearSelectedCaseStudiesBattleCards, addBlueHeaderValue, editBlueHeaderValue,
        searchBoxValue, editSearchBoxValue}) => (

    <div>







        <div className="smallIndex">
            <div className={isEmptyBattleCardsState ? "unselectedSmallIndexButton" : "selectedSmallIndexButton"} onClick={() => triggerBigSectionState('battleCards')}>Battlecards</div>
            <div className={isEmptyCaseStudiesState ? "unselectedSmallIndexButton" : "selectedSmallIndexButton"} onClick={() => triggerBigSectionState('caseStudies')}>Case Studies</div>
            <div>
                <i className="fa fa-search"></i>
                <input className="searchBar" placeholder='Search' 
                    onKeyDown={(e) => editSearchBoxValue(e.target.value)}
                    onBlur={(e) => editSearchBoxValue(e.target.value)}>
                    
                </input>
            </div>
            
        </div>



        {!isEmptyCaseStudiesState &&

        <div>
            <div className='leftMenu'>
                <h3 className="leftMenuTitle">
                    <i className="fa fa-axe-battle"></i>
                    <span> Case Studies</span>
                </h3>
                <ol className='itemsContainer'>
                    {caseStudiesBattleCards.map((battleCard) => 
                        <li onClick={() => changeSelectedBattleCards(battleCard.battleCardId, 'caseStudies')} key={battleCard.battleCardId} className={selectedCaseStudiesBattleCards.includes(battleCard) ? "openedLeftMenuItems" : "closedLeftMenuItems"}>
                            <span>{battleCard.titleValue}</span>
                        </li>
                    )} 
                </ol> 

                {selectedCaseStudiesBattleCards.length !== 0 &&
                <div className="closeAllOpenedBattleCardsButton" onClick={() => clearSelectedCaseStudiesBattleCards()}>Close all opened case studies</div>
                }
                </div>



                {selectedCaseStudiesBattleCards.length !== 0 && 
                    <div className='addBattleCard' onClick={() => addBattleCardToSectionAndSelectedBattleCards('caseStudies')} >
                        <span className = "addBattleCardAxeIcon">
                                <i className="fas fa-axe-battle"></i>
                        </span>
                        <span className="addBattleCardPlusIcon">
                            <i className="fas fa-plus"></i>
                        </span>
                    </div>
                    }

                    {selectedCaseStudiesBattleCards.length === 0 &&
                    <div className='addBattleCard' onClick={() => addBattleCard('caseStudies')}>
                        <span className = "addBattleCardAxeIcon">
                            <i className="fas fa-axe-battle"></i>
                        </span>
                        <span className="addBattleCardPlusIcon">
                            <i className="fas fa-plus"></i>
                        </span>   
                    </div>
                    }




                    <div className="mainDiv">
                        {(selectedCaseStudiesBattleCards.length === 0) && 
                        <CaseStudiesBattleCards
                        addBattleCard={addBattleCard} 
                        deleteBattleCard={deleteBattleCard}
                        modifyBattleCardTitle={modifyBattleCardTitle}
                        caseStudiesBattleCards={caseStudiesBattleCards}
                        triggerAddCardState={triggerAddCardState}
                        addCard={addCard}
                        addBlueHeaderValue={addBlueHeaderValue}
                        editBlueHeaderValue={editBlueHeaderValue}
                        />}

                        {(selectedCaseStudiesBattleCards.length !== 0) &&
                        <SelectedCaseStudiesBattleCards 
                        selectedCaseStudiesBattleCards={selectedCaseStudiesBattleCards}
                        deleteBattleCard={deleteBattleCard}
                        modifyBattleCardTitle={modifyBattleCardTitle}
                        triggerAddCardState={triggerAddCardState}
                        addCard={addCard}
                        addBlueHeaderValue={addBlueHeaderValue}
                        editBlueHeaderValue={editBlueHeaderValue}
                        />}
                </div>
        </div>
        }

        {!isEmptyBattleCardsState &&

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
                    addBlueHeaderValue={addBlueHeaderValue}
                    editBlueHeaderValue={editBlueHeaderValue}
                    searchBoxValue={searchBoxValue}
                    />}

                    {(selectedBattleCards.length !== 0) &&
                    <SelectedBattleCards 
                    selectedBattleCards={selectedBattleCards}
                    deleteBattleCard={deleteBattleCard}
                    modifyBattleCardTitle={modifyBattleCardTitle}
                    triggerAddCardState={triggerAddCardState}
                    addCard={addCard}
                    addBlueHeaderValue={addBlueHeaderValue}
                    editBlueHeaderValue={editBlueHeaderValue}
                    searchBoxValue={searchBoxValue}
                    />}
                </div>
            </div>
        }

        
        
    </div>
)    




const SelectedCaseStudiesBattleCards = ({addBlueHeaderValue, editBlueHeaderValue, selectedCaseStudiesBattleCards, deleteBattleCard, modifyBattleCardTitle, addCard}) => (
    <div>
        
        {selectedCaseStudiesBattleCards.map(battleCard => (
            <div>
                <CaseStudiesBattleCard 
                cards={battleCard.cards}
                isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                deleteBattleCard={deleteBattleCard}
                battleCardId={battleCard.battleCardId}
                section={battleCard.section}
                modifyBattleCardTitle={modifyBattleCardTitle}
                titleValue={battleCard.titleValue}
                triggerAddCardState={triggerAddCardState}
                addCard={addCard}
                blueHeaderValues={battleCard.blueHeaderValues}
                redHeaderValues={battleCard.redHeaderValues}
                addBlueHeaderValue={addBlueHeaderValue}
                editBlueHeaderValue={editBlueHeaderValue}
                />
            </div>

            
        ))}
    </div>
    
)


const SelectedBattleCards = ({searchBoxValue, addBlueHeaderValue, editBlueHeaderValue, selectedBattleCards, deleteBattleCard, modifyBattleCardTitle, addCard}) => (
    <div>
        
        {selectedBattleCards.map(battleCard => (
            <div>
                {battleCard.section === 'objections' && 
                    <ObjectionsBattleCard 
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={battleCard.section}
                    modifyBattleCardTitle={modifyBattleCardTitle}
                    titleValue={battleCard.titleValue}
                    triggerAddCardState={triggerAddCardState}
                    addCard={addCard}
                    blueHeaderValues={battleCard.blueHeaderValues}
                    redHeaderValues={battleCard.redHeaderValues}
                    addBlueHeaderValue={addBlueHeaderValue}
                    editBlueHeaderValue={editBlueHeaderValue}
                    searchBoxValue={searchBoxValue}
                    />
                }

                
                {battleCard.section === 'competitors' &&
                    <CompetitorsBattleCard 
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={battleCard.section}
                    modifyBattleCardTitle={modifyBattleCardTitle}
                    titleValue={battleCard.titleValue}
                    triggerAddCardState={triggerAddCardState}
                    addCard={addCard}
                    blueHeaderValues={battleCard.blueHeaderValues}
                    redHeaderValues={battleCard.redHeaderValues}
                    addBlueHeaderValue={addBlueHeaderValue}
                    editBlueHeaderValue={editBlueHeaderValue}
                    />
                }

                {battleCard.section === 'caseStudies' &&
                    <CaseStudiesBattleCard 
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={battleCard.section}
                    modifyBattleCardTitle={modifyBattleCardTitle}
                    titleValue={battleCard.titleValue}
                    triggerAddCardState={triggerAddCardState}
                    addCard={addCard}
                    blueHeaderValues={battleCard.blueHeaderValues}
                    redHeaderValues={battleCard.redHeaderValues}
                    addBlueHeaderValue={addBlueHeaderValue}
                    editBlueHeaderValue={editBlueHeaderValue}
                    />
                }




            {/* if (battleCard.section === 'profiles') {
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
            } */}

            </div>

            
        ))}
    </div>
    
)

const IndependentBattleCards = ({addBattleCard, deleteBattleCard, modifyBattleCardTitle,
                                isEmptyObjectionsState, isEmptyCompetitorsState, isEmptyProfilesState, isEmptyDiscoveriesState,
                                objectionsBattleCards, competitorsBattleCards, profilesBattleCards, discoveriesBattleCards,
                                triggerAddCardState, addCard, addBlueHeaderValue, editBlueHeaderValue, searchBoxValue}) => (
    <div>

        {!isEmptyObjectionsState &&
        <ObjectionsBattleCards 
        addBattleCard={addBattleCard}
        objectionsBattleCards={objectionsBattleCards}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        triggerAddCardState={triggerAddCardState}
        addCard={addCard}
        addBlueHeaderValue={addBlueHeaderValue}
        editBlueHeaderValue={editBlueHeaderValue}
        searchBoxValue={searchBoxValue}
        />}

        {!isEmptyCompetitorsState && 
        <CompetitorsBattleCards 
        addBattleCard={addBattleCard}
        competitorsBattleCards={competitorsBattleCards}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        triggerAddCardState={triggerAddCardState}
        addCard={addCard}
        addBlueHeaderValue={addBlueHeaderValue}
        editBlueHeaderValue={editBlueHeaderValue}
        />}

        {!isEmptyProfilesState && 
        <ProfilesBattleCards 
        addBattleCard={addBattleCard}
        profilesBattleCards={profilesBattleCards}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        triggerAddCardState={triggerAddCardState}
        addCard={addCard}
        addBlueHeaderValue={addBlueHeaderValue}
        editBlueHeaderValue={editBlueHeaderValue}
        />}

        {!isEmptyDiscoveriesState && 
        <DiscoveriesBattleCards 
        addBattleCard={addBattleCard}
        discoveriesBattleCards={discoveriesBattleCards}
        deleteBattleCard={deleteBattleCard}
        modifyBattleCardTitle={modifyBattleCardTitle}
        triggerAddCardState={triggerAddCardState}
        addCard={addCard}
        addBlueHeaderValue={addBlueHeaderValue}
        editBlueHeaderValue={editBlueHeaderValue}
        />}

    </div>
)

//////////////////////  OBJECTIONS /////////////////////

const ObjectionsBattleCards = ({searchBoxValue, editBlueHeaderValue, addBlueHeaderValue, addBattleCard, objectionsBattleCards, deleteBattleCard, modifyBattleCardTitle, triggerAddCardState, addCard}) => (
    
    <div>
        {console.log(searchBoxValue)}


        {searchBoxValue.length !== 0 &&
        <div>
            {console.log('entering searchBox part')}
            {objectionsBattleCards.map(battleCard => {
                var title = battleCard.titleValue;
                var cardTexts = battleCard.cards.map(card => card.text);
                var isContained = false;

                if (title.includes(searchBoxValue)) {
                    isContained = true;
                }

                cardTexts.forEach(text => {
                    if (text.includes(searchBoxValue)) {
                        isContained = true;
                    }
                })

                if (isContained) {
                    return <ObjectionsBattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={'objections'}
                    modifyBattleCardTitle={modifyBattleCardTitle}
                    titleValue={battleCard.titleValue}
                    triggerAddCardState={triggerAddCardState}
                    addCard={addCard}
                    blueHeaderValues={battleCard.blueHeaderValues}
                    redHeaderValues={battleCard.redHeaderValues}
                    addBlueHeaderValue={addBlueHeaderValue}
                    editBlueHeaderValue={editBlueHeaderValue}
                    />
                }
                
            })}
        </div>
        }
    


        {searchBoxValue.length === 0 &&
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
                            blueHeaderValues={battleCard.blueHeaderValues}
                            redHeaderValues={battleCard.redHeaderValues}
                            addBlueHeaderValue={addBlueHeaderValue}
                            editBlueHeaderValue={editBlueHeaderValue}
                            />
                </div> 
            )}</div>
        
        }
    </div>



        
)

const ObjectionsBattleCard = ({editBlueHeaderValue, blueHeaderValues, redHeaderValues, cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section, modifyBattleCardTitle, titleValue, triggerAddCardState, addCard}) => (

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

            {/* BLUE HEADER VALUES */}
            <div style={{width: '50%', float: 'left'}}>
                <div className="blueLine"></div>

                <span className="battleCardBlueHeaderTitle">
                    GOOD ARGUMENTS
                </span>
                
                <div>
                    {blueHeaderValues.map(header => 
                        <div style={{marginBottom: '-18px'}}>
                            <span style={{float: 'left', marginTop: '10px'}}>●</span>
                            <textarea
                                placeholder = 'Text goes here'
                                className="blueHeaderValue"
                                style={{height: header.height}} id={header.headerId} 
                                onKeyDown={(e) => editBlueHeaderValue(e.target.value, battleCardId, header.headerId, section, e.keyCode, 'blue')}
                                onBlur={(e) => editBlueHeaderValue(e.target.value, battleCardId, header.headerId, section, e.charCode, 'blue')}>
                                {header.headerText}
                            </textarea>
                        </div> 
                    
                    )}
                </div>
            </div>

            {/* RED HEADER VALUES */}
            <div style={{width: '50%', float: 'right'}}>
                <div className="redLine"></div>

                <span className="battleCardRedHeaderTitle">
                    BAD ARGUMENTS
                </span>
                
                <div>
                    {redHeaderValues.map(header => 
                        <div style={{marginBottom: '-18px'}}>
                            <span style={{float: 'left', marginTop: '10px'}}>●</span>
                            <textarea
                                placeholder = 'Text goes here'
                                className="redHeaderValue"
                                style={{height: header.height}} id={header.headerId} 
                                onKeyDown={(e) => editBlueHeaderValue(e.target.value, battleCardId, header.headerId, section, e.keyCode, 'red')}
                                onBlur={(e) => editBlueHeaderValue(e.target.value, battleCardId, header.headerId, section, e.charCode, 'red')}>
                                {header.headerText}
                            </textarea>
                        </div> 
                    
                    )}
                </div>
            </div>

            

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
    </div>
)



//////////////////////  CASE STUDIES /////////////////////

const CaseStudiesBattleCards = ({editBlueHeaderValue, addBlueHeaderValue, addBattleCard, caseStudiesBattleCards, deleteBattleCard, modifyBattleCardTitle, triggerAddCardState, addCard}) => (
    
    <div>
        {caseStudiesBattleCards.map((battleCard) => 
        <div key={battleCard.battleCardId}>
                <CaseStudiesBattleCard
                    cards={battleCard.cards}
                    isEmptyAddButtonState={battleCard.isEmptyAddButtonState}
                    deleteBattleCard={deleteBattleCard}
                    battleCardId={battleCard.battleCardId}
                    section={'caseStudies'}
                    modifyBattleCardTitle={modifyBattleCardTitle}
                    titleValue={battleCard.titleValue}
                    triggerAddCardState={triggerAddCardState}
                    addCard={addCard}
                    blueHeaderValues={battleCard.blueHeaderValues}
                    redHeaderValues={battleCard.redHeaderValues}
                    addBlueHeaderValue={addBlueHeaderValue}
                    editBlueHeaderValue={editBlueHeaderValue}
                    />
        </div> 
    )}</div>
)

const CaseStudiesBattleCard = ({editBlueHeaderValue, blueHeaderValues, redHeaderValues, cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section, modifyBattleCardTitle, titleValue, triggerAddCardState, addCard}) => (

    <div className="battleCard">   
        <div onClick={() => deleteBattleCard(battleCardId, section)} className="deleteBattleCardButton">
            <span className="battleCardTrash">
                <i className="fa fa-trash"></i>
            </span>
        </div>
        
        <div className="cards">
            <textarea onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'caseStudies')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'caseStudies')} placeholder="Title of Battle Card" className="titleBattleCard">{titleValue}</textarea>        
            <span className="battleCardNameHeader">
                <i className="fa fa-axe-battle"></i>
                <span> Case Study</span>
            </span>


            {/* BLUE HEADER VALUES */}
            <div style={{width: '50%', float: 'left'}}>
                <div className="blueLine"></div>

                <span className="battleCardBlueHeaderTitle">
                    SUCCESSES
                </span>
                
                <div>
                    {blueHeaderValues.map(header => 
                        <div style={{marginBottom: '-18px'}}>
                            <span style={{float: 'left', marginTop: '10px'}}>●</span>
                            <textarea
                                placeholder = 'Text goes here'
                                className="blueHeaderValue"
                                style={{height: header.height}} id={header.headerId} 
                                onKeyDown={(e) => editBlueHeaderValue(e.target.value, battleCardId, header.headerId, section, e.keyCode, 'blue')}
                                onBlur={(e) => editBlueHeaderValue(e.target.value, battleCardId, header.headerId, section, e.charCode, 'blue')}>
                                {header.headerText}
                            </textarea>
                        </div> 
                    
                    )}
                </div>
            </div>

            {/* RED HEADER VALUES */}
            <div style={{width: '50%', float: 'right'}}>
                <div className="redLine"></div>

                <span className="battleCardRedHeaderTitle">
                    LIMITATIONS
                </span>
                
                <div>
                    {redHeaderValues.map(header => 
                        <div style={{marginBottom: '-18px'}}>
                            <span style={{float: 'left', marginTop: '10px'}}>●</span>
                            <textarea
                                placeholder = 'Text goes here'
                                className="redHeaderValue"
                                style={{height: header.height}} id={header.headerId} 
                                onKeyDown={(e) => editBlueHeaderValue(e.target.value, battleCardId, header.headerId, section, e.keyCode, 'red')}
                                onBlur={(e) => editBlueHeaderValue(e.target.value, battleCardId, header.headerId, section, e.charCode, 'red')}>
                                {header.headerText}
                            </textarea>
                        </div> 
                    
                    )}
                </div>
            </div>



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
            <NewCaseStudiesCardMenu 
                addCard = {addCard}
                battleCardId={battleCardId}
                section={section}
            />} 
        </div>

    </div>
)

const NewCaseStudiesCardMenu = ({addCard, battleCardId, section}) => (
    <div className="addCardMenu">
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'checklist', section)}>Checklist</div>
        <div className='unfilledAddButton' onClick = {() => addCard(battleCardId, 'keyTakeaway', section)}>Key Takeaway</div>
    </div>
)


//////////////////////  COMPETITORS /////////////////////

const CompetitorsBattleCards = ({editBlueHeaderValue, addBlueHeaderValue, addBattleCard, competitorsBattleCards, deleteBattleCard, modifyBattleCardTitle, triggerAddCardState, addCard}) => (
    
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
                    blueHeaderValues={battleCard.blueHeaderValues}
                    redHeaderValues={battleCard.redHeaderValues}
                    addBlueHeaderValue={addBlueHeaderValue}
                    editBlueHeaderValue={editBlueHeaderValue}
                    />
        </div> 
    )}</div>
)

const CompetitorsBattleCard = ({editBlueHeaderValue, blueHeaderValues, redHeaderValues, cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section, modifyBattleCardTitle, titleValue, triggerAddCardState, addCard}) => (

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

            {/* BLUE HEADER VALUES */}
            <div style={{width: '50%', float: 'left'}}>
                <div className="blueLine"></div>

                <span className="battleCardBlueHeaderTitle">
                    HOW WE WIN
                </span>
                
                <div>
                    {blueHeaderValues.map(header => 
                        <div style={{marginBottom: '-18px'}}>
                            <span style={{float: 'left', marginTop: '10px'}}>●</span>
                            <textarea
                                placeholder = 'Text goes here'
                                className="blueHeaderValue"
                                style={{height: header.height}} id={header.headerId} 
                                onKeyDown={(e) => editBlueHeaderValue(e.target.value, battleCardId, header.headerId, section, e.keyCode, 'blue')}
                                onBlur={(e) => editBlueHeaderValue(e.target.value, battleCardId, header.headerId, section, e.charCode, 'blue')}>
                                {header.headerText}
                            </textarea>
                        </div> 
                    
                    )}
                </div>
            </div>

            {/* RED HEADER VALUES */}
            <div style={{width: '50%', float: 'right'}}>
                <div className="redLine"></div>

                <span className="battleCardRedHeaderTitle">
                    HOW WE LOSE
                </span>
                
                <div>
                    {redHeaderValues.map(header => 
                        <div style={{marginBottom: '-18px'}}>
                            <span style={{float: 'left', marginTop: '10px'}}>●</span>
                            <textarea
                                placeholder = 'Text goes here'
                                className="redHeaderValue"
                                style={{height: header.height}} id={header.headerId} 
                                onKeyDown={(e) => editBlueHeaderValue(e.target.value, battleCardId, header.headerId, section, e.keyCode, 'red')}
                                onBlur={(e) => editBlueHeaderValue(e.target.value, battleCardId, header.headerId, section, e.charCode, 'red')}>
                                {header.headerText}
                            </textarea>
                        </div> 
                    
                    )}
                </div>
            </div>

            
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
        objectionsBattleCards: state.data.battleCards.objectionsBattleCards,
        isEmptyObjectionsState: state.data.battleCards.isEmptyObjectionsState,

        competitorsBattleCards: state.data.battleCards.competitorsBattleCards,
        isEmptyCompetitorsState: state.data.battleCards.isEmptyCompetitorsState,

        profilesBattleCards: state.data.battleCards.profilesBattleCards,
        isEmptyProfilesState: state.data.battleCards.isEmptyProfilesState,

        discoveriesBattleCards: state.data.battleCards.discoveriesBattleCards,
        isEmptyDiscoveriesState: state.data.battleCards.isEmptyDiscoveriesState,
        
        //selectedBattleCards: state.data.battleCards.selectedBattleCards,
        selectedBattleCards: state.selectedBattleCards,
        selectedCaseStudiesBattleCards: state.selectedCaseStudiesBattleCards,

        caseStudiesBattleCards: state.data.caseStudies.caseStudiesBattleCards,

        isEmptyBattleCardsState: state.data.isEmptyBattleCardsState,
        isEmptyCaseStudiesState: state.data.isEmptyCaseStudiesState,
        searchBoxValue: state.searchBoxValue
    })
}

export default connect(mapState, { addBattleCard, deleteBattleCard, triggerSectionState, 
                        modifyBattleCardTitle, changeSelectedBattleCards, clearSelectedBattleCards,
                        addBattleCardToSectionAndSelectedBattleCards, 
                        triggerAddCardState, triggerBigSectionState, addCard,
                        clearSelectedCaseStudiesBattleCards, addBlueHeaderValue,
                        editBlueHeaderValue, editSearchBoxValue})(BattleCardsMenu);