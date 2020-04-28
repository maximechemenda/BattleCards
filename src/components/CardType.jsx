import React from 'react';
//import Editable from './Editable';
import '../App.css';

export default ({text, deleteCard, id, cardType}) => {

    if (cardType === 'basic') {
        return  <div>
                    <BasicCard text={text} deleteCard={deleteCard} id={id} cardType={cardType} />
                    <br></br>
                </div>
    }
     if (cardType === 'warning') {
        return  <div>
                    <WarningCard text={text} deleteCard={deleteCard} id={id} cardType={cardType} 
                    />
                    <br></br>
                </div>
    }
    if (cardType === 'dealOffer') {
        return  <div>
                    <DealOfferCard text={text} deleteCard={deleteCard} id={id} cardType={cardType} 
                    />
                    <br></br>
                </div>
    }
    if (cardType === 'commonAnswer') {
        return  <div>
                    <CommonAnswerCard text={text} deleteCard={deleteCard} id={id} cardType={cardType}
                    />
                    <br></br>
                </div>
    } 
}

const BasicCard = ({text, deleteCard, id, cardType}) => (
    <div className="cards">
                        <button className="deleteCardButton" onClick={() => deleteCard(id)}>x</button>
                        <h2>Basic Card</h2>
                        
                        {/* <Editable
                            battleCardId={battleCardId}
                            editing={editing}
                            value={text}
                            editCard={editCard}
                            cardId={cardId}
                            section={section}
                        />    */}
                </div>
)

const WarningCard = ({text, deleteCard, id, cardType}) => (
    <div className="cards">
                        <button className="deleteCardButton" onClick={() => deleteCard(id)}>x</button>
                        <h2>Warning Card</h2>
                        
                        {/* <Editable
                            battleCardId={battleCardId}
                            editing={editing}
                            value={text}
                            editCard={editCard}
                            cardId={cardId}
                            section={section}
                        />    */}
                </div>
)

const DealOfferCard = ({text, deleteCard, id, cardType}) => (
    <div className="cards">
                        <button className="deleteCardButton" onClick={() => deleteCard(id)}>x</button>
                        <h2>Deal Offer Card</h2>
                        
                        {/* <Editable
                            battleCardId={battleCardId}
                            editing={editing}
                            value={text}
                            editCard={editCard}
                            cardId={cardId}
                            section={section}
                        />    */}
                </div>
)

const CommonAnswerCard = ({text, deleteCard, id, cardType}) => (
    <div className="cards">
                        <button className="deleteCardButton" onClick={() => deleteCard(id)}>x</button>
                        <h2>Common Answer Card</h2>
                        
                        {/* <Editable
                            battleCardId={battleCardId}
                            editing={editing}
                            value={text}
                            editCard={editCard}
                            cardId={cardId}
                            section={section}
                        />    */}
                </div>
)


   

/* class WarningCard extends React.Component {
    render () {

        const {editing, activateCardEdit, editCard, text, cardId, battleCardId, onDelete, section, ...props} = this.props;

        return <div className="cards" onClick={activateCardEdit.bind(null, battleCardId, cardId, section)} {...props}>
                        <button className="deleteCardButton" onClick={onDelete.bind(null, battleCardId, cardId, section)}>x</button>
                        <h2>Warning</h2>

                        <Editable
                            battleCardId={battleCardId}
                            editing={editing}
                            value={text}
                            editCard={editCard}
                            cardId={cardId}
                            section={section}
                        />
                </div>
    }
}

class DealOfferCard extends React.Component {
    render () {

        const {editing, activateCardEdit, editCard, text, cardId, battleCardId, onDelete, section, ...props} = this.props;

        return  <div className="cards" onClick={activateCardEdit.bind(null, battleCardId, cardId, section)} {...props}>
                    <button className="deleteCardButton" onClick={onDelete.bind(null, battleCardId, cardId, section)}>x</button>
                    <h2>Deal Offer</h2>
                    <Editable
                            battleCardId={battleCardId}
                            editing={editing}
                            value={text}
                            editCard={editCard}
                            cardId={cardId}
                            section={section}
                        />
                </div>
    }
}

class CommonAnswerCard extends React.Component {
    render () {

        const {editing, activateCardEdit, editCard, text, cardId, battleCardId, onDelete, section, ...props} = this.props;

        return <div className="cards" onClick={activateCardEdit.bind(null, battleCardId, cardId, section)} {...props}>
                    <button className="deleteCardButton" onClick={onDelete.bind(null, battleCardId, cardId, section)}>x</button>
                    <h2>Common Answer</h2>
                    <Editable
                            battleCardId={battleCardId}
                            editing={editing}
                            value={text}
                            editCard={editCard}
                            cardId={cardId}
                            section={section}
                        />
                </div>
    }
} */