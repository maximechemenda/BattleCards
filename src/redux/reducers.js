import uuid from 'uuid';
//import {FILTER_ALL} from './actionTypes'
import { ADD_CARD, DELETE_CARD, TRIGGER_ADD_CARD_STATE, ACTIVATE_CARD_EDIT, 
        EDIT_CARD, ADD_BATTLECARD, DELETE_BATTLECARD, TRIGGER_SECTION_STATE} from './actionTypes'


const initialState = {
    objectionsBattleCards: []
    /* battleCards: {
        objections: {
            objectionsBattleCards: [],          
        },
        competitors: {
            competitorsBattleCards: [],           
        },
        profiles: {
            profilesBattleCards: [],            
        },
        discoveries: {
            discoveriesBattleCards: [],
        }, */
    /* ,

    isEmptyObjectionsState: true,
    isEmptyCompetitorsState: true,
    isEmptyProfilesState: true,
    isEmptyDiscoveriesState: true */ 
}

export const sectionStates = (state = false, action) => {
    switch (action.type) {
        case TRIGGER_SECTION_STATE:
            return ({
                ...state,
                isEmptyObjectionsState: false
            })
        default:
            return state    
    }
}

export const battleCards = (state = initialState, action) => {
    switch (action.type) {
        /* case TRIGGER_SECTION_STATE:
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        battleCards: state.battleCards.isEmptyObjectionsState: false
                    })
            }
            break; */
        case ADD_BATTLECARD:
            switch (action.section) {
                case 'objections':
                    return ({
                        ...state,
                        objectionsBattleCards: state.objectionsBattleCards.concat([{
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
