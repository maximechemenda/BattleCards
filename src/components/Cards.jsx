  
import React from 'react'
import { connect } from 'react-redux'
//import { _ } from 'underscore'
import _ from 'lodash'
//import { FILTER_ALL, FILTER_COMPLETED } from '../redux/actionTypes'
//import { toggleTodo } from '../redux/actions'
import { deleteCard } from '../redux/actions'
import { addCard } from '../redux/actions'
import { triggerAddCardState } from '../redux/actions'
import '../App.css'  
import CardType from './CardType'


const Cards = ({cards, triggerAddCardState, isEmptyAddButtonState, deleteCard, addCard}) => (
    <div>
        <div>
            {cards.map(card => 
                <div key={card.id}>
                    <CardType text={card.text} deleteCard={deleteCard} id={card.id} cardType={card.cardType}/>
                </div>   
            )}
        </div> 
        <div>
            {isEmptyAddButtonState && <AddCardButton triggerAddCardState={triggerAddCardState}/>}

            {!isEmptyAddButtonState &&
            <NewCardMenu 
                addCard = {addCard}
                triggerAddCardState={triggerAddCardState}
            />} 
        </div>
    </div>
)


const NewCardMenu = ({addCard, triggerAddCardState}) => (
    <div>
        
        <button onClick = {() => addCard('basic')}>Basic Card</button>
        <button onClick = {() => addCard('warning')}>Warning Card</button>
        <button onClick = {() => addCard('dealOffer')}>Deal Offer Card</button>
        <button onClick = {() => addCard('commonAnswer')}>Common Answer Card</button>
    </div>
)

const AddCardButton = ({triggerAddCardState}) => (
    <button className="addCardButton" onClick={() => triggerAddCardState()}>+</button>
)           

const mapState = (state) => {
    return ({
        cards: state.cards.cards,
        isEmptyAddButtonState: state.cards.isEmptyAddButtonState
    })
}

export default connect(mapState, { deleteCard, addCard, triggerAddCardState })(Cards);






/* const card = ({ card, id, toggleTodo }) => (
    <li className={card.completed ? 'completed' : ''} onClick={() => toggleTodo(id)}>{card.content}</li>
) */

/* function Cards({ cards, toggleTodo }) {
    return (
        _.keys(cards).map((id) => (
            <card key={id} id={id} toggleTodo={toggleTodo} card={cards[id]} />
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

