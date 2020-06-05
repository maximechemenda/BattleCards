//import uuid from 'uuid';
import {v4 as uuid} from 'uuid'

//import {FILTER_ALL} from './actionTypes'
import { ADD_CARD, DELETE_CARD, TRIGGER_ADD_CARD_STATE, ACTIVATE_CARD_EDIT, 
        EDIT_CARD, ADD_BATTLECARD, DELETE_BATTLECARD, TRIGGER_SECTION_STATE, MODIFY_BATTLECARD_TITLE,
        CHANGE_SELECTED_BATTLECARDS,
        CLEAR_SELECTED_BATTLECARDS, ADD_BATTLECARD_TO_SECTION_AND_SELECTED_BATTLECARDS, READ,
        FETCH_ITEMS_BEGIN, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE, UPDATE_CARD_HEIGHT,
        TRIGGER_BIG_SECTION_STATE, CLEAR_SELECTED_CASE_STUDIES_BATTLECARDS,
        ADD_BLUE_HEADER_VALUE, EDIT_BLUE_HEADER_VALUE} from './actionTypes'


const initialBattleCardsState = {
    data: {
        id: uuid(),
        caseStudies: {
            caseStudiesBattleCards: []
        },

    
        battleCards: {
            objectionsBattleCards: [
                {
                    cards: [{
                        cardId: uuid(),
                        text: '',
                        cardType: 'warning',
                        editing: false,
                        height: '50px'
                    }],
                    battleCardId: uuid(),
                    isEmptyAddButtonState: true,
                    titleValue: '',
                    section: 'objections',
                    blueHeaderValues: []
                }
            ],
            competitorsBattleCards: [
                {
                    cards: [{
                        cardId: uuid(),
                        text: '',
                        cardType: 'warning',
                        editing: false,
                        height: '50px'
                    }],
                    battleCardId: uuid(),
                    isEmptyAddButtonState: true,
                    titleValue: '',
                    section: 'competitors'
                }
            ],
            profilesBattleCards: [
                {
                    cards: {
                        cardId: uuid(),
                        text: '',
                        cardType: 'warning',
                        editing: false,
                        height: '50px'
                    },
                    battleCardId: uuid(),
                    isEmptyAddButtonState: true,
                    titleValue: '',
                    section: 'profiles'
                }
            ],
            discoveriesBattleCards: [
                {
                    cards: {
                        cardId: uuid(),
                        text: '',
                        cardType: 'warning',
                        editing: false,
                        height: '50px'
                    },
                    battleCardId: uuid(),
                    isEmptyAddButtonState: true,
                    titleValue: '',
                    section: 'discoveries'
                }
            ],
            //selectedBattleCards: [],
            isEmptyObjectionsState: true,
            isEmptyCompetitorsState: true,
            isEmptyProfilesState: true,
            isEmptyDiscoveriesState: true
        },
        isEmptyBattleCardsState: false,
        isEmptyCaseStudiesState: true
    },
    selectedBattleCards: [],
    selectedCaseStudiesBattleCards: []
}



