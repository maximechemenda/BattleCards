import React from 'react';
import uuid from 'uuid';
import Cards from './components/Cards';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
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
        text: 'New card'
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
  editCard = (id, task) => {
    this.setState({
      cards: this.state.cards.map(card => {
        if(card.id === id) {
          card.editing = false;
          card.task = task;
        }

        return card;
      })
    });
  }


}
