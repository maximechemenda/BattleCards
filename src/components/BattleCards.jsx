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
            <div className="searchBarContainer">
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
                        searchBoxValue={searchBoxValue}
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
        searchBoxValue={searchBoxValue}
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








        {searchBoxValue.length !== 0 &&
        <div>
            {objectionsBattleCards.map(battleCard => {

                var stopWords = ["'ll","'tis","'twas","'ve","a","a's","able","ableabout","about","above","abroad","abst","accordance","according","accordingly","across","act","actually","ad","added","adj","adopted","ae","af","affected","affecting","affects","after","afterwards","ag","again","against","ago","ah","ahead","ai","ain't","aint","al","all","allow","allows","almost","alone","along","alongside","already","also","although","always","am","amid","amidst","among","amongst","amoungst","amount","an","and","announce","another","any","anybody","anyhow","anymore","anyone","anything","anyway","anyways","anywhere","ao","apart","apparently","appear","appreciate","appropriate","approximately","aq","ar","are","area","areas","aren","aren't","arent","arise","around","arpa","as","aside","ask","asked","asking","asks","associated","at","au","auth","available","aw","away","awfully","az","b","ba","back","backed","backing","backs","backward","backwards","bb","bd","be","became","because","become","becomes","becoming","been","before","beforehand","began","begin","beginning","beginnings","begins","behind","being","beings","believe","below","beside","besides","best","better","between","beyond","bf","bg","bh","bi","big","bill","billion","biol","bj","bm","bn","bo","both","bottom","br","brief","briefly","bs","bt","but","buy","bv","bw","by","bz","c","c'mon","c's","ca","call","came","can","can't","cannot","cant","caption","case","cases","cause","causes","cc","cd","certain","certainly","cf","cg","ch","changes","ci","ck","cl","clear","clearly","click","cm","cmon","cn","co","co.","com","come","comes","computer","con","concerning","consequently","consider","considering","contain","containing","contains","copy","corresponding","could","could've","couldn","couldn't","couldnt","course","cr","cry","cs","cu","currently","cv","cx","cy","cz","d","dare","daren't","darent","date","de","dear","definitely","describe","described","despite","detail","did","didn","didn't","didnt","differ","different","differently","directly","dj","dk","dm","do","does","doesn","doesn't","doesnt","doing","don","don't","done","dont","doubtful","down","downed","downing","downs","downwards","due","during","dz","e","each","early","ec","ed","edu","ee","effect","eg","eh","eight","eighty","either","eleven","else","elsewhere","empty","end","ended","ending","ends","enough","entirely","er","es","especially","et","et-al","etc","even","evenly","ever","evermore","every","everybody","everyone","everything","everywhere","ex","exactly","example","except","f","face","faces","fact","facts","fairly","far","farther","felt","few","fewer","ff","fi","fifteen","fifth","fifty","fify","fill","find","finds","fire","first","five","fix","fj","fk","fm","fo","followed","following","follows","for","forever","former","formerly","forth","forty","forward","found","four","fr","free","from","front","full","fully","further","furthered","furthering","furthermore","furthers","fx","g","ga","gave","gb","gd","ge","general","generally","get","gets","getting","gf","gg","gh","gi","give","given","gives","giving","gl","gm","gmt","gn","go","goes","going","gone","good","goods","got","gotten","gov","gp","gq","gr","great","greater","greatest","greetings","group","grouped","grouping","groups","gs","gt","gu","gw","gy","h","had","hadn't","hadnt","half","happens","hardly","has","hasn","hasn't","hasnt","have","haven","haven't","havent","having","he","he'd","he'll","he's","hed","hell","hello","help","hence","her","here","here's","hereafter","hereby","herein","heres","hereupon","hers","herself","herse”","hes","hi","hid","high","higher","highest","him","himself","himse”","his","hither","hk","hm","hn","home","homepage","hopefully","how","how'd","how'll","how's","howbeit","however","hr","ht","htm","html","http","hu","hundred","i","i'd","i'll","i'm","i've","i.e.","id","ie","if","ignored","ii","il","ill","im","immediate","immediately","importance","important","in","inasmuch","inc","inc.","indeed","index","indicate","indicated","indicates","information","inner","inside","insofar","instead","int","interest","interested","interesting","interests","into","invention","inward","io","iq","ir","is","isn","isn't","isnt","it","it'd","it'll","it's","itd","itll","its","itself","itse”","ive","j","je","jm","jo","join","jp","just","k","ke","keep","keeps","kept","keys","kg","kh","ki","kind","km","kn","knew","know","known","knows","kp","kr","kw","ky","kz","l","la","large","largely","last","lately","later","latest","latter","latterly","lb","lc","least","length","less","lest","let","let's","lets","li","like","liked","likely","likewise","line","little","lk","ll","long","longer","longest","look","looking","looks","low","lower","lr","ls","lt","ltd","lu","lv","ly","m","ma","made","mainly","make","makes","making","man","many","may","maybe","mayn't","maynt","mc","md","me","mean","means","meantime","meanwhile","member","members","men","merely","mg","mh","microsoft","might","might've","mightn't","mightnt","mil","mill","million","mine","minus","miss","mk","ml","mm","mn","mo","more","moreover","most","mostly","move","mp","mq","mr","mrs","ms","msie","mt","mu","much","mug","must","must've","mustn't","mustnt","mv","mw","mx","my","myself","myse”","mz","n","na","name","namely","nay","nc","nd","ne","near","nearly","necessarily","necessary","need","needed","needing","needn't","neednt","needs","neither","net","netscape","never","neverf","neverless","nevertheless","new","newer","newest","next","nf","ng","ni","nine","ninety","nl","no","no-one","nobody","non","none","nonetheless","noone","nor","normally","nos","not","noted","nothing","notwithstanding","novel","now","nowhere","np","nr","nu","null","number","numbers","nz","o","obtain","obtained","obviously","of","off","often","oh","ok","okay","old","older","oldest","om","omitted","on","once","one","one's","ones","only","onto","open","opened","opening","opens","opposite","or","ord","order","ordered","ordering","orders","org","other","others","otherwise","ought","oughtn't","oughtnt","our","ours","ourselves","out","outside","over","overall","owing","own","p","pa","page","pages","part","parted","particular","particularly","parting","parts","past","pe","per","perhaps","pf","pg","ph","pk","pl","place","placed","places","please","plus","pm","pmid","pn","point","pointed","pointing","points","poorly","possible","possibly","potentially","pp","pr","predominantly","present","presented","presenting","presents","presumably","previously","primarily","probably","problem","problems","promptly","proud","provided","provides","pt","put","puts","pw","py","q","qa","que","quickly","quite","qv","r","ran","rather","rd","re","readily","really","reasonably","recent","recently","ref","refs","regarding","regardless","regards","related","relatively","research","reserved","respectively","resulted","resulting","results","right","ring","ro","room","rooms","round","ru","run","rw","s","sa","said","same","saw","say","saying","says","sb","sc","sd","se","sec","second","secondly","seconds","section","see","seeing","seem","seemed","seeming","seems","seen","sees","self","selves","sensible","sent","serious","seriously","seven","seventy","several","sg","sh","shall","shan't","shant","she","she'd","she'll","she's","shed","shell","shes","should","should've","shouldn","shouldn't","shouldnt","show","showed","showing","shown","showns","shows","si","side","sides","significant","significantly","similar","similarly","since","sincere","site","six","sixty","sj","sk","sl","slightly","sm","small","smaller","smallest","sn","so","some","somebody","someday","somehow","someone","somethan","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specifically","specified","specify","specifying","sr","st","state","states","still","stop","strongly","su","sub","substantially","successfully","such","sufficiently","suggest","sup","sure","sv","sy","system","sz","t","t's","take","taken","taking","tc","td","tell","ten","tends","test","text","tf","tg","th","than","thank","thanks","thanx","that","that'll","that's","that've","thatll","thats","thatve","the","their","theirs","them","themselves","then","thence","there","there'd","there'll","there're","there's","there've","thereafter","thereby","thered","therefore","therein","therell","thereof","therere","theres","thereto","thereupon","thereve","these","they","they'd","they'll","they're","they've","theyd","theyll","theyre","theyve","thick","thin","thing","things","think","thinks","third","thirty","this","thorough","thoroughly","those","thou","though","thoughh","thought","thoughts","thousand","three","throug","through","throughout","thru","thus","til","till","tip","tis","tj","tk","tm","tn","to","today","together","too","took","top","toward","towards","tp","tr","tried","tries","trillion","truly","try","trying","ts","tt","turn","turned","turning","turns","tv","tw","twas","twelve","twenty","twice","two","tz","u","ua","ug","uk","um","un","under","underneath","undoing","unfortunately","unless","unlike","unlikely","until","unto","up","upon","ups","upwards","us","use","used","useful","usefully","usefulness","uses","using","usually","uucp","uy","uz","v","va","value","various","vc","ve","versus","very","vg","vi","via","viz","vn","vol","vols","vs","vu","w","want","wanted","wanting","wants","was","wasn","wasn't","wasnt","way","ways","we","we'd","we'll","we're","we've","web","webpage","website","wed","welcome","well","wells","went","were","weren","weren't","werent","weve","wf","what","what'd","what'll","what's","what've","whatever","whatll","whats","whatve","when","when'd","when'll","when's","whence","whenever","where","where'd","where'll","where's","whereafter","whereas","whereby","wherein","wheres","whereupon","wherever","whether","which","whichever","while","whilst","whim","whither","who","who'd","who'll","who's","whod","whoever","whole","wholl","whom","whomever","whos","whose","why","why'd","why'll","why's","widely","width","will","willing","wish","with","within","without","won","won't","wonder","wont","words","work","worked","working","works","world","would","would've","wouldn","wouldn't","wouldnt","ws","www","x","y","ye","year","years","yes","yet","you","you'd","you'll","you're","you've","youd","youll","young","younger","youngest","your","youre","yours","yourself","yourselves","youve","yt","yu","z","za","zero","zm","z",]
                var searchBoxArray = (searchBoxValue.trim()).split(' ')
                var title = battleCard.titleValue;
                var cardTexts = battleCard.cards.map(card => card.text);
                var blueHeaderTexts = battleCard.blueHeaderValues.map(header => header.headerText)
                var redHeaderTexts = battleCard.redHeaderValues.map(header => header.headerText)
                var isContained = false;

                searchBoxArray.forEach(wordValue => {
                    if (stopWords.indexOf(wordValue.toLowerCase()) === -1 && title.toLowerCase().includes(wordValue.toLowerCase())) {
                        isContained = true;
                    }
                })

                searchBoxArray.forEach(wordValue => {
                    cardTexts.forEach(text => {
                        if (stopWords.indexOf(wordValue.toLowerCase()) === -1 && text.toLowerCase().includes(wordValue.toLowerCase())) {
                            isContained = true;
                        }
                    })
                })

                searchBoxArray.forEach(wordValue => {
                    blueHeaderTexts.forEach(text => {
                        if (stopWords.indexOf(wordValue.toLowerCase()) === -1 && text.toLowerCase().includes(wordValue.toLowerCase())) {
                            isContained = true;
                        }
                    })
                })


                searchBoxArray.forEach(wordValue => {
                    redHeaderTexts.forEach(text => {
                        if (stopWords.indexOf(wordValue.toLowerCase()) === -1 && text.toLowerCase().includes(wordValue.toLowerCase())) {
                            isContained = true;
                        }
                    })
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
            <textarea id={battleCardId} onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'objections')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'objections')} placeholder="Title of Battle Card" className="titleBattleCard">{titleValue}</textarea>        
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

const CaseStudiesBattleCards = ({searchBoxValue, editBlueHeaderValue, addBlueHeaderValue, addBattleCard, caseStudiesBattleCards, deleteBattleCard, modifyBattleCardTitle, triggerAddCardState, addCard}) => (
    
    <div>
        {searchBoxValue.length !== 0 &&
        <div>
            {caseStudiesBattleCards.map(battleCard => {

                var stopWords = ["'ll","'tis","'twas","'ve","a","a's","able","ableabout","about","above","abroad","abst","accordance","according","accordingly","across","act","actually","ad","added","adj","adopted","ae","af","affected","affecting","affects","after","afterwards","ag","again","against","ago","ah","ahead","ai","ain't","aint","al","all","allow","allows","almost","alone","along","alongside","already","also","although","always","am","amid","amidst","among","amongst","amoungst","amount","an","and","announce","another","any","anybody","anyhow","anymore","anyone","anything","anyway","anyways","anywhere","ao","apart","apparently","appear","appreciate","appropriate","approximately","aq","ar","are","area","areas","aren","aren't","arent","arise","around","arpa","as","aside","ask","asked","asking","asks","associated","at","au","auth","available","aw","away","awfully","az","b","ba","back","backed","backing","backs","backward","backwards","bb","bd","be","became","because","become","becomes","becoming","been","before","beforehand","began","begin","beginning","beginnings","begins","behind","being","beings","believe","below","beside","besides","best","better","between","beyond","bf","bg","bh","bi","big","bill","billion","biol","bj","bm","bn","bo","both","bottom","br","brief","briefly","bs","bt","but","buy","bv","bw","by","bz","c","c'mon","c's","ca","call","came","can","can't","cannot","cant","caption","case","cases","cause","causes","cc","cd","certain","certainly","cf","cg","ch","changes","ci","ck","cl","clear","clearly","click","cm","cmon","cn","co","co.","com","come","comes","computer","con","concerning","consequently","consider","considering","contain","containing","contains","copy","corresponding","could","could've","couldn","couldn't","couldnt","course","cr","cry","cs","cu","currently","cv","cx","cy","cz","d","dare","daren't","darent","date","de","dear","definitely","describe","described","despite","detail","did","didn","didn't","didnt","differ","different","differently","directly","dj","dk","dm","do","does","doesn","doesn't","doesnt","doing","don","don't","done","dont","doubtful","down","downed","downing","downs","downwards","due","during","dz","e","each","early","ec","ed","edu","ee","effect","eg","eh","eight","eighty","either","eleven","else","elsewhere","empty","end","ended","ending","ends","enough","entirely","er","es","especially","et","et-al","etc","even","evenly","ever","evermore","every","everybody","everyone","everything","everywhere","ex","exactly","example","except","f","face","faces","fact","facts","fairly","far","farther","felt","few","fewer","ff","fi","fifteen","fifth","fifty","fify","fill","find","finds","fire","first","five","fix","fj","fk","fm","fo","followed","following","follows","for","forever","former","formerly","forth","forty","forward","found","four","fr","free","from","front","full","fully","further","furthered","furthering","furthermore","furthers","fx","g","ga","gave","gb","gd","ge","general","generally","get","gets","getting","gf","gg","gh","gi","give","given","gives","giving","gl","gm","gmt","gn","go","goes","going","gone","good","goods","got","gotten","gov","gp","gq","gr","great","greater","greatest","greetings","group","grouped","grouping","groups","gs","gt","gu","gw","gy","h","had","hadn't","hadnt","half","happens","hardly","has","hasn","hasn't","hasnt","have","haven","haven't","havent","having","he","he'd","he'll","he's","hed","hell","hello","help","hence","her","here","here's","hereafter","hereby","herein","heres","hereupon","hers","herself","herse”","hes","hi","hid","high","higher","highest","him","himself","himse”","his","hither","hk","hm","hn","home","homepage","hopefully","how","how'd","how'll","how's","howbeit","however","hr","ht","htm","html","http","hu","hundred","i","i'd","i'll","i'm","i've","i.e.","id","ie","if","ignored","ii","il","ill","im","immediate","immediately","importance","important","in","inasmuch","inc","inc.","indeed","index","indicate","indicated","indicates","information","inner","inside","insofar","instead","int","interest","interested","interesting","interests","into","invention","inward","io","iq","ir","is","isn","isn't","isnt","it","it'd","it'll","it's","itd","itll","its","itself","itse”","ive","j","je","jm","jo","join","jp","just","k","ke","keep","keeps","kept","keys","kg","kh","ki","kind","km","kn","knew","know","known","knows","kp","kr","kw","ky","kz","l","la","large","largely","last","lately","later","latest","latter","latterly","lb","lc","least","length","less","lest","let","let's","lets","li","like","liked","likely","likewise","line","little","lk","ll","long","longer","longest","look","looking","looks","low","lower","lr","ls","lt","ltd","lu","lv","ly","m","ma","made","mainly","make","makes","making","man","many","may","maybe","mayn't","maynt","mc","md","me","mean","means","meantime","meanwhile","member","members","men","merely","mg","mh","microsoft","might","might've","mightn't","mightnt","mil","mill","million","mine","minus","miss","mk","ml","mm","mn","mo","more","moreover","most","mostly","move","mp","mq","mr","mrs","ms","msie","mt","mu","much","mug","must","must've","mustn't","mustnt","mv","mw","mx","my","myself","myse”","mz","n","na","name","namely","nay","nc","nd","ne","near","nearly","necessarily","necessary","need","needed","needing","needn't","neednt","needs","neither","net","netscape","never","neverf","neverless","nevertheless","new","newer","newest","next","nf","ng","ni","nine","ninety","nl","no","no-one","nobody","non","none","nonetheless","noone","nor","normally","nos","not","noted","nothing","notwithstanding","novel","now","nowhere","np","nr","nu","null","number","numbers","nz","o","obtain","obtained","obviously","of","off","often","oh","ok","okay","old","older","oldest","om","omitted","on","once","one","one's","ones","only","onto","open","opened","opening","opens","opposite","or","ord","order","ordered","ordering","orders","org","other","others","otherwise","ought","oughtn't","oughtnt","our","ours","ourselves","out","outside","over","overall","owing","own","p","pa","page","pages","part","parted","particular","particularly","parting","parts","past","pe","per","perhaps","pf","pg","ph","pk","pl","place","placed","places","please","plus","pm","pmid","pn","point","pointed","pointing","points","poorly","possible","possibly","potentially","pp","pr","predominantly","present","presented","presenting","presents","presumably","previously","primarily","probably","problem","problems","promptly","proud","provided","provides","pt","put","puts","pw","py","q","qa","que","quickly","quite","qv","r","ran","rather","rd","re","readily","really","reasonably","recent","recently","ref","refs","regarding","regardless","regards","related","relatively","research","reserved","respectively","resulted","resulting","results","right","ring","ro","room","rooms","round","ru","run","rw","s","sa","said","same","saw","say","saying","says","sb","sc","sd","se","sec","second","secondly","seconds","section","see","seeing","seem","seemed","seeming","seems","seen","sees","self","selves","sensible","sent","serious","seriously","seven","seventy","several","sg","sh","shall","shan't","shant","she","she'd","she'll","she's","shed","shell","shes","should","should've","shouldn","shouldn't","shouldnt","show","showed","showing","shown","showns","shows","si","side","sides","significant","significantly","similar","similarly","since","sincere","site","six","sixty","sj","sk","sl","slightly","sm","small","smaller","smallest","sn","so","some","somebody","someday","somehow","someone","somethan","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specifically","specified","specify","specifying","sr","st","state","states","still","stop","strongly","su","sub","substantially","successfully","such","sufficiently","suggest","sup","sure","sv","sy","system","sz","t","t's","take","taken","taking","tc","td","tell","ten","tends","test","text","tf","tg","th","than","thank","thanks","thanx","that","that'll","that's","that've","thatll","thats","thatve","the","their","theirs","them","themselves","then","thence","there","there'd","there'll","there're","there's","there've","thereafter","thereby","thered","therefore","therein","therell","thereof","therere","theres","thereto","thereupon","thereve","these","they","they'd","they'll","they're","they've","theyd","theyll","theyre","theyve","thick","thin","thing","things","think","thinks","third","thirty","this","thorough","thoroughly","those","thou","though","thoughh","thought","thoughts","thousand","three","throug","through","throughout","thru","thus","til","till","tip","tis","tj","tk","tm","tn","to","today","together","too","took","top","toward","towards","tp","tr","tried","tries","trillion","truly","try","trying","ts","tt","turn","turned","turning","turns","tv","tw","twas","twelve","twenty","twice","two","tz","u","ua","ug","uk","um","un","under","underneath","undoing","unfortunately","unless","unlike","unlikely","until","unto","up","upon","ups","upwards","us","use","used","useful","usefully","usefulness","uses","using","usually","uucp","uy","uz","v","va","value","various","vc","ve","versus","very","vg","vi","via","viz","vn","vol","vols","vs","vu","w","want","wanted","wanting","wants","was","wasn","wasn't","wasnt","way","ways","we","we'd","we'll","we're","we've","web","webpage","website","wed","welcome","well","wells","went","were","weren","weren't","werent","weve","wf","what","what'd","what'll","what's","what've","whatever","whatll","whats","whatve","when","when'd","when'll","when's","whence","whenever","where","where'd","where'll","where's","whereafter","whereas","whereby","wherein","wheres","whereupon","wherever","whether","which","whichever","while","whilst","whim","whither","who","who'd","who'll","who's","whod","whoever","whole","wholl","whom","whomever","whos","whose","why","why'd","why'll","why's","widely","width","will","willing","wish","with","within","without","won","won't","wonder","wont","words","work","worked","working","works","world","would","would've","wouldn","wouldn't","wouldnt","ws","www","x","y","ye","year","years","yes","yet","you","you'd","you'll","you're","you've","youd","youll","young","younger","youngest","your","youre","yours","yourself","yourselves","youve","yt","yu","z","za","zero","zm","z",]
                var searchBoxArray = (searchBoxValue.trim()).split(' ')
                var title = battleCard.titleValue;
                var cardTexts = battleCard.cards.map(card => card.text);
                var blueHeaderTexts = battleCard.blueHeaderValues.map(header => header.headerText)
                var redHeaderTexts = battleCard.redHeaderValues.map(header => header.headerText)
                var isContained = false;

                searchBoxArray.forEach(wordValue => {
                    if (stopWords.indexOf(wordValue.toLowerCase()) === -1 && title.toLowerCase().includes(wordValue.toLowerCase())) {
                        isContained = true;
                    }
                })

                searchBoxArray.forEach(wordValue => {
                    cardTexts.forEach(text => {
                        if (stopWords.indexOf(wordValue.toLowerCase()) === -1 && text.toLowerCase().includes(wordValue.toLowerCase())) {
                            isContained = true;
                        }
                    })
                })

                searchBoxArray.forEach(wordValue => {
                    blueHeaderTexts.forEach(text => {
                        if (stopWords.indexOf(wordValue.toLowerCase()) === -1 && text.toLowerCase().includes(wordValue.toLowerCase())) {
                            isContained = true;
                        }
                    })
                })


                searchBoxArray.forEach(wordValue => {
                    redHeaderTexts.forEach(text => {
                        if (stopWords.indexOf(wordValue.toLowerCase()) === -1 && text.toLowerCase().includes(wordValue.toLowerCase())) {
                            isContained = true;
                        }
                    })
                })

                if (isContained) {
                    return <CaseStudiesBattleCard
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
                }
                
            })}
        </div>
        }
    
        {searchBoxValue.length === 0 &&
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
        
        }
    </div>        
)

const CaseStudiesBattleCard = ({editBlueHeaderValue, blueHeaderValues, redHeaderValues, cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section, modifyBattleCardTitle, titleValue, triggerAddCardState, addCard}) => (

    <div className="battleCard">   
        <div onClick={() => deleteBattleCard(battleCardId, section)} className="deleteBattleCardButton">
            <span className="battleCardTrash">
                <i className="fa fa-trash"></i>
            </span>
        </div>
        
        <div className="cards">
            <textarea id={battleCardId} onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'caseStudies')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'caseStudies')} placeholder="Title of Battle Card" className="titleBattleCard">{titleValue}</textarea>        
            <span className="battleCardNameHeader">
                <i className="fa fa-axe-battle"></i>
                <span> Case Study</span>
            </span>


            {/* BLUE HEADER VALUES */}
            <div style={{width: '50%', float: 'left'}}>
                <div className="blueLine"></div>

                <span className="battleCardBlueHeaderTitle">
                    CLIENT SUCCESSES
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

const CompetitorsBattleCards = ({searchBoxValue, editBlueHeaderValue, addBlueHeaderValue, addBattleCard, competitorsBattleCards, deleteBattleCard, modifyBattleCardTitle, triggerAddCardState, addCard}) => (
    
    <div>
        {searchBoxValue.length !== 0 &&
        <div>
            {competitorsBattleCards.map(battleCard => {

                var stopWords = ["'ll","'tis","'twas","'ve","a","a's","able","ableabout","about","above","abroad","abst","accordance","according","accordingly","across","act","actually","ad","added","adj","adopted","ae","af","affected","affecting","affects","after","afterwards","ag","again","against","ago","ah","ahead","ai","ain't","aint","al","all","allow","allows","almost","alone","along","alongside","already","also","although","always","am","amid","amidst","among","amongst","amoungst","amount","an","and","announce","another","any","anybody","anyhow","anymore","anyone","anything","anyway","anyways","anywhere","ao","apart","apparently","appear","appreciate","appropriate","approximately","aq","ar","are","area","areas","aren","aren't","arent","arise","around","arpa","as","aside","ask","asked","asking","asks","associated","at","au","auth","available","aw","away","awfully","az","b","ba","back","backed","backing","backs","backward","backwards","bb","bd","be","became","because","become","becomes","becoming","been","before","beforehand","began","begin","beginning","beginnings","begins","behind","being","beings","believe","below","beside","besides","best","better","between","beyond","bf","bg","bh","bi","big","bill","billion","biol","bj","bm","bn","bo","both","bottom","br","brief","briefly","bs","bt","but","buy","bv","bw","by","bz","c","c'mon","c's","ca","call","came","can","can't","cannot","cant","caption","case","cases","cause","causes","cc","cd","certain","certainly","cf","cg","ch","changes","ci","ck","cl","clear","clearly","click","cm","cmon","cn","co","co.","com","come","comes","computer","con","concerning","consequently","consider","considering","contain","containing","contains","copy","corresponding","could","could've","couldn","couldn't","couldnt","course","cr","cry","cs","cu","currently","cv","cx","cy","cz","d","dare","daren't","darent","date","de","dear","definitely","describe","described","despite","detail","did","didn","didn't","didnt","differ","different","differently","directly","dj","dk","dm","do","does","doesn","doesn't","doesnt","doing","don","don't","done","dont","doubtful","down","downed","downing","downs","downwards","due","during","dz","e","each","early","ec","ed","edu","ee","effect","eg","eh","eight","eighty","either","eleven","else","elsewhere","empty","end","ended","ending","ends","enough","entirely","er","es","especially","et","et-al","etc","even","evenly","ever","evermore","every","everybody","everyone","everything","everywhere","ex","exactly","example","except","f","face","faces","fact","facts","fairly","far","farther","felt","few","fewer","ff","fi","fifteen","fifth","fifty","fify","fill","find","finds","fire","first","five","fix","fj","fk","fm","fo","followed","following","follows","for","forever","former","formerly","forth","forty","forward","found","four","fr","free","from","front","full","fully","further","furthered","furthering","furthermore","furthers","fx","g","ga","gave","gb","gd","ge","general","generally","get","gets","getting","gf","gg","gh","gi","give","given","gives","giving","gl","gm","gmt","gn","go","goes","going","gone","good","goods","got","gotten","gov","gp","gq","gr","great","greater","greatest","greetings","group","grouped","grouping","groups","gs","gt","gu","gw","gy","h","had","hadn't","hadnt","half","happens","hardly","has","hasn","hasn't","hasnt","have","haven","haven't","havent","having","he","he'd","he'll","he's","hed","hell","hello","help","hence","her","here","here's","hereafter","hereby","herein","heres","hereupon","hers","herself","herse”","hes","hi","hid","high","higher","highest","him","himself","himse”","his","hither","hk","hm","hn","home","homepage","hopefully","how","how'd","how'll","how's","howbeit","however","hr","ht","htm","html","http","hu","hundred","i","i'd","i'll","i'm","i've","i.e.","id","ie","if","ignored","ii","il","ill","im","immediate","immediately","importance","important","in","inasmuch","inc","inc.","indeed","index","indicate","indicated","indicates","information","inner","inside","insofar","instead","int","interest","interested","interesting","interests","into","invention","inward","io","iq","ir","is","isn","isn't","isnt","it","it'd","it'll","it's","itd","itll","its","itself","itse”","ive","j","je","jm","jo","join","jp","just","k","ke","keep","keeps","kept","keys","kg","kh","ki","kind","km","kn","knew","know","known","knows","kp","kr","kw","ky","kz","l","la","large","largely","last","lately","later","latest","latter","latterly","lb","lc","least","length","less","lest","let","let's","lets","li","like","liked","likely","likewise","line","little","lk","ll","long","longer","longest","look","looking","looks","low","lower","lr","ls","lt","ltd","lu","lv","ly","m","ma","made","mainly","make","makes","making","man","many","may","maybe","mayn't","maynt","mc","md","me","mean","means","meantime","meanwhile","member","members","men","merely","mg","mh","microsoft","might","might've","mightn't","mightnt","mil","mill","million","mine","minus","miss","mk","ml","mm","mn","mo","more","moreover","most","mostly","move","mp","mq","mr","mrs","ms","msie","mt","mu","much","mug","must","must've","mustn't","mustnt","mv","mw","mx","my","myself","myse”","mz","n","na","name","namely","nay","nc","nd","ne","near","nearly","necessarily","necessary","need","needed","needing","needn't","neednt","needs","neither","net","netscape","never","neverf","neverless","nevertheless","new","newer","newest","next","nf","ng","ni","nine","ninety","nl","no","no-one","nobody","non","none","nonetheless","noone","nor","normally","nos","not","noted","nothing","notwithstanding","novel","now","nowhere","np","nr","nu","null","number","numbers","nz","o","obtain","obtained","obviously","of","off","often","oh","ok","okay","old","older","oldest","om","omitted","on","once","one","one's","ones","only","onto","open","opened","opening","opens","opposite","or","ord","order","ordered","ordering","orders","org","other","others","otherwise","ought","oughtn't","oughtnt","our","ours","ourselves","out","outside","over","overall","owing","own","p","pa","page","pages","part","parted","particular","particularly","parting","parts","past","pe","per","perhaps","pf","pg","ph","pk","pl","place","placed","places","please","plus","pm","pmid","pn","point","pointed","pointing","points","poorly","possible","possibly","potentially","pp","pr","predominantly","present","presented","presenting","presents","presumably","previously","primarily","probably","problem","problems","promptly","proud","provided","provides","pt","put","puts","pw","py","q","qa","que","quickly","quite","qv","r","ran","rather","rd","re","readily","really","reasonably","recent","recently","ref","refs","regarding","regardless","regards","related","relatively","research","reserved","respectively","resulted","resulting","results","right","ring","ro","room","rooms","round","ru","run","rw","s","sa","said","same","saw","say","saying","says","sb","sc","sd","se","sec","second","secondly","seconds","section","see","seeing","seem","seemed","seeming","seems","seen","sees","self","selves","sensible","sent","serious","seriously","seven","seventy","several","sg","sh","shall","shan't","shant","she","she'd","she'll","she's","shed","shell","shes","should","should've","shouldn","shouldn't","shouldnt","show","showed","showing","shown","showns","shows","si","side","sides","significant","significantly","similar","similarly","since","sincere","site","six","sixty","sj","sk","sl","slightly","sm","small","smaller","smallest","sn","so","some","somebody","someday","somehow","someone","somethan","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specifically","specified","specify","specifying","sr","st","state","states","still","stop","strongly","su","sub","substantially","successfully","such","sufficiently","suggest","sup","sure","sv","sy","system","sz","t","t's","take","taken","taking","tc","td","tell","ten","tends","test","text","tf","tg","th","than","thank","thanks","thanx","that","that'll","that's","that've","thatll","thats","thatve","the","their","theirs","them","themselves","then","thence","there","there'd","there'll","there're","there's","there've","thereafter","thereby","thered","therefore","therein","therell","thereof","therere","theres","thereto","thereupon","thereve","these","they","they'd","they'll","they're","they've","theyd","theyll","theyre","theyve","thick","thin","thing","things","think","thinks","third","thirty","this","thorough","thoroughly","those","thou","though","thoughh","thought","thoughts","thousand","three","throug","through","throughout","thru","thus","til","till","tip","tis","tj","tk","tm","tn","to","today","together","too","took","top","toward","towards","tp","tr","tried","tries","trillion","truly","try","trying","ts","tt","turn","turned","turning","turns","tv","tw","twas","twelve","twenty","twice","two","tz","u","ua","ug","uk","um","un","under","underneath","undoing","unfortunately","unless","unlike","unlikely","until","unto","up","upon","ups","upwards","us","use","used","useful","usefully","usefulness","uses","using","usually","uucp","uy","uz","v","va","value","various","vc","ve","versus","very","vg","vi","via","viz","vn","vol","vols","vs","vu","w","want","wanted","wanting","wants","was","wasn","wasn't","wasnt","way","ways","we","we'd","we'll","we're","we've","web","webpage","website","wed","welcome","well","wells","went","were","weren","weren't","werent","weve","wf","what","what'd","what'll","what's","what've","whatever","whatll","whats","whatve","when","when'd","when'll","when's","whence","whenever","where","where'd","where'll","where's","whereafter","whereas","whereby","wherein","wheres","whereupon","wherever","whether","which","whichever","while","whilst","whim","whither","who","who'd","who'll","who's","whod","whoever","whole","wholl","whom","whomever","whos","whose","why","why'd","why'll","why's","widely","width","will","willing","wish","with","within","without","won","won't","wonder","wont","words","work","worked","working","works","world","would","would've","wouldn","wouldn't","wouldnt","ws","www","x","y","ye","year","years","yes","yet","you","you'd","you'll","you're","you've","youd","youll","young","younger","youngest","your","youre","yours","yourself","yourselves","youve","yt","yu","z","za","zero","zm","z",]
                var searchBoxArray = (searchBoxValue.trim()).split(' ')
                var title = battleCard.titleValue;
                var cardTexts = battleCard.cards.map(card => card.text);
                var blueHeaderTexts = battleCard.blueHeaderValues.map(header => header.headerText)
                var redHeaderTexts = battleCard.redHeaderValues.map(header => header.headerText)
                var isContained = false;

                searchBoxArray.forEach(wordValue => {
                    if (stopWords.indexOf(wordValue.toLowerCase()) === -1 && title.toLowerCase().includes(wordValue.toLowerCase())) {
                        isContained = true;
                    }
                })

                searchBoxArray.forEach(wordValue => {
                    cardTexts.forEach(text => {
                        if (stopWords.indexOf(wordValue.toLowerCase()) === -1 && text.toLowerCase().includes(wordValue.toLowerCase())) {
                            isContained = true;
                        }
                    })
                })

                searchBoxArray.forEach(wordValue => {
                    blueHeaderTexts.forEach(text => {
                        if (stopWords.indexOf(wordValue.toLowerCase()) === -1 && text.toLowerCase().includes(wordValue.toLowerCase())) {
                            isContained = true;
                        }
                    })
                })


                searchBoxArray.forEach(wordValue => {
                    redHeaderTexts.forEach(text => {
                        if (stopWords.indexOf(wordValue.toLowerCase()) === -1 && text.toLowerCase().includes(wordValue.toLowerCase())) {
                            isContained = true;
                        }
                    })
                })

                if (isContained) {
                    return <CompetitorsBattleCard
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
                }
                
            })}
        </div>
        }
    
        {searchBoxValue.length === 0 &&
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
        
        }
    </div>        
)

const CompetitorsBattleCard = ({editBlueHeaderValue, blueHeaderValues, redHeaderValues, cards, deleteBattleCard, battleCardId, isEmptyAddButtonState, section, modifyBattleCardTitle, titleValue, triggerAddCardState, addCard}) => (

    <div className="battleCard">   
        <div onClick={() => deleteBattleCard(battleCardId, section)} className="deleteBattleCardButton">
            <span className="battleCardTrash">
                <i className="fa fa-trash"></i>
            </span>
        </div>

        <div className="cards">
            <textarea id={battleCardId} onBlur={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'competitors')} onKeyPress={(e) => modifyBattleCardTitle(e.target.value, battleCardId, 'competitors')} placeholder="Title of Battle Card" className="titleBattleCard">{titleValue}</textarea>        
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