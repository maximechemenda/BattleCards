import React from 'react';
import uuid from 'uuid';
import { ADD_CARD, TOGGLE_TODO, DELETE_CARD, TRIGGER_ADD_CARD_STATE, SET_FILTER } from './actionTypes';



export const addCard = (cardType) => (
    {
        type: ADD_CARD,
        id: uuid.v4(),
        cardType
    }
)

export const triggerAddCardState = () => (
    {
        type: TRIGGER_ADD_CARD_STATE
    } 
)


export const deleteCard = (id) => (
    {
        type: DELETE_CARD,
        id
    }
)





export const setFilter = (filter) => (
    {
        type: SET_FILTER,
        filter
    }
)

export const toggleTodo = (id) => (
    {
        type: TOGGLE_TODO,
        id
    }
)