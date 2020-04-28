import React from 'react';
import uuid from 'uuid';


export const addBattleCard = () => ({
  type: 'ADD_BATTLECARD',
  battleCardId: uuid.v4(),
  cards: [],
  isEmptyAddButtonState: true,
  isAddCardState: false
})

export const deleteBattleCard = battleCardId => ({
  type: 'DELETE_BATTLECARD',
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
