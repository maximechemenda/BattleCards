const battleCards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BATTLECARD':
      return [
        ...state,
        {
          battleCardId: action.battleCardId,
          cards: action.cards,
          isEmptyAddButtonState: action.isEmptyAddButtonState,
          isAddCardState: action.isAddCardState
        }
      ]
    case 'DELETE_BATTLECARD':
      state.filter(battleCard => battleCard.battleCardId !== action.battleCardId)
    case 'ADD_CARD':
      return state.map(battleCard => {
        if(battleCard.battleCardId === action.battleCardId) { // finds the battleCard where we want to add a card
            battleCard.isEmptyAddButtonState = true;
            battleCard.isAddCardState = false;
            battleCard.cards = battleCard.cards.concat([{
              cardId: uuid.v4(),
              cardType: action.cardType,
              text: '',
              editing: false
            }])
          }
          return battleCard;
      })
    case 'DELETE_CARD':  
      return state.map(battleCard => {
        if(battleCard.battleCardId === action.battleCardId) {
          battleCard.cards = battleCard.cards.filter(card => card.cardId !== action.cardId)
        }
        return battleCard;
      })
    case 'TRIGGER_ADD_CARD_STATE':
      return state.map(battleCard => {
        if(battleCard.battleCardId === action.battleCardId) {// finds the battleCard where we want to add a card
            battleCard.isEmptyAddButtonState = false;
            battleCard.isAddCardState= true;
          }
          return battleCard;
      })  
    default:
      return state
  }
}

export default battleCards