export const battleCards = (state = initialBattleCardsState, action) => {

    switch (action.type) {
        case EDIT_BLUE_HEADER_VALUE:
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                objectionsBattleCards: state.data.battleCards.objectionsBattleCards.map(battleCard => {
                                    if (battleCard.battleCardId === action.battleCardId) {
                                        battleCard.blueHeaderValues = battleCard.blueHeaderValues.map(header => {
                                            if (header.headerId === action.headerId) {
                                                header.headerText = action.text

                                                var textarea = document.getElementById(header.headerId)
    
                                                textarea.style.cssText = 'height:30px; padding:0';
        
                                                var height = textarea.scrollHeight - 4 + 10
                                                textarea.style.cssText = 'height:' + height + 'px;padding:0';

                                                if (height >= 30) {
                                                    header.height = height + 'px'
                                                } else {
                                                    header.height = '30px'
                                                }
                                            }
                                            return header
                                        })
                                    }
                                    return battleCard
                                })
                            }
                        }
                    })
        }
        case ADD_BLUE_HEADER_VALUE:
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                objectionsBattleCards: state.data.battleCards.objectionsBattleCards.map(battleCard => {
                                    if (battleCard.battleCardId === action.battleCardId) {
                                        battleCard.blueHeaderValues = battleCard.blueHeaderValues.concat([{
                                            headerId: uuid(),
                                            headerText: 'write again',
                                            height: '30px'
                                        }])
                                    }
                                    return battleCard
                                })
                            }
                        }
                    })
            }
        case CLEAR_SELECTED_CASE_STUDIES_BATTLECARDS:
            return ({
                ...state,
                selectedCaseStudiesBattleCards: []
            })


        case TRIGGER_BIG_SECTION_STATE:
            switch (action.bigSection) {
                case 'battleCards':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            isEmptyBattleCardsState: false,
                            isEmptyCaseStudiesState: true
                        }
                    })
                case 'caseStudies':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            isEmptyBattleCardsState: true,
                            isEmptyCaseStudiesState: false
                        }
                    })
            }
            
        case UPDATE_CARD_HEIGHT:
            return ({
                ...state,
                data: {
                    ...state.data,
                    battleCards: {
                        ...state.data.battleCards,
                        objectionsBattleCards: state.data.battleCards.objectionsBattleCards.map(battleCard => {
                            battleCard.cards.map(card => {
                                if (card.cardId === action.cardId) {
                                    card.height = action.height
                                }
                                return card
                            })
                            return battleCard
                        }),
                        competitorsBattleCards: state.data.battleCards.competitorsBattleCards.map(battleCard => {
                            battleCard.cards.map(card => {
                                if (card.cardId === action.cardId) {
                                    card.height = action.height
                                }
                                return card
                            })
                            return battleCard
                        })
                    },
                    caseStudies: {
                        ...state.data.caseStudies,
                        caseStudiesBattleCards: state.data.caseStudies.caseStudiesBattleCards.map(battleCard => {
                            battleCard.cards.map(card => {
                                if (card.cardId === action.cardId) {
                                    card.height = action.height
                                }
                                return card
                            })
                            return battleCard
                        })
                        
                    }
                }
                
            })
        case FETCH_ITEMS_BEGIN: 
            return { 
                ...state,
                loading: true,
                errors: null
            }
          case FETCH_ITEMS_SUCCESS: 
            return {
                ...state,
                loading: false,
                data: action.payload.items,
                selectedBattleCards: [],
                selectedCaseStudiesBattleCards: []
              }
          case FETCH_ITEMS_FAILURE: 
          return {
                ...state,
                loading: false,
                errors: action.payload.errors,
                data : initialBattleCardsState.data
          }
        //reads all the data from the store
        case READ: return state;
        
        case TRIGGER_SECTION_STATE: 
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                isEmptyObjectionsState: false,
                                isEmptyCompetitorsState: true,
                                isEmptyProfilesState: true,
                                isEmptyDiscoveriesState: true,
                                }
                        }
                        
                    })
                case 'competitors':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                isEmptyObjectionsState: true,
                                isEmptyCompetitorsState: false,
                                isEmptyProfilesState: true,
                                isEmptyDiscoveriesState: true,
                                }
                        }
                        
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                        ...state.data.battleCards,
                        isEmptyObjectionsState: true,
                        isEmptyCompetitorsState: true,
                        isEmptyProfilesState: false,
                        isEmptyDiscoveriesState: true,
                        }
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        battleCards: {
                        ...state.data.battleCards,
                        isEmptyObjectionsState: true,
                        isEmptyCompetitorsState: true,
                        isEmptyProfilesState: true,
                        isEmptyDiscoveriesState: false,
                        }
                    })       
            }
        break;
        case ADD_BATTLECARD_TO_SECTION_AND_SELECTED_BATTLECARDS:
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                objectionsBattleCards: state.data.battleCards.objectionsBattleCards.concat([{
                                    cards: [],
                                    battleCardId: action.id,
                                    isEmptyAddButtonState: true,
                                    titleValue: '',
                                    section: 'objections'
                                }])
                            }

                        },
                        selectedBattleCards: state.selectedBattleCards.concat([{
                            cards: [],
                            battleCardId: action.id,
                            isEmptyAddButtonState: true,
                            titleValue: '',
                            section: 'objections'
                        
                        }])
                        
                    })
                case 'competitors':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                competitorsBattleCards: state.data.battleCards.competitorsBattleCards.concat([{
                                    cards: [],
                                    battleCardId: action.id,
                                    isEmptyAddButtonState: true,
                                    titleValue: '',
                                    section: 'competitors'
                                }])
                                
                            }

                        },
                        selectedBattleCards: state.selectedBattleCards.concat([{
                            cards: [],
                            battleCardId: action.id,
                            isEmptyAddButtonState: true,
                            titleValue: '',
                            section: 'competitors'
                        
                        }])
                        
                    })
                case 'caseStudies':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            caseStudies: {
                                ...state.data.caseStudies,
                                caseStudiesBattleCards: state.data.caseStudies.caseStudiesBattleCards.concat([{
                                    cards: [],
                                    battleCardId: action.id,
                                    isEmptyAddButtonState: true,
                                    titleValue: '',
                                    section: 'caseStudies'
                                }])
                            }

                        },
                        selectedCaseStudiesBattleCards: state.selectedCaseStudiesBattleCards.concat([{
                            cards: [],
                            battleCardId: action.id,
                            isEmptyAddButtonState: true,
                            titleValue: '',
                            section: 'caseStudies'
                        
                        }])
                        
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            profilesBattleCards: state.data.battleCards.profilesBattleCards.concat([{
                                cards: [],
                                battleCardId: action.id,
                                isEmptyAddButtonState: true,
                                titleValue: '',
                                section: 'profiles'
                            }]),
                            selectedBattleCards: state.selectedBattleCards.concat([{
                                cards: [],
                                battleCardId: action.id,
                                isEmptyAddButtonState: true,
                                titleValue: '',
                                section: 'profiles'
                            
                            }])
                        }
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            discoveriesBattleCards: state.data.battleCards.discoveriesBattleCards.concat([{
                                cards: [],
                                battleCardId: action.id,
                                isEmptyAddButtonState: true,
                                titleValue: '',
                                section: 'discoveries'
                            }]),
                            selectedBattleCards: state.selectedBattleCards.concat([{
                                cards: [],
                                battleCardId: action.id,
                                isEmptyAddButtonState: true,
                                titleValue: '',
                                section: 'discoveries'
                            
                            }])
                        }
                    })
            }
        case CLEAR_SELECTED_BATTLECARDS: 
            return ({
                ...state,
                selectedBattleCards: []
                /* data: {
                    ...state.data,
                    battleCards: {
                        ...state.data.battleCards,
                        selectedBattleCards: []
                    }
                } */
                
            })
        case CHANGE_SELECTED_BATTLECARDS:
            switch (action.section) {
                case 'objections':
                    if ((state.selectedBattleCards.map(battleCard => battleCard.battleCardId)).includes(action.battleCardId)) {
                        return ({
                            ...state,
                            selectedBattleCards: state.selectedBattleCards.filter(battleCard => battleCard.battleCardId !== action.battleCardId)
                            /* data: {
                                ...state.data,
                                battleCards: {
                                    ...state.data.battleCards,
                                    selectedBattleCards: state.selectedBattleCards.filter(battleCard => battleCard.battleCardId !== action.battleCardId)
                                }
                            } */
                            
                        })
                    } 
                    else {
                        return ({
                            ...state,
                            selectedBattleCards: state.selectedBattleCards.concat(
                                state.data.battleCards.objectionsBattleCards.filter(battleCard => battleCard.battleCardId === action.battleCardId)
                            )
                            /* data: {
                                ...state.data,
                                battleCards: {
                                    ...state.data.battleCards,
                                    selectedBattleCards: state.selectedBattleCards.concat(
                                        state.data.battleCards.objectionsBattleCards.filter(battleCard => battleCard.battleCardId === action.battleCardId)
                                    )
                                }
                            } */
                            
                        })
                    }
                case 'competitors':
                    if ((state.selectedBattleCards.map(battleCard => battleCard.battleCardId)).includes(action.battleCardId)) {
                        return ({
                            ...state,
                            selectedBattleCards: state.selectedBattleCards.filter(battleCard => battleCard.battleCardId !== action.battleCardId)
                            /* data: {
                                ...state.data,
                                battleCards: {
                                    ...state.data.battleCards,
                                    selectedBattleCards: state.selectedBattleCards.filter(battleCard => battleCard.battleCardId !== action.battleCardId)
                                }

                            } */
                            
                        })
                    } 
                    else {
                        return ({
                            ...state,
                            selectedBattleCards: state.selectedBattleCards.concat(
                                state.data.battleCards.competitorsBattleCards.filter(battleCard => battleCard.battleCardId === action.battleCardId)
                            )
                            /* data: {
                                ...state.data,
                                battleCards: {
                                    ...state.data.battleCards,
                                    selectedBattleCards: state.selectedBattleCards.concat(
                                        state.data.battleCards.competitorsBattleCards.filter(battleCard => battleCard.battleCardId === action.battleCardId)
                                    )
                                }

                            } */
                            
                        })
                    }
                case 'caseStudies':
                    console.log('entering this function')
                    if ((state.selectedCaseStudiesBattleCards.map(battleCard => battleCard.battleCardId)).includes(action.battleCardId)) {
                        return ({
                            ...state,
                            selectedCaseStudiesBattleCards: state.selectedCaseStudiesBattleCards.filter(battleCard => battleCard.battleCardId !== action.battleCardId)
                            /* data: {
                                ...state.data,
                                battleCards: {
                                    ...state.data.battleCards,
                                    selectedBattleCards: state.selectedBattleCards.filter(battleCard => battleCard.battleCardId !== action.battleCardId)
                                }
                            } */
                            
                        })
                    } 
                    else {
                        return ({
                            ...state,
                            selectedCaseStudiesBattleCards: state.selectedCaseStudiesBattleCards.concat(
                                state.data.caseStudies.caseStudiesBattleCards.filter(battleCard => battleCard.battleCardId === action.battleCardId)
                            )
                            /* data: {
                                ...state.data,
                                battleCards: {
                                    ...state.data.battleCards,
                                    selectedBattleCards: state.selectedBattleCards.concat(
                                        state.data.battleCards.objectionsBattleCards.filter(battleCard => battleCard.battleCardId === action.battleCardId)
                                    )
                                }
                            } */
                            
                        })
                    }
                case 'profiles':
                    if ((state.selectedBattleCards.map(battleCard => battleCard.battleCardId)).includes(action.battleCardId)) {
                        return ({
                            ...state,
                            battleCards: {
                                ...state.data.battleCards,
                                selectedBattleCards: state.selectedBattleCards.filter(battleCard => battleCard.battleCardId !== action.battleCardId)
                            }
                        })
                    } 
                    else {
                        return ({
                            ...state,
                            battleCards: {
                                ...state.data.battleCards,
                                selectedBattleCards: state.selectedBattleCards.concat(
                                    state.data.battleCards.profilesBattleCards.filter(battleCard => battleCard.battleCardId === action.battleCardId)
                                )
                            }
                        })
                    }
                case 'discoveries':
                    if ((state.selectedBattleCards.map(battleCard => battleCard.battleCardId)).includes(action.battleCardId)) {
                        return ({
                            ...state,
                            battleCards: {
                                ...state.data.battleCards,
                                selectedBattleCards: state.selectedBattleCards.filter(battleCard => battleCard.battleCardId !== action.battleCardId)
                            }
                        })
                    } 
                    else {
                        return ({
                            ...state,
                            battleCards: {
                                ...state.data.battleCards,
                                selectedBattleCards: state.selectedBattleCards.concat(
                                    state.data.battleCards.discoveriesBattleCards.filter(battleCard => battleCard.battleCardId === action.battleCardId)
                                )
                            }
                        })
                    }
            }
        case MODIFY_BATTLECARD_TITLE:
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                objectionsBattleCards: state.data.battleCards.objectionsBattleCards.map(battleCard => {
                                    if (battleCard.battleCardId === action.battleCardId) {
                                        battleCard.titleValue = action.newValue;
                                    }
                                    return battleCard
                                })
                            }

                        }
                         
                    })
                case 'competitors':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                competitorsBattleCards: state.data.battleCards.competitorsBattleCards.map(battleCard => {
                                    if (battleCard.battleCardId === action.battleCardId) {
                                        battleCard.titleValue = action.newValue;
                                    }
                                    return battleCard
                                })
                            }

                        }
                         
                    })
                case 'caseStudies':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            caseStudies: {
                                ...state.data.caseStudies,
                                caseStudiesBattleCards: state.data.caseStudies.caseStudiesBattleCards.map(battleCard => {
                                    if (battleCard.battleCardId === action.battleCardId) {
                                        battleCard.titleValue = action.newValue;
                                    }
                                    return battleCard
                                })
                            }

                        }
                         
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            profilesBattleCards: state.data.battleCards.profilesBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    battleCard.titleValue = action.newValue;
                                }
                                return battleCard
                            })
                        } 
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            discoveriesBattleCards: state.data.battleCards.discoveriesBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    battleCard.titleValue = action.newValue;
                                }
                                return battleCard
                            })
                        } 
                    })
            }
            
        case ADD_BATTLECARD:
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                objectionsBattleCards:  state.data.battleCards.objectionsBattleCards.concat([{  
                                cards: [],
                                battleCardId: uuid(),
                                isEmptyAddButtonState: true,
                                titleValue: '',
                                section: 'objections',
                                blueHeaderValues: [{
                                    headerId: uuid(),
                                    headerText: 'write here',
                                    height: '30px'
                                }]
                            }])}
                        }
                    })
                case 'competitors':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                competitorsBattleCards:  state.data.battleCards.competitorsBattleCards.concat([{ 
                                cards: [],
                                battleCardId: uuid(),
                                isEmptyAddButtonState: true,
                                titleValue: '',
                                section: 'competitors'
                            }])}

                        }
                        
                    })
                case 'caseStudies':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            caseStudies: {
                                ...state.data.caseStudies,
                                caseStudiesBattleCards:  state.data.caseStudies.caseStudiesBattleCards.concat([{  
                                cards: [],
                                battleCardId: uuid(),
                                isEmptyAddButtonState: true,
                                titleValue: '',
                                section: 'caseStudies'
                            }])}
                        }
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            profilesBattleCards:  state.data.battleCards.profilesBattleCards.concat([{
                            cards: [],
                            battleCardId: uuid(),
                            isEmptyAddButtonState: true,
                            titleValue: '',
                            section: 'profiles'
                        }])}
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            discoveriesBattleCards:  state.data.battleCards.discoveriesBattleCards.concat([{ //TODO: this is the right way (almost sure)
                            cards: [],
                            battleCardId: uuid(),
                            isEmptyAddButtonState: true,
                            titleValue: '',
                            section: 'discoveries'
                        }])}
                    })
            }
            break;
        case DELETE_BATTLECARD:
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                objectionsBattleCards: state.data.battleCards.objectionsBattleCards.filter(
                                    battleCard => battleCard.battleCardId !== action.battleCardId
                                )
                            }

                        }
                        
                    })
                case 'competitors':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                competitorsBattleCards: state.data.battleCards.competitorsBattleCards.filter(
                                    battleCard => battleCard.battleCardId !== action.battleCardId
                                )
                            }

                        }
                        
                    })
                case 'caseStudies':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            caseStudies: {
                                ...state.data.caseStudies,
                                caseStudiesBattleCards: state.data.caseStudies.caseStudiesBattleCards.filter(
                                    battleCard => battleCard.battleCardId !== action.battleCardId
                                )
                            }

                        }
                        
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            profilesBattleCards: state.data.battleCards.profilesBattleCards.filter(
                                battleCard => battleCard.battleCardId !== action.battleCardId
                            )
                        }
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            discoveriesBattleCards: state.data.battleCards.discoveriesBattleCards.filter(
                                battleCard => battleCard.battleCardId !== action.battleCardId
                            )
                        }
                    })
            }
            break;
        case ADD_CARD: 
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                objectionsBattleCards: state.data.battleCards.objectionsBattleCards.map(battleCard => {
                                    if(battleCard.battleCardId === action.battleCardId) { // finds the battleCard where we want to add a card
                                        battleCard.isEmptyAddButtonState = true;
                                        battleCard.cards = battleCard.cards.concat([{
                                          cardId: uuid(),
                                          text: '',
                                          cardType: action.cardType,
                                          editing: false,
                                          height: '50px'
                                        }])
                                      }
                                      return battleCard;
                                })
                            }

                        }
                        
                    })
                case 'competitors':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                competitorsBattleCards: state.data.battleCards.competitorsBattleCards.map(battleCard => {
                                    if(battleCard.battleCardId === action.battleCardId) { // finds the battleCard where we want to add a card
                                        battleCard.isEmptyAddButtonState = true;
                                        battleCard.cards = battleCard.cards.concat([{
                                          cardId: uuid(),
                                          text: '',
                                          cardType: action.cardType,
                                          editing: false,
                                          height: '50px'
                                        }])
                                      }
                                      return battleCard;
                                })
                            }
                        }
                        
                    })
                case 'caseStudies':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            caseStudies: {
                                ...state.data.caseStudies,
                                caseStudiesBattleCards: state.data.caseStudies.caseStudiesBattleCards.map(battleCard => {
                                    if(battleCard.battleCardId === action.battleCardId) { // finds the battleCard where we want to add a card
                                        battleCard.isEmptyAddButtonState = true;
                                        battleCard.cards = battleCard.cards.concat([{
                                          cardId: uuid(),
                                          text: '',
                                          cardType: action.cardType,
                                          editing: false,
                                          height: '50px'
                                        }])
                                      }
                                      return battleCard;
                                })
                            }

                        }
                        
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            profilesBattleCards: state.data.battleCards.profilesBattleCards.map(battleCard => {
                                if(battleCard.battleCardId === action.battleCardId) { // finds the battleCard where we want to add a card
                                    battleCard.isEmptyAddButtonState = true;
                                    battleCard.cards = battleCard.cards.concat([{
                                      cardId: uuid(),
                                      text: '',
                                      cardType: action.cardType,
                                      editing: false,
                                      height: '50px'
                                    }])
                                  }
                                  return battleCard;
                            })
                        }
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            discoveriesBattleCards: state.data.battleCards.discoveriesBattleCards.map(battleCard => {
                                if(battleCard.battleCardId === action.battleCardId) { // finds the battleCard where we want to add a card
                                    battleCard.isEmptyAddButtonState = true;
                                    battleCard.cards = battleCard.cards.concat([{
                                      cardId: uuid(),
                                      text: '',
                                      cardType: action.cardType,
                                      editing: false,
                                      height: '50px'
                                    }])
                                  }
                                  return battleCard;
                            })
                        }
                    })
                    
            }
            break;
        case DELETE_CARD:
            (action.e).stopPropagation()
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                objectionsBattleCards: state.data.battleCards.objectionsBattleCards.map(battleCard => {
                                    if(battleCard.battleCardId === action.battleCardId) {
                                        battleCard.cards = battleCard.cards.filter(card => card.cardId !== action.cardId)
                                    }
                                    return battleCard;
                                })
                            }
                        }
                          
                    })
                case 'competitors':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                competitorsBattleCards: state.data.battleCards.competitorsBattleCards.map(battleCard => {
                                    if(battleCard.battleCardId === action.battleCardId) {
                                        battleCard.cards = battleCard.cards.filter(card => card.cardId !== action.cardId)
                                    }
                                    return battleCard;
                                })
                            }
                        }
                          
                    })
                case 'caseStudies':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            caseStudies: {
                                ...state.data.caseStudies,
                                caseStudiesBattleCards: state.data.caseStudies.caseStudiesBattleCards.map(battleCard => {
                                    if(battleCard.battleCardId === action.battleCardId) {
                                        battleCard.cards = battleCard.cards.filter(card => card.cardId !== action.cardId)
                                    }
                                    return battleCard;
                                })
                            }
                        }
                          
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            profilesBattleCards: state.data.battleCards.profilesBattleCards.map(battleCard => {
                                if(battleCard.battleCardId === action.battleCardId) {
                                    battleCard.cards = battleCard.cards.filter(card => card.cardId !== action.cardId)
                                }
                                return battleCard;
                            })
                        }  
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            discoveriesBattleCards: state.data.battleCards.discoveriesBattleCards.map(battleCard => {
                                if(battleCard.battleCardId === action.battleCardId) {
                                    battleCard.cards = battleCard.cards.filter(card => card.cardId !== action.cardId)
                                }
                                return battleCard;
                            })
                        }  
                    })              
            }
            break;
        case TRIGGER_ADD_CARD_STATE:
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                objectionsBattleCards: state.data.battleCards.objectionsBattleCards.map(battleCard => {
                                    if (battleCard.battleCardId === action.battleCardId) {
                                        //battleCard.isEmptyAddButtonState = false;
                                        battleCard.isEmptyAddButtonState = !battleCard.isEmptyAddButtonState;
                                    }
                                    return battleCard
                                })
                            }
                        }
                        
                    })
                case 'competitors':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                competitorsBattleCards: state.data.battleCards.competitorsBattleCards.map(battleCard => {
                                    if (battleCard.battleCardId === action.battleCardId) {
                                        battleCard.isEmptyAddButtonState = false;
                                    }
                                    return battleCard
                                })
                            }

                        }
                        
                    })
                case 'caseStudies':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            caseStudies: {
                                ...state.data.caseStudies,
                                caseStudiesBattleCards: state.data.caseStudies.caseStudiesBattleCards.map(battleCard => {
                                    if (battleCard.battleCardId === action.battleCardId) {
                                        //battleCard.isEmptyAddButtonState = false;
                                        battleCard.isEmptyAddButtonState = !battleCard.isEmptyAddButtonState;
                                    }
                                    return battleCard
                                })
                            }
                        }
                        
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            profilesBattleCards: state.data.battleCards.profilesBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    battleCard.isEmptyAddButtonState = false;
                                }
                                return battleCard
                            })
                        }
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            discoveriesBattleCards: state.data.battleCards.discoveriesBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    battleCard.isEmptyAddButtonState = false;
                                }
                                return battleCard
                            })
                        }
                    })
            }
            break;
        case ACTIVATE_CARD_EDIT: 
        switch (action.section) {
            case 'objections':
                return ({
                    ...state,
                    data: {
                        ...state.data,
                        battleCards: {
                            ...state.data.battleCards,
                            objectionsBattleCards: state.data.battleCards.objectionsBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                
                                    battleCard.cards = battleCard.cards.map(card => { 
                                    if(card.cardId === action.cardId) {
                                      card.editing = true;
                                    }
                                    return card;
                                  })
                                }
                                return battleCard;
                            })
                        }
                    }
                    
                })
            case 'competitors':
                return ({
                    ...state,
                    data: {
                        ...state.data,
                        battleCards: {
                            ...state.data.battleCards,
                            competitorsBattleCards: state.data.battleCards.competitorsBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                
                                    battleCard.cards = battleCard.cards.map(card => { 
                                    if(card.cardId === action.cardId) {
                                      card.editing = true;
                                    }
                                    return card;
                                  })
                                }
                                return battleCard;
                            })
                        }
                    }
                    
                })
            case 'caseStudies':
                return ({
                    ...state,
                    data: {
                        ...state.data,
                        caseStudies: {
                            ...state.data.caseStudies,
                            caseStudiesBattleCards: state.data.caseStudies.caseStudiesBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                
                                    battleCard.cards = battleCard.cards.map(card => { 
                                    if(card.cardId === action.cardId) {
                                      card.editing = true;
                                    }
                                    return card;
                                  })
                                }
                                return battleCard;
                            })
                        }
                    }
                    
                })
            case 'profiles':
                return ({
                    ...state,
                    battleCards: {
                        ...state.data.battleCards,
                        profilesBattleCards: state.data.battleCards.profilesBattleCards.map(battleCard => {
                            if (battleCard.battleCardId === action.battleCardId) {
                            
                                battleCard.cards = battleCard.cards.map(card => { 
                                if(card.cardId === action.cardId) {
                                  card.editing = true;
                                }
                                return card;
                              })
                            }
                            return battleCard;
                        })
                    }
                })
            case 'discoveries':
                return ({
                    ...state,
                    battleCards: {
                        ...state.data.battleCards,
                        discoveriesBattleCards: state.data.battleCards.discoveriesBattleCards.map(battleCard => {
                            if (battleCard.battleCardId === action.battleCardId) {
                            
                                battleCard.cards = battleCard.cards.map(card => { 
                                if(card.cardId === action.cardId) {
                                  card.editing = true;
                                }
                                return card;
                              })
                            }
                            return battleCard;
                        })
                    }
                })
        }
        break;
        case EDIT_CARD:
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                objectionsBattleCards: state.data.battleCards.objectionsBattleCards.map(battleCard => {
                                    if (battleCard.battleCardId === action.battleCardId) {
                                        battleCard.cards = battleCard.cards.map(card => {
                                          if(card.cardId === action.cardId) {
                                            card.editing = false;
                                            card.text = action.text;
                                            
                                            var textarea = document.getElementById(card.cardId)
    
                                            textarea.style.cssText = 'height:50px; padding:0';
    
                                            var height = textarea.scrollHeight - 4 + 10
                                            textarea.style.cssText = 'height:' + height + 'px;padding:0';
    
                                            if (height >= 50) {
                                                card.height = height + 'px'
                                            } else {
                                                card.height = '50px'
                                            }                                        
                                          }
                                          return card;
                                        })
                                      }
                                      return battleCard;
                                })
                            }
                        }
                          
                    })
                case 'competitors':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            battleCards: {
                                ...state.data.battleCards,
                                competitorsBattleCards: state.data.battleCards.competitorsBattleCards.map(battleCard => {
                                    if (battleCard.battleCardId === action.battleCardId) {
                                        battleCard.cards = battleCard.cards.map(card => {
                                            if(card.cardId === action.cardId) {
                                                card.editing = false;
                                                card.text = action.text;
                                                
                                                var textarea = document.getElementById(card.cardId)
        
                                                textarea.style.cssText = 'height:50px; padding:0';
        
                                                var height = textarea.scrollHeight - 4 + 10
                                                textarea.style.cssText = 'height:' + height + 'px;padding:0';
        
                                                if (height >= 50) {
                                                    card.height = height + 'px'
                                                } else {
                                                    card.height = '50px'
                                                }                                        
                                              }
                                          return card;
                                        })
                                      }
                                      return battleCard;
                                })
                            }
                        }
                          
                    })
                case 'caseStudies':
                    return ({
                        ...state,
                        data: {
                            ...state.data,
                            caseStudies: {
                                ...state.data.caseStudies,
                                caseStudiesBattleCards: state.data.caseStudies.caseStudiesBattleCards.map(battleCard => {
                                    if (battleCard.battleCardId === action.battleCardId) {
                                        battleCard.cards = battleCard.cards.map(card => {
                                          if(card.cardId === action.cardId) {
                                            card.editing = false;
                                            card.text = action.text;
                                            
                                            var textarea = document.getElementById(card.cardId)
    
                                            textarea.style.cssText = 'height:50px; padding:0';
    
                                            var height = textarea.scrollHeight - 4 + 10
                                            textarea.style.cssText = 'height:' + height + 'px;padding:0';
    
                                            if (height >= 50) {
                                                card.height = height + 'px'
                                            } else {
                                                card.height = '50px'
                                            }                                        
                                          }
                                          return card;
                                        })
                                      }
                                      return battleCard;
                                })
                            }
                        }
                          
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            profilesBattleCards: state.data.battleCards.profilesBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    battleCard.cards = battleCard.cards.map(card => {
                                        if(card.cardId === action.cardId) {
                                            card.editing = false;
                                            card.text = action.text;
                                            
                                            var textarea = document.getElementById(card.cardId)
    
                                            textarea.style.cssText = 'height:50px; padding:0';
    
                                            var height = textarea.scrollHeight - 4 + 10
                                            textarea.style.cssText = 'height:' + height + 'px;padding:0';
    
                                            if (height >= 50) {
                                                card.height = height + 'px'
                                            } else {
                                                card.height = '50px'
                                            }                                        
                                          }
                                      return card;
                                    })
                                  }
                                  return battleCard;
                            })
                        }  
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.data.battleCards,
                            discoveriesBattleCards: state.data.battleCards.discoveriesBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    battleCard.cards = battleCard.cards.map(card => {
                                        if(card.cardId === action.cardId) {
                                            card.editing = false;
                                            card.text = action.text;
                                            
                                            var textarea = document.getElementById(card.cardId)
    
                                            textarea.style.cssText = 'height:50px; padding:0';
    
                                            var height = textarea.scrollHeight - 4 + 10
                                            textarea.style.cssText = 'height:' + height + 'px;padding:0';
    
                                            if (height >= 50) {
                                                card.height = height + 'px'
                                            } else {
                                                card.height = '50px'
                                            }                                        
                                          }
                                      return card;
                                    })
                                  }
                                  return battleCard;
                            })
                        }  
                    })
            }    
            break;
        default: {
            return state
        }
    }
}
  



/* export const visibilityFilter = (state = {activeFilter: FILTER_ALL}, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return ({
                activeFilter: action.filter
            })
        }
        default: {
            return state;
        }
    }
} */
