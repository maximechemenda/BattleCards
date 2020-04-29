import uuid from 'uuid';
//import {FILTER_ALL} from './actionTypes'
import { ADD_CARD, DELETE_CARD, TRIGGER_ADD_CARD_STATE, ACTIVATE_CARD_EDIT, 
        EDIT_CARD, ADD_BATTLECARD, DELETE_BATTLECARD} from './actionTypes'


const initialCardState = {
    battleCards: [{
        cards: [{
            cardId: uuid.v4(),
            text: 'Content 1',
            cardType: 'basic',
            editing: false
        }],
        battleCardId: uuid.v4(),
        isEmptyAddButtonState: true
    }],
}

export const battleCards = (state = initialCardState, action) => {
    switch (action.type) {
        case ADD_BATTLECARD:
            console.log('entering addbattlecard')
            return ({
                ...state,
                battleCards: state.battleCards.concat([{
                    cards: [],
                    battleCardId: uuid.v4(),
                    isEmptyAddButtonState: true
                }])
            })
        case DELETE_BATTLECARD:
            //e.stopPropagation()
            return ({
                ...state,
                battleCards: state.battleCards.filter(battleCard => battleCard.battleCardId !== action.battleCardId)
            })

        case ADD_CARD: 
            return ({
                    battleCards: state.battleCards.map(battleCard => {
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
        case DELETE_CARD:
            return ({
                ...state,
                battleCards: state.battleCards.map(battleCard => {
                    if(battleCard.battleCardId === action.battleCardId) {
                        battleCard.cards = battleCard.cards.filter(card => card.cardId !== action.cardId)
                      }
                      return battleCard;
                })
                
                
            
            })
        case TRIGGER_ADD_CARD_STATE:
            return ({
                ...state,
                isEmptyAddButtonState: !state.isEmptyAddButtonState
               
            })
        case ACTIVATE_CARD_EDIT: 
            return ({
                ...state,
                battleCards: state.battleCards.map(battleCard => {
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
        case EDIT_CARD:
            return ({
                ...state,
                cards: state.cards.map(card => {
                    if (card.cardId === action.cardId) {
                        card.editing = false;
                        card.text = action.text;
                      }
                    return card;
                })
            })    
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
