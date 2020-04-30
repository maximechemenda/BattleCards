import uuid from 'uuid';
//import {FILTER_ALL} from './actionTypes'
import { ADD_CARD, DELETE_CARD, TRIGGER_ADD_CARD_STATE, ACTIVATE_CARD_EDIT, 
        EDIT_CARD, ADD_BATTLECARD, DELETE_BATTLECARD, TRIGGER_SECTION_STATE, MODIFY_BATTLECARD_TITLE} from './actionTypes'


const initialBattleCardsState = {
    objectionsBattleCards: [],
    competitorsBattleCards: [], 
    profilesBattleCards: [],
    discoveriesBattleCards: []
}

const initialSectionsStates = {
    isEmptyObjectionsState: true,
    isEmptyCompetitorsState: true,
    isEmptyProfilesState: true,
    isEmptyDiscoveriesState: true,
}

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

export const battleCards = (state = initialBattleCardsState, action) => {
    switch (action.type) {
        case MODIFY_BATTLECARD_TITLE:
            return ({
                ...state,
                objectionsBattleCards: state.objectionsBattleCards.map(battleCard => {
                    if (battleCard.battleCardId === action.battleCardId) {
                        battleCard.titleValue = action.newValue;
                    }
                    return battleCard
                })
            })
        case ADD_BATTLECARD:
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        objectionsBattleCards: state.objectionsBattleCards.concat([{
                            cards: [],
                            battleCardId: uuid.v4(),
                            isEmptyAddButtonState: true,
                            titleValue: ''
                        }])
                    })
                case 'competitors':
                    return ({
                        ...state,
                        competitorsBattleCards: state.competitorsBattleCards.concat([{
                            cards: [],
                            battleCardId: uuid.v4(),
                            isEmptyAddButtonState: true

                        }])
                    })
                case 'profiles':
                    return ({
                        ...state,
                        profilesBattleCards: state.profilesBattleCards.concat([{
                            cards: [],
                            battleCardId: uuid.v4(),
                            isEmptyAddButtonState: true

                        }])
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        discoveriesBattleCards: state.discoveriesBattleCards.concat([{
                            cards: [],
                            battleCardId: uuid.v4(),
                            isEmptyAddButtonState: true

                        }])
                    })
            }
            break;
        case DELETE_BATTLECARD:
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        objectionsBattleCards: state.objectionsBattleCards.filter(
                            battleCard => battleCard.battleCardId !== action.battleCardId
                        )
                    })
                case 'competitors':
                    return ({
                        ...state,
                        competitorsBattleCards: state.competitorsBattleCards.filter(
                            battleCard => battleCard.battleCardId !== action.battleCardId
                        )
                    })
                case 'profiles':
                    return ({
                        ...state,
                        profilesBattleCards: state.profilesBattleCards.filter(
                            battleCard => battleCard.battleCardId !== action.battleCardId
                        )
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        discoveriesBattleCards: state.discoveriesBattleCards.filter(
                            battleCard => battleCard.battleCardId !== action.battleCardId
                        )
                    })
            }
            break;
        case ADD_CARD: 
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        objectionsBattleCards: state.objectionsBattleCards.map(battleCard => {
                            if(battleCard.battleCardId === action.battleCardId) { // finds the battleCard where we want to add a card
                                battleCard.isEmptyAddButtonState = true;
                                battleCard.cards = battleCard.cards.concat([{
                                  cardId: uuid.v4(),
                                  text: 'New task',
                                  cardType: action.cardType,
                                  editing: false
                                }])
                              }
                              return battleCard;
                        })
                    })
                case 'competitors':
                    return ({
                        ...state,
                        competitorsBattleCards: state.competitorsBattleCards.map(battleCard => {
                            if(battleCard.battleCardId === action.battleCardId) { // finds the battleCard where we want to add a card
                                battleCard.isEmptyAddButtonState = true;
                                battleCard.cards = battleCard.cards.concat([{
                                  cardId: uuid.v4(),
                                  text: 'New task',
                                  cardType: action.cardType,
                                  editing: false
                                }])
                              }
                              return battleCard;
                        })
                    })
                case 'profiles':
                    return ({
                        ...state,
                        profilesBattleCards: state.profilesBattleCards.map(battleCard => {
                            if(battleCard.battleCardId === action.battleCardId) { // finds the battleCard where we want to add a card
                                battleCard.isEmptyAddButtonState = true;
                                battleCard.cards = battleCard.cards.concat([{
                                  cardId: uuid.v4(),
                                  text: 'New task',
                                  cardType: action.cardType,
                                  editing: false
                                }])
                              }
                              return battleCard;
                        })
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        discoveriesBattleCards: state.discoveriesBattleCards.map(battleCard => {
                            if(battleCard.battleCardId === action.battleCardId) { // finds the battleCard where we want to add a card
                                battleCard.isEmptyAddButtonState = true;
                                battleCard.cards = battleCard.cards.concat([{
                                  cardId: uuid.v4(),
                                  text: 'New task',
                                  cardType: action.cardType,
                                  editing: false
                                }])
                              }
                              return battleCard;
                        })
                    })
            }
            break;
        case DELETE_CARD:
            (action.e).stopPropagation()
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        objectionsBattleCards: state.objectionsBattleCards.map(battleCard => {
                            if(battleCard.battleCardId === action.battleCardId) {
                                battleCard.cards = battleCard.cards.filter(card => card.cardId !== action.cardId)
                            }
                            return battleCard;
                        })
                    })
                case 'competitors':
                    return ({
                        ...state,
                        competitorsBattleCards: state.competitorsBattleCards.map(battleCard => {
                            if(battleCard.battleCardId === action.battleCardId) {
                                battleCard.cards = battleCard.cards.filter(card => card.cardId !== action.cardId)
                            }
                            return battleCard;
                        })
                    })
                case 'profiles':
                    return ({
                        ...state,
                        profilesBattleCards: state.profilesBattleCards.map(battleCard => {
                            if(battleCard.battleCardId === action.battleCardId) {
                                battleCard.cards = battleCard.cards.filter(card => card.cardId !== action.cardId)
                            }
                            return battleCard;
                        })
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        discoveriesBattleCards: state.discoveriesBattleCards.map(battleCard => {
                            if(battleCard.battleCardId === action.battleCardId) {
                                battleCard.cards = battleCard.cards.filter(card => card.cardId !== action.cardId)
                            }
                            return battleCard;
                        })
                    })                  
            }
            break;
        case TRIGGER_ADD_CARD_STATE:
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        objectionsBattleCards: state.objectionsBattleCards.map(battleCard => {
                            if (battleCard.battleCardId === action.battleCardId) {
                                battleCard.isEmptyAddButtonState = false;
                            }
                            return battleCard
                        })
                    
                    })
                case 'competitors':
                    return ({
                        ...state,
                        competitorsBattleCards: state.competitorsBattleCards.map(battleCard => {
                            if (battleCard.battleCardId === action.battleCardId) {
                                battleCard.isEmptyAddButtonState = false;
                            }
                            return battleCard
                        })
                    
                    })
                case 'profiles':
                    return ({
                        ...state,
                        profilesBattleCards: state.profilesBattleCards.map(battleCard => {
                            if (battleCard.battleCardId === action.battleCardId) {
                                battleCard.isEmptyAddButtonState = false;
                            }
                            return battleCard
                        })
                    
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        discoveriesBattleCards: state.discoveriesBattleCards.map(battleCard => {
                            if (battleCard.battleCardId === action.battleCardId) {
                                battleCard.isEmptyAddButtonState = false;
                            }
                            return battleCard
                        })
                    
                    })
            }
            break;
        case ACTIVATE_CARD_EDIT: 
        switch (action.section) {
            case 'objections':
                return ({
                    ...state,
                    objectionsBattleCards: state.objectionsBattleCards.map(battleCard => {
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
                })
            case 'competitors':
                return ({
                    ...state,
                    competitorsBattleCards: state.competitorsBattleCards.map(battleCard => {
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
                })
            case 'profiles':
                return ({
                    ...state,
                    profilesBattleCards: state.profilesBattleCards.map(battleCard => {
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
                })
            case 'discoveries':
                return ({
                    ...state,
                    discoveriesBattleCards: state.discoveriesBattleCards.map(battleCard => {
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
                })
        }
        break;
        case EDIT_CARD:
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        objectionsBattleCards: state.objectionsBattleCards.map(battleCard => {
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
                    })
                case 'competitors':
                    return ({
                        ...state,
                        competitorsBattleCards: state.competitorsBattleCards.map(battleCard => {
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
                    })
                case 'profiles':
                    return ({
                        ...state,
                        profilesBattleCards: state.profilesBattleCards.map(battleCard => {
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
                    })
                case 'discoveries':
                    return ({
                        ...state,
                        discoveriesBattleCards: state.discoveriesBattleCards.map(battleCard => {
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
