//import uuid from 'uuid';
import {v4 as uuid} from 'uuid'

//import {FILTER_ALL} from './actionTypes'
import { ADD_CARD, DELETE_CARD, TRIGGER_ADD_CARD_STATE, ACTIVATE_CARD_EDIT, 
        EDIT_CARD, ADD_BATTLECARD, DELETE_BATTLECARD, TRIGGER_SECTION_STATE, MODIFY_BATTLECARD_TITLE,
        CHANGE_SELECTED_BATTLECARDS,
        CLEAR_SELECTED_BATTLECARDS, ADD_BATTLECARD_TO_SECTION_AND_SELECTED_BATTLECARDS,
        CHANGE_BLUE_HEADER_VALUE, CHANGE_RED_HEADER_VALUE, READ,
        FETCH_ITEMS_BEGIN, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE} from './actionTypes'


const initialBattleCardsState = {
    battleCards: {
        id: uuid(),
        objectionsBattleCards: [
            {
                cards: {
                    cardId: uuid(),
                    text: '',
                    cardType: 'warning',
                    editing: false
                },
                battleCardId: uuid(),
                isEmptyAddButtonState: true,
                titleValue: '',
                section: 'objections'
            }
        ],
        competitorsBattleCards: [
            {
                cards: {
                    cardId: uuid(),
                    text: '',
                    cardType: 'warning',
                    editing: false
                },
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
                    editing: false
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
                    editing: false
                },
                battleCardId: uuid(),
                isEmptyAddButtonState: true,
                titleValue: '',
                section: 'discoveries'
            }
        ],
        selectedBattleCards: [],
        isEmptyObjectionsState: true,
        isEmptyCompetitorsState: true,
        isEmptyProfilesState: true,
        isEmptyDiscoveriesState: true
    }
}


/* const initialBattleCardsState = {
    objectionsBattleCards: [],
    competitorsBattleCards: [], 
    profilesBattleCards: [],
    discoveriesBattleCards: [],
    selectedBattleCards: [],
    isEmptyObjectionsState: true,
    isEmptyCompetitorsState: true,
    isEmptyProfilesState: true,
    isEmptyDiscoveriesState: true
} */

/*
export const sectionStates = (state = initialSectionsStates, action) => {
    switch (action.type) {
        case TRIGGER_SECTION_STATE:
            switch (action.section) {
                case 'objections':
                        return ({
                            ...state,
                            isEmptyObjectionsState: false,
                            isEmptyCompetitorsState: true,
                            isEmptyProfilesState: true,
                            isEmptyDiscoveriesState: true,    
                        })
                case 'competitors':
                        return ({
                            ...state,
                            isEmptyObjectionsState: true,
                            isEmptyCompetitorsState: false,
                            isEmptyProfilesState: true,
                            isEmptyDiscoveriesState: true,    
                        })
                case 'profiles':
                    return ({
                        ...state,
                        isEmptyObjectionsState: true,
                        isEmptyCompetitorsState: true,
                        isEmptyProfilesState: false,
                        isEmptyDiscoveriesState: true,    
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        isEmptyObjectionsState: true,
                        isEmptyCompetitorsState: true,
                        isEmptyProfilesState: true,
                        isEmptyDiscoveriesState: false,    
                    })        
            }
        break;
        default:
            return state    
    }
}
*/

