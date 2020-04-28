import React from 'react';
import uuid from 'uuid';
import {FILTER_ALL} from './actionTypes'
import { ADD_CARD, TOGGLE_TODO, DELETE_CARD, TRIGGER_ADD_CARD_STATE, SET_FILTER } from './actionTypes'


const initialCardState = {
    cards: [
        {
            id: uuid.v4(),
            text: 'Content 1',
            cardType: 'basic'
        }
    ],
    isEmptyAddButtonState: true
}

export const cards = (state = initialCardState, action) => {
    switch (action.type) {
        case ADD_CARD: {
            return ({
                    cards: state.cards.concat([{
                        id: action.id,
                        text: 'NEW TASK',
                        cardType: action.cardType
                    }]),
                    isEmptyAddButtonState: true
            })
        }    
        case DELETE_CARD:{
            return ({
                
                cards: state.cards.filter(card => card.id !== action.id)
            })
        }
        case TRIGGER_ADD_CARD_STATE:{
            return ({
                ...state,
                isEmptyAddButtonState: !state.isEmptyAddButtonState
               
            })
        } 
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






/* const initialTodoState = {
    nextId: 2,
    cards:
    {
        1: {
            content: 'Content 111',
            completed: false
        }
    }
}

export const cards = (state = initialTodoState, action) => {
    switch (action.type) {
        case ADD_CARD: {
            return (
                {
                    ...state,
                    cards: {
                        ...state.cards,
                        [state.nextId]: {
                            completed: false,
                            content: action.content
                        },
                    },

                    nextId: state.nextId + 1
                }
            )
        }
        case TOGGLE_TODO:{
            console.log(action.payload)
            return(
                {
                    ...state,
                    cards:{
                        ...state.cards,
                        [action.payload.id]:{
                            ...state.cards[action.payload.id],
                            completed: !(state.cards[action.payload.id].completed)
                        }
                    }
                }
            )
        }

        default: {
            return state
        }
    }
}


export const visibilityFilter = (state = {activeFilter: FILTER_ALL}, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return ({
                activeFilter: action.payload.filter
            })
        }

        default: {
            return state;
        }
    }
} */