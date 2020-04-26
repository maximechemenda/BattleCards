import React from 'react';
import uuid from 'uuid';
import BattleCards from './components/BattleCards';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      battleCards: [],
      isEmptyBattleCardButtonState: true,
      isAddBattleCardState: false
    };
  }

  render() {
    const {battleCards} = this.state;

    return (
      <div>
        <button onClick={this.addBattleCard}>+</button>
      <div>
        <BattleCards 
          battleCards={battleCards}
          addCard={this.addCard}
          onCardClick={this.activateCardEdit}
          onEdit={this.editCard}
          onDelete={this.deleteCard}
          deleteBattleCard={this.deleteBattleCard}
          triggerAddCardState={this.triggerAddCardState}
          />
      </div>
      </div>  
    );
  } 

  //////////////////////////////  TO ADD OR DELETE A BATTLE CARD //////////////////////////

  addBattleCard = () => {
    this.setState({
      battleCards: this.state.battleCards.concat([{
        battleCardId: uuid.v4(),
        cards: [],
        isEmptyAddButtonState: true,
        isAddCardState: false

      }])
    })
  }

  deleteBattleCard = (battleCardId, e) => {
    // Avoid bubbling to edit
    e.stopPropagation();

    this.setState({
      battleCards: this.state.battleCards.filter(battleCard => battleCard.battleCardId !== battleCardId)
    });
  }

  //////////////////////////////  TO ADD ONE OF THE DIFFERENT KIND OF CARDS //////////////////////////

  triggerAddCardState = (battleCardId) => { 
    this.setState({
      battleCards: this.state.battleCards.map(battleCard => {
        if(battleCard.battleCardId === battleCardId) {// finds the battleCard where we want to add a card
          battleCard.isEmptyAddButtonState = false;
          battleCard.isAddCardState= true;
          
        }
        return battleCard;
      })
    });
  }

  addCard = (battleCardId, type) => { 
    this.setState({
      battleCards: this.state.battleCards.map(battleCard => {
        if(battleCard.battleCardId === battleCardId) { // finds the battleCard where we want to add a card
          battleCard.isEmptyAddButtonState = true;
          battleCard.isAddCardState= false;
          battleCard.cards = battleCard.cards.concat([{
            cardId: uuid.v4(),
            type: type
          }])
        }
        return battleCard;
      })
    });
  }

  

   //////////////////////////////  TO DELETE ONE OF THE DIFFERENT KIND OF CARDS //////////////////////////
  deleteCard = (battleCardId, cardId, e) => {
    // Avoid bubbling to edit
    e.stopPropagation();

    this.setState({
      battleCards: this.state.battleCards.map(battleCard => {
        if(battleCard.battleCardId === battleCardId) {
          battleCard.cards = battleCard.cards.filter(card => card.cardId !== cardId)
        }
        return battleCard;
      })
      //cards: this.state.cards.filter(card => card.id !== id)
    });
  }

   //////////////////////////////  TO EDIT ONE OF THE DIFFERENT KIND OF CARDS //////////////////////////

   /* THESE ARE NOT USED BUT I KEEP THEM JUST IN CASE I WANT TO USE THE COMPONENT "EDITABLE" AGAIN
   
   activateCardEdit = (id) => {
    this.setState({
      cards: this.state.cards.map(card => {
        if(card.id === id) {
          card.editing = true;
        }

        return card;
      })
    });
  }

  editCard = (id, text) => {
    this.setState({
      cards: this.state.cards.map(card => {
        if(card.id === id) {
          card.editing = false;
          card.text = text;
        }

        return card;
      })
    });
  }
  */
}