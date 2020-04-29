  
import React from 'react'
import { connect } from 'react-redux'
//import { _ } from 'underscore'
import _ from 'lodash'
import { deleteCard } from '../redux/actions'
import { addCard } from '../redux/actions'
import { triggerAddCardState } from '../redux/actions'
import { activateCardEdit } from '../redux/actions'
import { editCard} from '../redux/actions'
import '../App.css'  
import CardType from './CardType'


const Cards = ({cards, triggerAddCardState, isEmptyAddButtonState, deleteCard, addCard, activateCardEdit, editCard, battleCardId}) => (
    <div>
        <div>
            {cards.map(card => 
                <div key={card.cardId}>
                    <CardType 
                    editing={card.editing} 
                    text={card.text} 
                    deleteCard={deleteCard} 
                    cardId={card.cardId} 
                    cardType={card.cardType}
                    activateCardEdit={activateCardEdit}
                    editCard={editCard}
                    battleCardId={battleCardId}
                    />
                </div>   
            )}
        </div> 
        <div>
            {isEmptyAddButtonState && <AddCardButton triggerAddCardState={triggerAddCardState}/>}

            {!isEmptyAddButtonState &&
            <NewCardMenu 
                addCard = {addCard}
                triggerAddCardState={triggerAddCardState}
                battleCardId={battleCardId}
            />} 
        </div>
    </div>
)


const NewCardMenu = ({addCard, triggerAddCardState, battleCardId}) => (
    <div>
        
        <button onClick = {() => addCard(battleCardId, 'basic')}>Basic Card</button>
        <button onClick = {() => addCard(battleCardId, 'warning')}>Warning Card</button>
        <button onClick = {() => addCard(battleCardId, 'dealOffer')}>Deal Offer Card</button>
        <button onClick = {() => addCard(battleCardId, 'commonAnswer')}>Common Answer Card</button>
    </div>
)

const AddCardButton = ({triggerAddCardState}) => (
    <button className="addCardButton" onClick={() => triggerAddCardState()}>+</button>
)           

/* const mapState = (state) => {
    return ({
        cards: state.cards.cards,
        isEmptyAddButtonState: state.cards.isEmptyAddButtonState
    })
} */

export default connect(null, { deleteCard, addCard, triggerAddCardState, activateCardEdit, editCard })(Cards);











/* const card = ({ card, cardId, toggleTodo }) => (
    <li className={card.completed ? 'completed' : ''} onClick={() => toggleTodo(cardId)}>{card.content}</li>
) */

/* function Cards({ cards, toggleTodo }) {
    return (
        _.keys(cards).map((cardId) => (
            <card key={cardId} cardId={cardId} toggleTodo={toggleTodo} card={cards[cardId]} />
        ))
    )
} */

/* const mapState = (state) => {
    if (state.visibilityFilter.activeFilter === FILTER_ALL) {
        return { cards: state.cards.cards }
    } else if (state.visibilityFilter.activeFilter === FILTER_COMPLETED) {
        return ({
            cards: _.pick(state.cards.cards, (card) => card.completed)
        })
    } else {
        return ({
            cards: _.pick(state.cards.cards, (card) => !card.completed)
        })
    }
} */

