import React from 'react';
import uuid from 'uuid';


export const addBattleCard = () => ({
  type: 'ADD_BATTLE_CARD',
  battleCardId: uuid.v4(),
  cards: [],
  isEmptyAddButtonState: true,
  isAddCardState: false
})

export const deleteBattleCard = battleCardId => ({
  type: 'DELETE_BATTLE_CARD',
  battleCardId
})

export const addCard = (battleCardId, cardType) => ({
  type: 'ADD_CARD',
  battleCardId,
  cardType
})

export const deleteCard = (battleCardId, cardId) => ({
  type: 'DELETE_CARD',
  battleCardId,
  cardId
})

export const triggerAddCardState = battleCardId => ({
  type: 'TRIGGER_ADD_CARD_STATE',
  battleCardId
})




///FROM ONLINE TUTORIAL
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: uuid.v4(),
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}