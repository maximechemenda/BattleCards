  
import React from 'react'
import { connect } from 'react-redux'
import { deleteCard } from '../redux/actions'
import { addCard } from '../redux/actions'
import { triggerAddCardState } from '../redux/actions'
import { activateCardEdit } from '../redux/actions'
import { editCard} from '../redux/actions'
import '../App.css'  
import CardType from './CardType'


const Cards = ({cards, deleteCard, activateCardEdit, editCard, battleCardId, section}) => (
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
                    section = {section}
                    />
                </div>   
            )}
        </div> 
        
    </div>
)          

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

