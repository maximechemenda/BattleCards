import React from 'react';
import uuid from 'uuid';
import BattleCard from './components/BattleCard';
import AddBattleCardButton from './components/AddBattleCardButton';
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
    const {cards, battleCards, isEmptyAddButtonState, isAddCardState, 
      isEmptyBattleCardButtonState, isAddBattleCardState} = this.state;

    return (
      <div>
        <button onClick={this.addBattleCard}>+</button>
      <div>
        <BattleCards 
          battleCards={battleCards}
          onCardClick={this.activateCardEdit}
          onEdit={this.editCard}
          onDelete={this.deleteCard}
          //isEmptyAddButtonState={isEmptyAddButtonState}
          triggerAddCardState={this.triggerAddCardState}
          //isAddCardState={isAddCardState}
          addBasicCard={this.addBasicCard}
          addWarningCard={this.addWarningCard}
          addDealOfferCard={this.addDealOfferCard}
          addCommonAnswerCard={this.addCommonAnswerCard}
          deleteBattleCard={this.deleteBattleCard}
          />
      </div>
      </div>  
    );
  } 

  //////////////////////////////  TO ADD OR DELETE A BATTLE CARD //////////////////////////

  addBattleCard =() => {
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
  triggerAddCardState = (battleCardId) => { //id refers to battleCard id
    this.setState({
      battleCards: this.state.battleCards.map(battleCard => {
        if(battleCard.battleCardId === battleCardId) {
          battleCard.isEmptyAddButtonState = false;
          battleCard.isAddCardState= true;
          
        }
        return battleCard;
      })
    });
  }

  addBasicCard = (battleCardId) => { //id refers to the battlecard id
    this.setState({
      battleCards: this.state.battleCards.map(battleCard => {
        if(battleCard.battleCardId === battleCardId) {
          battleCard.isEmptyAddButtonState = true;
          battleCard.isAddCardState= false;
          battleCard.cards = battleCard.cards.concat([{
            cardId: uuid.v4(),
            type: 'basic'
          }])
        }
        return battleCard;
      })
    });
  } 

  /*    BACKUP FOR ADD_BASIC_CARD                                       REMOVE THIS
  addBasicCard = (id) => { //id refers to the battlecard id
    console.log('battlecaerjmosfjmsjfqlmksdjfklmrds');
    
    this.setState({
      battleCards: () => {
        var battleCards = this.state.battleCards;
        console.log('battlecards' + battleCards);
        for (var i = 0; i < battleCards.length; ++i) {
          if (battleCards[i].id === id) {
            battleCards[i].cards = battleCards[i].cards.concat([{
              id: uuid.v4(),
              type: 'basic'
            }])
          
          console.log('battlecards' + battleCards);
          console.log('battlecards(i).cards' + battleCards[i].cards);
          
          return battleCards;
          }
        }
      }
    });
  };
  */
  

  addWarningCard = () => {
    this.setState({
      cards: this.state.cards.concat([{
        id: uuid.v4(),
        type: 'warning'
      }]),
      isEmptyAddButtonState: true,
      isAddCardState: false
    });
  }

  addDealOfferCard = () => {
    this.setState({
      cards: this.state.cards.concat([{
        id: uuid.v4(),
        type: 'dealOffer'
      }]),
      isEmptyAddButtonState: true,
      isAddCardState: false
    });
  }

  addCommonAnswerCard = () => {
    this.setState({
      cards: this.state.cards.concat([{
        id: uuid.v4(),
        type: 'commonAnswer'
      }]),
      isEmptyAddButtonState: true,
      isAddCardState: false
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
}