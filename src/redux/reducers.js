import React from 'react';
import uuid from 'uuid';
import {FILTER_ALL} from './actionTypes'
import { ADD_CARD, TOGGLE_TODO, DELETE_CARD, TRIGGER_ADD_CARD_STATE, ACTIVATE_CARD_EDIT, 
        EDIT_CARD, SET_FILTER } from './actionTypes'


const initialCardState = {
    cards: [
        {
            cardId: uuid.v4(),
            text: 'Content 1',
            cardType: 'basic',
            editing: false
        }
    ],
    isEmptyAddButtonState: true
}

export const cards = (state = initialCardState, action) => {
    switch (action.type) {
        case ADD_CARD: 
            return ({
                    cards: state.cards.concat([{
                        cardId: action.cardId,
                        text: 'NEW TASK',
                        cardType: action.cardType,
                        editing: false
                    }]),
                    isEmptyAddButtonState: true
            })
            
        case DELETE_CARD:
            return ({
                ...state,
                cards: state.cards.filter(card => card.cardId !== action.cardId),
            
            })
        
        case TRIGGER_ADD_CARD_STATE:
            return ({
                ...state,
                isEmptyAddButtonState: !state.isEmptyAddButtonState
               
            })
         
        case ACTIVATE_CARD_EDIT: 
            return ({
                ...state,
                cards: state.cards.map(card => {
                    if (card.cardId === action.cardId) {
                        card.editing = true;
                    }
                    return card;
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
