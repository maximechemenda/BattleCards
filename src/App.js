import React from 'react';
import uuid from 'uuid';
import Cards from './components/Cards';
import AddCardButton from './components/AddCardButton';
import NewCardMenu from './components/NewCardMenu';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      isEmptyState: true,
      isAddCardState: false
    };
  }

  render() {
    const {cards} = this.state;

    return (
      <div>
        <Cards
          cards={cards}
          onCardClick={this.activateCardEdit}
          onEdit={this.editCard}
          onDelete={this.deleteCard}
          />

          <div>
              {this.state.isEmptyState && <AddCardButton addCard={this.triggerAddCardState} />}

              {this.state.isAddCardState && 
              <NewCardMenu 
                addBasicCard = {this.addBasicCard}
                addWarningCard = {this.addWarningCard}
                addDealOfferCard = {this.addDealOfferCard}
                addCommonAnswerCard = {this.addCommonAnswerCard}
              />}

          </div>
      </div>
    );
  } //<button onClick = {this.addCard}>+</button>

  //////////////////////////////  TO ADD ONE OF THE DIFFERENT KIND OF CARDS //////////////////////////
  triggerAddCardState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
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
      isEmptyState: true,
      isAddCardState: false
    });
  }

  addWarningCard = () => {
    this.setState({
      cards: this.state.cards.concat([{
        id: uuid.v4(),
        type: 'warning'
      }]),
      isEmptyState: true,
      isAddCardState: false
    });
  }

  addDealOfferCard = () => {
    this.setState({
      cards: this.state.cards.concat([{
        id: uuid.v4(),
        type: 'dealOffer'
      }]),
      isEmptyState: true,
      isAddCardState: false
    });
  }

  addCommonAnswerCard = () => {
    this.setState({
      cards: this.state.cards.concat([{
        id: uuid.v4(),
        type: 'commonAnswer'
      }]),
      isEmptyState: true,
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