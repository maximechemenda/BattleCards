import uuid from 'uuid';
import { ADD_CARD, DELETE_CARD, TRIGGER_ADD_CARD_STATE, ACTIVATE_CARD_EDIT, EDIT_CARD,
    ADD_BATTLECARD, DELETE_BATTLECARD, TRIGGER_SECTION_STATE, MODIFY_BATTLECARD_TITLE,
    CHANGE_SELECTED_BATTLECARDS, CLEAR_SELECTED_BATTLECARDS,
    ADD_BATTLECARD_TO_SECTION_AND_SELECTED_BATTLECARDS,
    CHANGE_BLUE_HEADER_VALUE, CHANGE_RED_HEADER_VALUE, READ} from './actionTypes';




//dispatched when all the items stored in redux store needs to be read
export const readItems = () => ({
    type: READ 
  })


export const changeblueHeaderValues = (newValue, charCode, battleCardId, headerId, section) => (
    {
        type: CHANGE_BLUE_HEADER_VALUE,
        newValue,
        charCode,
        battleCardId,
        headerId,
        section

    }
)

export const changeRedHeaderValue = (newValue, charCode, battleCardId, headerId, section) => (
    {
        type: CHANGE_RED_HEADER_VALUE,
        newValue,
        charCode,
        battleCardId,
        headerId,
        section

    }
)

export const addBattleCardToSectionAndSelectedBattleCards = (section) => (
    {
        type: ADD_BATTLECARD_TO_SECTION_AND_SELECTED_BATTLECARDS,
        id: uuid.v4(),
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
        cardId: uuid.v4(),
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

export const editCard = (text, battleCardId, cardId, section) => (
    {
        type: EDIT_CARD,
        battleCardId,
        cardId,
        text, 
        section
        
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