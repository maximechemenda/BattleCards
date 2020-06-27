//import uuid from 'uuid';
import {v4 as uuid} from 'uuid'
import axios from 'axios';

import { ADD_CARD, DELETE_CARD, TRIGGER_ADD_CARD_STATE, ACTIVATE_CARD_EDIT, EDIT_CARD,
    ADD_BATTLECARD, DELETE_BATTLECARD, TRIGGER_SECTION_STATE, MODIFY_BATTLECARD_TITLE,
    CHANGE_SELECTED_BATTLECARDS, CLEAR_SELECTED_BATTLECARDS,
    ADD_BATTLECARD_TO_SECTION_AND_SELECTED_BATTLECARDS, READ,
    FETCH_ITEMS_BEGIN, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE, UPDATE_CARD_HEIGHT,
    TRIGGER_BIG_SECTION_STATE, CLEAR_SELECTED_CASE_STUDIES_BATTLECARDS, ADD_BLUE_HEADER_VALUE,
    EDIT_BLUE_HEADER_VALUE, EDIT_SEARCH_BOX_VALUE} from './actionTypes';



export const editSearchBoxValue = (text) => ({
    type: EDIT_SEARCH_BOX_VALUE,
    text
})

export const editBlueHeaderValue = (text, battleCardId, headerId, section, keyCode, color) => ({
    type: EDIT_BLUE_HEADER_VALUE,
    text,
    battleCardId,
    headerId,
    section,
    keyCode,
    color
})

export const addBlueHeaderValue = (battleCardId, section) => ({
    type: ADD_BLUE_HEADER_VALUE,
    battleCardId,
    section
})

export const clearSelectedCaseStudiesBattleCards = () => ({
    type: CLEAR_SELECTED_CASE_STUDIES_BATTLECARDS
})

export const triggerBigSectionState = (bigSection) => ({
    type: TRIGGER_BIG_SECTION_STATE,
    bigSection
})

export const updateCardHeight = (height, cardId) => ({
    type: UPDATE_CARD_HEIGHT,
    height,
    cardId})

export const fetchItemsBegin = () => ({
    type: FETCH_ITEMS_BEGIN
})

export const fetchItemsSuccess = items => ({
    type: FETCH_ITEMS_SUCCESS,
    payload: { items }
})

export const fetchItemsFailure = errors => ({
    type: FETCH_ITEMS_FAILURE,
    payload: { errors }
})

//dispatched when all the items stored in redux store needs to be read
export const readItems = () => {
    return (dispatch) => {                     // function starts
      dispatch(fetchItemsBegin());             // fetching begins
      return axios.get('/api/battleCards')       // req data from server
        .then(({data}) => {
            {console.log('data')} 
            {console.log(data)}
          dispatch(fetchItemsSuccess(data));   // success 
        })
        .catch(error => dispatch(fetchItemsFailure(error))); //errors
    }
  }

export const addBattleCardToSectionAndSelectedBattleCards = (section) => (
    {
        type: ADD_BATTLECARD_TO_SECTION_AND_SELECTED_BATTLECARDS,
        id: uuid(),
        section
    }
)

export const clearSelectedBattleCards = () => (
    {
        type: CLEAR_SELECTED_BATTLECARDS,
    }
)

export const changeSelectedBattleCards = (battleCardId, section) => (
    {
        type: CHANGE_SELECTED_BATTLECARDS,
        battleCardId,
        section
    }
)

export const modifyBattleCardTitle = (newValue, battleCardId, section) => (
    {
        type: MODIFY_BATTLECARD_TITLE,
        newValue,
        battleCardId,
        section
    }
)

export const triggerSectionState = (section) => (
    {
        type: TRIGGER_SECTION_STATE,
        section
    }
)

export const addCard = (battleCardId, cardType, section) => (
    {
        type: ADD_CARD,
        cardId: uuid(),
        battleCardId,
        cardType,
        section
    }
)

export const triggerAddCardState = (battleCardId, section) => (
    {
        type: TRIGGER_ADD_CARD_STATE,
        battleCardId,
        section
    } 
)


export const deleteCard = (e, battleCardId, cardId, section) => (
    {
        type: DELETE_CARD,
        battleCardId,
        cardId,
        e, 
        section
    }
)

export const activateCardEdit = (battleCardId, cardId, section) => (
    {
        type: ACTIVATE_CARD_EDIT,
        battleCardId,
        cardId,
        section
    }
)

export const editCard = (text, battleCardId, cardId, section, charCode) => (
    {
        type: EDIT_CARD,
        battleCardId,
        cardId,
        text, 
        section,
        charCode
        
    }
)

export const addBattleCard = (section) => (
    {
        type: ADD_BATTLECARD,
        section
    }
)

export const deleteBattleCard = (battleCardId, section) => (
    {
        type: DELETE_BATTLECARD,
        battleCardId,
        section
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