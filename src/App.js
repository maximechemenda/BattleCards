
import React from 'react';
import uuid from 'uuid';
import BattleCardsMenu from './components/BattleCardsMenu';
import ObjectionsBattleCards from './components/ObjectionsBattleCards';
import CompetitorsBattleCards from './components/CompetitorsBattleCards';
import ProfilesBattleCards from './components/ProfilesBattleCards';
import DiscoveriesBattleCards from './components/DiscoveriesBattleCards';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      objectionsBattleCards: [],
      isEmptyObjectionsState: true,
      competitorsBattleCards: [],
      isEmptyCompetitorsState: true,
      profilesBattleCards: [],
      isEmptyProfilesState: true,
      discoveriesBattleCards: [],
      isEmptyDiscoveriesState: true
    };
  }


  render() {
    const {objectionsBattleCards, isEmptyObjectionsState,
          competitorsBattleCards, isEmptyCompetitorsState,
          profilesBattleCards, isEmptyProfilesState,
          discoveriesBattleCards, isEmptyDiscoveriesState} = this.state;

    return (
      
      <div>
        <BattleCardsMenu triggerSectionState={this.triggerSectionState}/>
        
        {!isEmptyObjectionsState && 
        <ObjectionsBattleCards 
          battleCards={objectionsBattleCards}
          addCard={this.addCard}
          onDelete={this.deleteCard}
          deleteBattleCard={this.deleteBattleCard}
          triggerAddCardState={this.triggerAddCardState}
          addBattleCard={this.addBattleCard}
          activateCardEdit={this.activateCardEdit}
          editCard={this.editCard}
          />}

        {!isEmptyCompetitorsState && 
        <CompetitorsBattleCards 
          battleCards={competitorsBattleCards}
          addCard={this.addCard}
          onDelete={this.deleteCard}
          deleteBattleCard={this.deleteBattleCard}
          triggerAddCardState={this.triggerAddCardState}
          addBattleCard={this.addBattleCard}
          activateCardEdit={this.activateCardEdit}
          editCard={this.editCard}
          />}

        {!isEmptyProfilesState && 
        <ProfilesBattleCards 
          battleCards={profilesBattleCards}
          addCard={this.addCard}
          onDelete={this.deleteCard}
          deleteBattleCard={this.deleteBattleCard}
          triggerAddCardState={this.triggerAddCardState}
          addBattleCard={this.addBattleCard}
          activateCardEdit={this.activateCardEdit}
          editCard={this.editCard}
          />}

        {!isEmptyDiscoveriesState && 
        <DiscoveriesBattleCards 
          battleCards={discoveriesBattleCards}
          addCard={this.addCard}
          onDelete={this.deleteCard}
          deleteBattleCard={this.deleteBattleCard}
          triggerAddCardState={this.triggerAddCardState}
          addBattleCard={this.addBattleCard}
          activateCardEdit={this.activateCardEdit}
          editCard={this.editCard}
          />}

      </div>  
    );
  }

 //////////////////////////////  TO EDIT ONE OF THE DIFFERENT KIND OF CARDS //////////////////////////
  activateCardEdit = (battleCardId, cardId, section) => {
    if (section === 'objections') {
      this.setState({
        objectionsBattleCards: this.state.objectionsBattleCards.map(battleCard => {
          if (battleCard.battleCardId === battleCardId) {
              battleCard.cards = battleCard.cards.map(card => { 
              if(card.cardId === cardId) {
                card.editing = true;
              }
              return card;
            })
          }
          return battleCard;
        })
      });
    }
    if (section === 'competitors') {
      this.setState({
        competitorsBattleCards: this.state.competitorsBattleCards.map(battleCard => {
          if (battleCard.battleCardId === battleCardId) {
              battleCard.cards = battleCard.cards.map(card => { 
              if(card.cardId === cardId) {
                card.editing = true;
              }
              return card;
            })
          }
          return battleCard;
        })
      });
    }
    if (section === 'profiles') {
      this.setState({
        profilesBattleCards: this.state.profilesBattleCards.map(battleCard => {
          if (battleCard.battleCardId === battleCardId) {
              battleCard.cards = battleCard.cards.map(card => { 
              if(card.cardId === cardId) {
                card.editing = true;
              }
              return card;
            })
          }
          return battleCard;
        })
      });
    }
    if (section === 'discoveries') {
      this.setState({
        discoveriesBattleCards: this.state.discoveriesBattleCards.map(battleCard => {
          if (battleCard.battleCardId === battleCardId) {
              battleCard.cards = battleCard.cards.map(card => { 
              if(card.cardId === cardId) {
                card.editing = true;
              }
              return card;
            })
          }
          return battleCard;
        })
      });
    }
  }

  editCard = (text, cardId, battleCardId, section) => {
    if (section === 'objections') {
      this.setState({
        objectionsBattleCards: this.state.objectionsBattleCards.map(battleCard => {
          if (battleCard.battleCardId === battleCardId) {
            battleCard.cards.map(card => {
              if(card.cardId === cardId) {
                card.editing = false;
                card.text = text;
              }
              return card;
            })
          }
          return battleCard;
        })
      });
    }
    if (section === 'competitors') {
      this.setState({
        competitorsBattleCards: this.state.competitorsBattleCards.map(battleCard => {
          if (battleCard.battleCardId === battleCardId) {
            battleCard.cards.map(card => {
              if(card.cardId === cardId) {
                card.editing = false;
                card.text = text;
              }
              return card;
            })
          }
          return battleCard;
        })
      });
    }
    if (section === 'profiles') {
      this.setState({
        profilesBattleCards: this.state.profilesBattleCards.map(battleCard => {
          if (battleCard.battleCardId === battleCardId) {
            battleCard.cards.map(card => {
              if(card.cardId === cardId) {
                card.editing = false;
                card.text = text;
              }
              return card;
            })
          }
          return battleCard;
        })
      });
    }
    if (section === 'discoveries') {
      this.setState({
        discoveriesBattleCards: this.state.discoveriesBattleCards.map(battleCard => {
          if (battleCard.battleCardId === battleCardId) {
            battleCard.cards.map(card => {
              if(card.cardId === cardId) {
                card.editing = false;
                card.text = text;
              }
              return card;
            })
          }
          return battleCard;
        })
      });
    }
  }





  
   //////////////////////////////  TO ADD OR DELETE DIFFERENT KINDS OF BATTLECARDS //////////////////////////

   triggerSectionState = (section) => {
    if (section === 'objections') {
      this.setState({
        isEmptyObjectionsState: false,
        isEmptyCompetitorsState: true,
        isEmptyProfilesState: true,
        isEmptyDiscoveriesState: true
      })
    }
    if (section === 'competitors') {
      this.setState({
        isEmptyObjectionsState: true,
        isEmptyCompetitorsState: false,
        isEmptyProfilesState: true,
        isEmptyDiscoveriesState: true
      })
    }
    if (section === 'profiles') {
      this.setState({
        isEmptyObjectionsState: true,
        isEmptyCompetitorsState: true,
        isEmptyProfilesState: false,
        isEmptyDiscoveriesState: true
      })
    }
    if (section === 'discoveries') {
      this.setState({
        isEmptyObjectionsState: true,
        isEmptyCompetitorsState: true,
        isEmptyProfilesState: true,
        isEmptyDiscoveriesState: false
      })
    }
  }


  /* addBattleCard = (section) => {
    if (section === 'objections') {
      this.setState({
        objectionsBattleCards: this.state.objectionsBattleCards.concat([{
          battleCardId: uuid.v4(),
          cards: [],
          isEmptyAddButtonState: true,
          isAddCardState: false
        }]),
      })
    }
    if (section === 'competitors') {
      this.setState({
        competitorsBattleCards: this.state.competitorsBattleCards.concat([{
          battleCardId: uuid.v4(),
          cards: [],
          isEmptyAddButtonState: true,
          isAddCardState: false
        }]),
      })
    }
    if (section === 'profiles') {
      this.setState({
        profilesBattleCards: this.state.profilesBattleCards.concat([{
          battleCardId: uuid.v4(),
          cards: [],
          isEmptyAddButtonState: true,
          isAddCardState: false
        }]),
      })
    }
    if (section === 'discoveries') {
      this.setState({
        discoveriesBattleCards: this.state.discoveriesBattleCards.concat([{
          battleCardId: uuid.v4(),
          cards: [],
          isEmptyAddButtonState: true,
          isAddCardState: false
        }]),
      })
    }
  } */

  /* deleteBattleCard = (battleCardId, section, e) => {
    // Avoid bubbling to edit
    e.stopPropagation();

    if (section === ('objections')) {
      this.setState({
        objectionsBattleCards: this.state.objectionsBattleCards.filter(battleCard => battleCard.battleCardId !== battleCardId)
      });
    }
    if (section === ('competitors')) {
      this.setState({
        competitorsBattleCards: this.state.competitorsBattleCards.filter(battleCard => battleCard.battleCardId !== battleCardId)
      });
    }
    if (section === ('profiles')) {
      this.setState({
        profilesBattleCards: this.state.profilesBattleCards.filter(battleCard => battleCard.battleCardId !== battleCardId)
      });
    }
    if (section === ('discoveries')) {
      this.setState({
        discoveriesBattleCards: this.state.discoveriesBattleCards.filter(battleCard => battleCard.battleCardId !== battleCardId)
      });
    }
    
  } */
  
  //////////////////////////////  TO ADD OR DELETE ONE OF THE DIFFERENT KIND OF CARDS //////////////////////////

  /* triggerAddCardState = (battleCardId, section) => { 
    if (section === 'objections') {
      this.setState({
        objectionsBattleCards: this.state.objectionsBattleCards.map(battleCard => {
          if(battleCard.battleCardId === battleCardId) {// finds the battleCard where we want to add a card
            battleCard.isEmptyAddButtonState = false;
            battleCard.isAddCardState= true;
            
          }
          return battleCard;
        })
      });
    }
    if (section === 'competitors') {
      this.setState({
         competitorsBattleCards: this.state.competitorsBattleCards.map(battleCard => {
          if(battleCard.battleCardId === battleCardId) {// finds the battleCard where we want to add a card
            battleCard.isEmptyAddButtonState = false;
            battleCard.isAddCardState= true;
            
          }
          return battleCard;
        })
      });
    }
    if (section === 'profiles') {
      this.setState({
         profilesBattleCards: this.state.profilesBattleCards.map(battleCard => {
          if(battleCard.battleCardId === battleCardId) {// finds the battleCard where we want to add a card
            battleCard.isEmptyAddButtonState = false;
            battleCard.isAddCardState= true;
            
          }
          return battleCard;
        })
      });
    }
    if (section === 'discoveries') {
      this.setState({
         discoveriesBattleCards: this.state.discoveriesBattleCards.map(battleCard => {
          if(battleCard.battleCardId === battleCardId) {// finds the battleCard where we want to add a card
            battleCard.isEmptyAddButtonState = false;
            battleCard.isAddCardState= true;
            
          }
          return battleCard;
        })
      });
    }
  } */


  /* addCard = (battleCardId, type, section) => { 
    if (section === 'objections') {
      this.setState({
        objectionsBattleCards: this.state.objectionsBattleCards.map(battleCard => {
          if(battleCard.battleCardId === battleCardId) { // finds the battleCard where we want to add a card
            battleCard.isEmptyAddButtonState = true;
            battleCard.isAddCardState = false;
            battleCard.cards = battleCard.cards.concat([{
              cardId: uuid.v4(),
              type: type,
              text: '',
              editing: false
            }])
          }
          return battleCard;
        })
      });
    }
    if (section === 'competitors') {
      this.setState({
        competitorsBattleCards: this.state.competitorsBattleCards.map(battleCard => {
          if(battleCard.battleCardId === battleCardId) { // finds the battleCard where we want to add a card
            battleCard.isEmptyAddButtonState = true;
            battleCard.isAddCardState= false;
            battleCard.cards = battleCard.cards.concat([{
              cardId: uuid.v4(),
              type: type,
              text: '',
              editing: false
            }])
          }
          return battleCard;
        })
      });
    }
    if (section === 'profiles') {
      this.setState({
        profilesBattleCards: this.state.profilesBattleCards.map(battleCard => {
          if(battleCard.battleCardId === battleCardId) { // finds the battleCard where we want to add a card
            battleCard.isEmptyAddButtonState = true;
            battleCard.isAddCardState= false;
            battleCard.cards = battleCard.cards.concat([{
              cardId: uuid.v4(),
              type: type,
              text: '',
              editing: false
            }])
          }
          return battleCard;
        })
      });
    }
    if (section === 'discoveries') {
      this.setState({
        discoveriesBattleCards: this.state.discoveriesBattleCards.map(battleCard => {
          if(battleCard.battleCardId === battleCardId) { // finds the battleCard where we want to add a card
            battleCard.isEmptyAddButtonState = true;
            battleCard.isAddCardState= false;
            battleCard.cards = battleCard.cards.concat([{
              cardId: uuid.v4(),
              type: type,
              text: '',
              editing: false
            }])
          }
          return battleCard;
        })
      });
    }
    
  } */

  /* deleteCard = (battleCardId, cardId, section, e) => {
    // Avoid bubbling to edit
    e.stopPropagation();

    if (section === 'objections') {
      this.setState({
        objectionsBattleCards: this.state.objectionsBattleCards.map(battleCard => {
          if(battleCard.battleCardId === battleCardId) {
            battleCard.cards = battleCard.cards.filter(card => card.cardId !== cardId)
          }
          return battleCard;
        })
      });
    }
    if (section === 'competitors') {
      this.setState({
        competitorsBattleCards: this.state.competitorsBattleCards.map(battleCard => {
          if(battleCard.battleCardId === battleCardId) {
            battleCard.cards = battleCard.cards.filter(card => card.cardId !== cardId)
          }
          return battleCard;
        })
      });
    }
    if (section === 'profiles') {
      this.setState({
        profilesBattleCards: this.state.profilesBattleCards.map(battleCard => {
          if(battleCard.battleCardId === battleCardId) {
            battleCard.cards = battleCard.cards.filter(card => card.cardId !== cardId)
          }
          return battleCard;
        })
      });
    }
    if (section === 'discoveries') {
      this.setState({
        discoveriesBattleCards: this.state.discoveriesBattleCards.map(battleCard => {
          if(battleCard.battleCardId === battleCardId) {
            battleCard.cards = battleCard.cards.filter(card => card.cardId !== cardId)
          }
          return battleCard;
        })
      });
    }
  } */
}
