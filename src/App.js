import React from 'react';
import uuid from 'uuid';
import Cards from './components/Cards';
import CardType from './components/CardType';
import AddCardButton from './components/AddCardButton';
import NewCardMenu from './components/NewCardMenu';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {id: uuid.v4(),
        type: 'warning'
      }],
      isEmptyState: true,
      isAddCardState: false
    };
  }

  render() {
    const {cards} = this.state;
    const {isEmptyState} = this.state;

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

  deleteCard = (id, e) => {
    // Avoid bubbling to edit
    e.stopPropagation();

    this.setState({
      cards: this.state.cards.filter(card => card.id !== id)
    });
  }

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