import React from 'react';
import Editable from './Editable';
import '../App.css';

export default ({editCard, activateCardEdit, type, text, editing, children, cardId, battleCardId, onDelete, section, ...props}) => {

    if (type === 'basic') {
        return  <div>
                    <div>{children}</div>
                    <BasicCard activateCardEdit={activateCardEdit} editCard={editCard} text={text} editing={editing} section={section} cardId={cardId} battleCardId={battleCardId} onDelete={onDelete} {...props} 
                    /* if I want to re-use the Editable component, don't forget to add the editCard={editCard} in the line above*//>
                    <br></br>
                    
                </div>
    }
    if (type === 'warning') {
        return  <div>
                    <div>{children}</div>
                    <WarningCard contentEditable="true" text={text} editing={editing} section={section} cardId={cardId} battleCardId={battleCardId} onDelete={onDelete} {...props} 
                    /* if I want to re-use the Editable component, don't forget to add the editCard={editCard} in the line above*//>
                    <br></br>
                </div>
    }
    if (type === 'dealOffer') {
        return  <div>
                    <div>{children}</div>
                    <DealOfferCard contentEditable="true" text={text} editing={editing} section={section} cardId={cardId} battleCardId={battleCardId} onDelete={onDelete} {...props} 
                    /* if I want to re-use the Editable component, don't forget to add the editCard={editCard} in the line above*//>
                    <br></br>
                </div>
    }
    if (type === 'commonAnswer') {
        return  <div>
                    <div>{children}</div>
                    <CommonAnswerCard contentEditable="true" text={text} editing={editing} section={section} cardId={cardId} battleCardId={battleCardId} onDelete={onDelete} {...props} 
                    /* if I want to re-use the Editable component, don't forget to add the editCard={editCard} in the line above*//>
                    <br></br>
                </div>
    }
}


class BasicCard extends React.Component {
    render () {
        
        const {editing, activateCardEdit, editCard, text, cardId, battleCardId, onDelete, section, ...props} = this.props;
        //const {editing, editCard} = this.props;     this was going in the line above

        return <div className="cards" onClick={activateCardEdit.bind(null, battleCardId, cardId, section)} {...props}>
                        <div>
                        <button className="deleteCardButton" onClick={onDelete.bind(null, battleCardId,cardId, section)}>x</button>
                        <h2>Basic Card</h2>
                        
                        </div>
                        <Editable
                            battleCardId={battleCardId}
                            editing={editing}
                            value={text}
                            editCard={editCard}
                            cardId={cardId}
                            section={section}
                            //editCard={editCard.bind(null, cardId)} 
                            />   
                </div>   
    }
}

class WarningCard extends React.Component {
    render () {

        const {text, cardId, battleCardId, onDelete, section, ...props} = this.props;
        //const {editing, editCard} = this.props;   this line was going in the line above

        return <div className="cards" {...props}>
                        <button className="deleteCardButton" onClick={onDelete.bind(null, battleCardId, cardId, section)}>x</button>
                        <h2>Warning</h2>
                        { /*<Editable
                            editing={editing}
                            value={text}
                            editCard={editCard.bind(null, cardId)} /> */}
                </div>
    }
}

class DealOfferCard extends React.Component {
    render () {

        const {text, cardId, battleCardId, onDelete, section, ...props} = this.props;
        //const {editing, editCard} = this.props;   this line was going in the line above

        return  <div className="cards" {...props}>
                    <button className="deleteCardButton" onClick={onDelete.bind(null, battleCardId, cardId, section)}>x</button>
                    <h2>Deal Offer</h2>
                    { /*<Editable
                            editing={editing}
                            value={text}
                            editCard={editCard.bind(null, cardId)} /> */}
                </div>
    }
}

class CommonAnswerCard extends React.Component {
    render () {

        const {text, cardId, battleCardId, onDelete, section, ...props} = this.props;
        //const {editing, editCard} = this.props;   this line was going in the line above

        return <div className="cards" {...props}>
                    <button className="deleteCardButton" onClick={onDelete.bind(null, battleCardId, cardId, section)}>x</button>
                    <h2>Common Answer</h2>
                    { /*<Editable
                            editing={editing}
                            value={text}
                            editCard={editCard.bind(null, cardId)} /> */}
                </div>
    }
}