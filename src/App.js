import React from 'react';
import uuid from 'uuid';
import BattleCard from './components/BattleCard';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      isEmptyAddButtonState: true,
      isAddCardState: false
    };
  }

  render() {
    const {cards, isEmptyAddButtonState, isAddCardState} = this.state;

    return (
      
        <BattleCard 
          cards={cards}
          onCardClick={this.activateCardEdit}
          onEdit={this.editCard}
          onDelete={this.deleteCard}
          isEmptyAddButtonState={isEmptyAddButtonState}
          triggerAddCardState={this.triggerAddCardState}
          isAddCardState={isAddCardState}
          addBasicCard={this.addBasicCard}
          addWarningCard={this.addWarningCard}
          addDealOfferCard={this.addDealOfferCard}
          addCommonAnswerCard={this.addCommonAnswerCard} /> 

        
    
    );
  } //<button onClick = {this.addCard}>+</button>

  //////////////////////////////  TO ADD ONE OF THE DIFFERENT KIND OF CARDS //////////////////////////
  triggerAddCardState = () => {
    this.setState({
      ...this.state,
      isEmptyAddButtonState: false,
      isAddCardState: true
    })
  }

  addBasicCard = () => {
    this.setState({
      cards: this.state.cards.concat([{
        id: uuid.v4(),
        editing: false,
        text: '',
        type: 'basic'
      }]),
      isEmptyAddButtonState: true,
      isAddCardState: false
    });
  }

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
  deleteCard = (id, e) => {
    // Avoid bubbling to edit
    e.stopPropagation();

    this.setState({
      cards: this.state.cards.filter(card => card.id !== id)
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