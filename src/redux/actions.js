import React from 'react';
import uuid from 'uuid';
import { ADD_CARD, DELETE_CARD, TRIGGER_ADD_CARD_STATE, ACTIVATE_CARD_EDIT, EDIT_CARD} from './actionTypes';

export const addCard = (cardType) => (
    {
        type: ADD_CARD,
        cardId: uuid.v4(),
        cardType
    }
)

export const triggerAddCardState = () => (
    {
        type: TRIGGER_ADD_CARD_STATE
    } 
)


export const deleteCard = (cardId) => (
    {
        type: DELETE_CARD,
        cardId
    }
)

export const activateCardEdit = (cardId) => (
    {
        type: ACTIVATE_CARD_EDIT,
        cardId
    }
)

export const editCard = (text, cardId) => (
    {
        type: EDIT_CARD,
        text,
        cardId
    }
)







/* export const setFilter = (filter) => (
    {
        type: SET_FILTER,
        filter
    }
)

export const toggleTodo = (cardId) => (
    {
        type: TOGGLE_TODO,
        cardId
    }
) */