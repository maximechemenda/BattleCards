import React from 'react';
import Editable from './Editable';
import '../App.css';

export default ({type, text, editing, value, onEdit, children, id, onDelete, ...props}) => {

    if (type === 'basic') {
        return  <div>
                    <div>{children}</div>
                    <BasicCard contentEditable="true" text={text} editing={editing} onEdit={onEdit} id={id} onDelete={onDelete} {...props} />
                    <br></br>
                    
                </div>
    }
    if (type === 'warning') {
        return  <div>
                    <div>{children}</div>
                    <WarningCard contentEditable="true" text={text} editing={editing} onEdit={onEdit} id={id} onDelete={onDelete} {...props} />
                    <br></br>
                </div>
    }
    if (type === 'dealOffer') {
        return  <div>
                    <div>{children}</div>
                    <DealOfferCard contentEditable="true" text={text} editing={editing} onEdit={onEdit} id={id} onDelete={onDelete} {...props} />
                    <br></br>
                </div>
    }
    if (type === 'commonAnswer') {
        return  <div>
                    <div>{children}</div>
                    <CommonAnswerCard contentEditable="true" text={text} editing={editing} onEdit={onEdit} id={id} onDelete={onDelete} {...props} />
                    <br></br>
                </div>
    }
}


class BasicCard extends React.Component {
    render () {
        
        const {text, id, onDelete, ...props} = this.props;
        //const {editing, onEdit} = this.props;   this line was going in the line above

        return <div className="cards" {...props}>
               
                        <button onClick={onDelete.bind(null, id)}>x</button>
                        <h2>Basic Card</h2>
                        { /*<Editable
                            editing={editing}
                            value={text}
                            onEdit={onEdit.bind(null, id)} /> */}      
                </div>   
    }
}

class WarningCard extends React.Component {
    render () {

        const {text, id, onDelete, ...props} = this.props;
        //const {editing, onEdit} = this.props;   this line was going in the line above

        return <div className="cards" {...props}>
                        <button onClick={onDelete.bind(null, id)}>x</button>
                        <h2>Warning</h2>
                        { /*<Editable
                            editing={editing}
                            value={text}
                            onEdit={onEdit.bind(null, id)} /> */}
                </div>
    }
}

class DealOfferCard extends React.Component {
    render () {

        const {text, id, onDelete, ...props} = this.props;
        //const {editing, onEdit} = this.props;   this line was going in the line above

        return  <div className="cards" {...props}>
                    <button onClick={onDelete.bind(null, id)}>x</button>
                    <h2>Deal Offer</h2>
                    { /*<Editable
                            editing={editing}
                            value={text}
                            onEdit={onEdit.bind(null, id)} /> */}
                </div>
    }
}

class CommonAnswerCard extends React.Component {
    render () {

        const {text, id, onDelete, ...props} = this.props;
        //const {editing, onEdit} = this.props;   this line was going in the line above

        return <div className="cards" {...props}>
                    <button onClick={onDelete.bind(null, id)}>x</button>
                    <h2>Common Answer</h2>
                    { /*<Editable
                            editing={editing}
                            value={text}
                            onEdit={onEdit.bind(null, id)} /> */}
                </div>
    }
}