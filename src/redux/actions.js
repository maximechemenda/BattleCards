import React from 'react';
import uuid from 'uuid';
import { ADD_CARD, DELETE_CARD, TRIGGER_ADD_CARD_STATE, ACTIVATE_CARD_EDIT, EDIT_CARD, ADD_BATTLECARD, DELETE_BATTLECARD} from './actionTypes';

export const addCard = (battleCardId, cardType) => (
    {
        type: ADD_CARD,
        cardId: uuid.v4(),
        battleCardId,
        cardType
    }
)

export const triggerAddCardState = () => (
    {
        type: TRIGGER_ADD_CARD_STATE
    } 
)


export const deleteCard = (battleCardId, cardId) => (
    {
        type: DELETE_CARD,
        battleCardId,
        cardId
    }
)

export const activateCardEdit = (battleCardId, cardId) => (
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

export const addBattleCard = () => (
    {
        type: ADD_BATTLECARD
    }
)

export const deleteBattleCard = (battleCardId) => (
    {
        type: DELETE_BATTLECARD,
        battleCardId
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