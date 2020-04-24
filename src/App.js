import React from 'react';
import uuid from 'uuid';
import Cards from './components/Cards';
import CardType from './components/CardType';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {id: uuid.v4(),
        text: "New Card",
        type: 'warning'
      }]
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
        <button onClick = {this.addCard}>+</button>
      </div>
    );
  }

  addCard = () => {
    this.setState({
      cards: this.state.cards.concat([{
        id: uuid.v4(),
        text: 'New card',
        type: 'warning'
      }])
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