export const battleCards = (state = initialBattleCardsState, action) => {
    console.log('entering main reducer')

    switch (action.type) {
        case FETCH_ITEMS_BEGIN: 
            console.log('beginning fetching')
            return { 
                ...state,
                loading: true,
                errors: null
            }
          case FETCH_ITEMS_SUCCESS: 
            console.log('success fetching')
            return {
                ...state,
                loading: false,
                battleCards: action.payload.items
          }
          case FETCH_ITEMS_FAILURE: 
          console.log('failure fetching')
          console.log(action.payload.errors)
          return {
                ...state,
                loading: false,
                errors: action.payload.errors,
                battleCards : initialBattleCardsState.battleCards
          }
        //reads all the data from the store
        case READ: return state;
        



        case CHANGE_BLUE_HEADER_VALUE:
            switch (action.section) {
                case 'objections':
                    if (action.charCode === 13) {
                        console.log('entering 13')
                        return ({
                            ...state,
                            battleCards: state.battleCards.objectionsBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    console.log('entering other condition')
                                    battleCard.blueHeaderValues = battleCard.blueHeaderValues.concat([{
                                        headerId: uuid(),
                                        headerValue: ''
                                    }])
                                    console.log(battleCard.blueHeaderValues)
                                    return battleCard;
                                }
                            })
                        })
                    }
                    else {
                        return ({
                            ...state,
                            battleCards: state.battleCards.objectionsBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    battleCard.blueHeaderValues.map(header => {
                                        if (header.headerId === action.headerId) {
                                            header.headerValue = action.newValue;
                                        }
                                        return header;
                                    })
                                }
                                return battleCard;
                            })
                        })
                    }
                    
            }
        case TRIGGER_SECTION_STATE: 
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        battleCards: {
                        ...state.battleCards,
                        isEmptyObjectionsState: false,
                        isEmptyCompetitorsState: true,
                        isEmptyProfilesState: true,
                        isEmptyDiscoveriesState: true,
                        }
                    })
                case 'competitors':
                    return ({
                        ...state,
                        battleCards: {
                        ...state.battleCards,
                        isEmptyObjectionsState: true,
                        isEmptyCompetitorsState: false,
                        isEmptyProfilesState: true,
                        isEmptyDiscoveriesState: true,
                        }
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                        ...state.battleCards,
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
                        ...state.battleCards,
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
                        battleCards: {
                            ...state.battleCards,
                            objectionsBattleCards: state.battleCards.objectionsBattleCards.concat([{
                                cards: [],
                                battleCardId: action.id,
                                isEmptyAddButtonState: true,
                                titleValue: '',
                                section: 'objections'
                            }]),
                            selectedBattleCards: state.battleCards.selectedBattleCards.concat([{
                                cards: [],
                                battleCardId: action.id,
                                isEmptyAddButtonState: true,
                                titleValue: '',
                                section: 'objections'
                            
                            }])
                        }
                    })
                case 'competitors':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            competitorsBattleCards: state.battleCards.competitorsBattleCards.concat([{
                                cards: [],
                                battleCardId: action.id,
                                isEmptyAddButtonState: true,
                                titleValue: '',
                                section: 'competitors'
                            }]),
                            selectedBattleCards: state.battleCards.selectedBattleCards.concat([{
                                cards: [],
                                battleCardId: action.id,
                                isEmptyAddButtonState: true,
                                titleValue: '',
                                section: 'competitors'
                            
                            }])
                        }
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            profilesBattleCards: state.battleCards.profilesBattleCards.concat([{
                                cards: [],
                                battleCardId: action.id,
                                isEmptyAddButtonState: true,
                                titleValue: '',
                                section: 'profiles'
                            }]),
                            selectedBattleCards: state.battleCards.selectedBattleCards.concat([{
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
                            ...state.battleCards,
                            discoveriesBattleCards: state.battleCards.discoveriesBattleCards.concat([{
                                cards: [],
                                battleCardId: action.id,
                                isEmptyAddButtonState: true,
                                titleValue: '',
                                section: 'discoveries'
                            }]),
                            selectedBattleCards: state.battleCards.selectedBattleCards.concat([{
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
                battleCards: {
                    ...state.battleCards,
                    selectedBattleCards: []
                }
            })
        case CHANGE_SELECTED_BATTLECARDS:
            switch (action.section) {
                case 'objections':
                    if ((state.battleCards.selectedBattleCards.map(battleCard => battleCard.battleCardId)).includes(action.battleCardId)) {
                        return ({
                            ...state,
                            battleCards: {
                                ...state.battleCards,
                                selectedBattleCards: state.battleCards.selectedBattleCards.filter(battleCard => battleCard.battleCardId !== action.battleCardId)
                            }
                        })
                    } 
                    else {
                        return ({
                            ...state,
                            battleCards: {
                                ...state.battleCards,
                                selectedBattleCards: state.battleCards.selectedBattleCards.concat(
                                    state.battleCards.objectionsBattleCards.filter(battleCard => battleCard.battleCardId === action.battleCardId)
                                )
                            }
                        })
                    }
                case 'competitors':
                    if ((state.battleCards.selectedBattleCards.map(battleCard => battleCard.battleCardId)).includes(action.battleCardId)) {
                        return ({
                            ...state,
                            battleCards: {
                                ...state.battleCards,
                                selectedBattleCards: state.battleCards.selectedBattleCards.filter(battleCard => battleCard.battleCardId !== action.battleCardId)
                            }
                        })
                    } 
                    else {
                        return ({
                            ...state,
                            battleCards: {
                                ...state.battleCards,
                                selectedBattleCards: state.battleCards.selectedBattleCards.concat(
                                    state.battleCards.competitorsBattleCards.filter(battleCard => battleCard.battleCardId === action.battleCardId)
                                )
                            }
                        })
                    }
                case 'profiles':
                    if ((state.battleCards.selectedBattleCards.map(battleCard => battleCard.battleCardId)).includes(action.battleCardId)) {
                        return ({
                            ...state,
                            battleCards: {
                                ...state.battleCards,
                                selectedBattleCards: state.battleCards.selectedBattleCards.filter(battleCard => battleCard.battleCardId !== action.battleCardId)
                            }
                        })
                    } 
                    else {
                        return ({
                            ...state,
                            battleCards: {
                                ...state.battleCards,
                                selectedBattleCards: state.battleCards.selectedBattleCards.concat(
                                    state.battleCards.profilesBattleCards.filter(battleCard => battleCard.battleCardId === action.battleCardId)
                                )
                            }
                        })
                    }
                case 'discoveries':
                    if ((state.battleCards.selectedBattleCards.map(battleCard => battleCard.battleCardId)).includes(action.battleCardId)) {
                        return ({
                            ...state,
                            battleCards: {
                                ...state.battleCards,
                                selectedBattleCards: state.battleCards.selectedBattleCards.filter(battleCard => battleCard.battleCardId !== action.battleCardId)
                            }
                        })
                    } 
                    else {
                        return ({
                            ...state,
                            battleCards: {
                                ...state.battleCards,
                                selectedBattleCards: state.battleCards.selectedBattleCards.concat(
                                    state.battleCards.discoveriesBattleCards.filter(battleCard => battleCard.battleCardId === action.battleCardId)
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
                        battleCards: {
                            ...state.battleCards,
                            objectionsBattleCards: state.battleCards.objectionsBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    battleCard.titleValue = action.newValue;
                                }
                                return battleCard
                            })
                        } 
                    })
                case 'competitors':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            competitorsBattleCards: state.battleCards.competitorsBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    battleCard.titleValue = action.newValue;
                                }
                                return battleCard
                            })
                        } 
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            profilesBattleCards: state.battleCards.profilesBattleCards.map(battleCard => {
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
                            ...state.battleCards,
                            discoveriesBattleCards: state.battleCards.discoveriesBattleCards.map(battleCard => {
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
                        battleCards: {
                            ...state.battleCards,
                            objectionsBattleCards:  state.battleCards.objectionsBattleCards.concat([{  
                            cards: [],
                            battleCardId: uuid(),
                            isEmptyAddButtonState: true,
                            titleValue: '',
                            section: 'objections',
                            blueHeaderValues: [{
                                headerId: uuid(),
                                headerValue: ''
                            }],
                            redHeaderValues: []
                        }])}
                    })
                case 'competitors':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            competitorsBattleCards:  state.battleCards.competitorsBattleCards.concat([{ 
                            cards: [],
                            battleCardId: uuid(),
                            isEmptyAddButtonState: true,
                            titleValue: '',
                            section: 'competitors',
                            blueHeaderValues: [{
                                headerId: uuid(),
                                headerValue: ''
                            }],
                            redHeaderValues: []
                        }])}
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            profilesBattleCards:  state.battleCards.profilesBattleCards.concat([{
                            cards: [],
                            battleCardId: uuid(),
                            isEmptyAddButtonState: true,
                            titleValue: '',
                            section: 'profiles',
                            blueHeaderValues: [{
                                headerId: uuid(),
                                headerValue: ''
                            }],
                            redHeaderValues: []
                        }])}
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            discoveriesBattleCards:  state.battleCards.discoveriesBattleCards.concat([{ //TODO: this is the right way (almost sure)
                            cards: [],
                            battleCardId: uuid(),
                            isEmptyAddButtonState: true,
                            titleValue: '',
                            section: 'discoveries',
                            blueHeaderValues: [{
                                headerId: uuid(),
                                headerValue: ''
                            }],
                            redHeaderValues: []
                        }])}
                    })
            }
            break;
        case DELETE_BATTLECARD:
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            objectionsBattleCards: state.battleCards.objectionsBattleCards.filter(
                                battleCard => battleCard.battleCardId !== action.battleCardId
                            )
                        }
                    })
                case 'competitors':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            competitorsBattleCards: state.battleCards.competitorsBattleCards.filter(
                                battleCard => battleCard.battleCardId !== action.battleCardId
                            )
                        }
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            profilesBattleCards: state.battleCards.profilesBattleCards.filter(
                                battleCard => battleCard.battleCardId !== action.battleCardId
                            )
                        }
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            discoveriesBattleCards: state.battleCards.discoveriesBattleCards.filter(
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
                        battleCards: {
                            ...state.battleCards,
                            objectionsBattleCards: state.battleCards.objectionsBattleCards.map(battleCard => {
                                if(battleCard.battleCardId === action.battleCardId) { // finds the battleCard where we want to add a card
                                    battleCard.isEmptyAddButtonState = true;
                                    battleCard.cards = battleCard.cards.concat([{
                                      cardId: uuid(),
                                      text: '',
                                      cardType: action.cardType,
                                      editing: false
                                    }])
                                  }
                                  return battleCard;
                            })
                        }
                    })
                case 'competitors':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            competitorsBattleCards: state.battleCards.competitorsBattleCards.map(battleCard => {
                                if(battleCard.battleCardId === action.battleCardId) { // finds the battleCard where we want to add a card
                                    battleCard.isEmptyAddButtonState = true;
                                    battleCard.cards = battleCard.cards.concat([{
                                      cardId: uuid(),
                                      text: '',
                                      cardType: action.cardType,
                                      editing: false
                                    }])
                                  }
                                  return battleCard;
                            })
                        }
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            profilesBattleCards: state.battleCards.profilesBattleCards.map(battleCard => {
                                if(battleCard.battleCardId === action.battleCardId) { // finds the battleCard where we want to add a card
                                    battleCard.isEmptyAddButtonState = true;
                                    battleCard.cards = battleCard.cards.concat([{
                                      cardId: uuid(),
                                      text: '',
                                      cardType: action.cardType,
                                      editing: false
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
                            ...state.battleCards,
                            discoveriesBattleCards: state.battleCards.discoveriesBattleCards.map(battleCard => {
                                if(battleCard.battleCardId === action.battleCardId) { // finds the battleCard where we want to add a card
                                    battleCard.isEmptyAddButtonState = true;
                                    battleCard.cards = battleCard.cards.concat([{
                                      cardId: uuid(),
                                      text: '',
                                      cardType: action.cardType,
                                      editing: false
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
                        battleCards: {
                            ...state.battleCards,
                            objectionsBattleCards: state.battleCards.objectionsBattleCards.map(battleCard => {
                                if(battleCard.battleCardId === action.battleCardId) {
                                    battleCard.cards = battleCard.cards.filter(card => card.cardId !== action.cardId)
                                }
                                return battleCard;
                            })
                        }  
                    })
                case 'competitors':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            competitorsBattleCards: state.battleCards.competitorsBattleCards.map(battleCard => {
                                if(battleCard.battleCardId === action.battleCardId) {
                                    battleCard.cards = battleCard.cards.filter(card => card.cardId !== action.cardId)
                                }
                                return battleCard;
                            })
                        }  
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            profilesBattleCards: state.battleCards.profilesBattleCards.map(battleCard => {
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
                            ...state.battleCards,
                            discoveriesBattleCards: state.battleCards.discoveriesBattleCards.map(battleCard => {
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
                        battleCards: {
                            ...state.battleCards,
                            objectionsBattleCards: state.battleCards.objectionsBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    battleCard.isEmptyAddButtonState = false;
                                }
                                return battleCard
                            })
                        }
                    })
                case 'competitors':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            competitorsBattleCards: state.battleCards.competitorsBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    battleCard.isEmptyAddButtonState = false;
                                }
                                return battleCard
                            })
                        }
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            profilesBattleCards: state.battleCards.profilesBattleCards.map(battleCard => {
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
                            ...state.battleCards,
                            discoveriesBattleCards: state.battleCards.discoveriesBattleCards.map(battleCard => {
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
                    battleCards: {
                        ...state.battleCards,
                        objectionsBattleCards: state.battleCards.objectionsBattleCards.map(battleCard => {
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
            case 'competitors':
                return ({
                    ...state,
                    battleCards: {
                        ...state.battleCards,
                        competitorsBattleCards: state.battleCards.competitorsBattleCards.map(battleCard => {
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
            case 'profiles':
                return ({
                    ...state,
                    battleCards: {
                        ...state.battleCards,
                        profilesBattleCards: state.battleCards.profilesBattleCards.map(battleCard => {
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
                        ...state.battleCards,
                        discoveriesBattleCards: state.battleCards.discoveriesBattleCards.map(battleCard => {
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
                        battleCards: {
                            ...state.battleCards,
                            objectionsBattleCards: state.battleCards.objectionsBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    battleCard.cards = battleCard.cards.map(card => {
                                      if(card.cardId === action.cardId) {
                                        card.editing = false;
                                        card.text = action.text;
                                      }
                                      return card;
                                    })
                                  }
                                  return battleCard;
                            })
                        }  
                    })
                case 'competitors':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            competitorsBattleCards: state.battleCards.competitorsBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    battleCard.cards = battleCard.cards.map(card => {
                                      if(card.cardId === action.cardId) {
                                        card.editing = false;
                                        card.text = action.text;
                                      }
                                      return card;
                                    })
                                  }
                                  return battleCard;
                            })
                        }  
                    })
                case 'profiles':
                    return ({
                        ...state,
                        battleCards: {
                            ...state.battleCards,
                            profilesBattleCards: state.battleCards.profilesBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    battleCard.cards = battleCard.cards.map(card => {
                                      if(card.cardId === action.cardId) {
                                        card.editing = false;
                                        card.text = action.text;
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
                            ...state.battleCards,
                            discoveriesBattleCards: state.battleCards.discoveriesBattleCards.map(battleCard => {
                                if (battleCard.battleCardId === action.battleCardId) {
                                    battleCard.cards = battleCard.cards.map(card => {
                                      if(card.cardId === action.cardId) {
                                        card.editing = false;
                                        card.text = action.text;
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
