import React from 'react';
import Editable from './Editable';
import '../App.css';

export default ({editing, text, deleteCard, cardId, cardType, height, activateCardEdit, editCard, battleCardId, section}) => {

    if (cardType === 'text') {
         return <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>
                        
                        <span className="blueCardHeader">Text</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section, e.charCode)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section, e.charCode)} 
                                    placeholder="Content for this tile goes here" className="blueCardText">{text}</textarea>         
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'offerDeal') {
        return  <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>

                        <span className="blueCardHeader">Offer a Deal</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="blueCardText">{text}</textarea>    
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'commonAnswer') {
        return  <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>

                        <span className="blueCardHeader">Common Answer</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="blueCardText">{text}</textarea>   
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'goodQuestion') {
        return  <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>

                        <span className="blueCardHeader">Good Counter Question</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="blueCardText">{text}</textarea>   
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'badQuestion') {
        return  <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>

                        <span className="redCardHeader">Bad Counter Question</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="redCardText">{text}</textarea>    
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'checklist') {
        return  <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>

                        <span className="blueCardHeader">Checklist</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="blueCardText">{text}</textarea>  
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'warning') {
        return  <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>
                        
                        <span className="redCardHeader">Watch Out!</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="redCardText">{text}</textarea>    
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'battlePitch') {
        return  <div>
        
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>

                        <span className="blueCardHeader">Quick Battle Pitch</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="blueCardText">{text}</textarea>  
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'goodPhrasing') {
        return  <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>

                        <span className="blueCardHeader">Good Phrasing</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="blueCardText">{text}</textarea>  
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'goodArguments') {
        return  <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>

                        <span className="blueCardHeader">Good Arguments</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="blueCardText">{text}</textarea>    
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'howWeWin') {
        return  <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>

                        <span className="blueCardHeader">How We Win</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="blueCardText">{text}</textarea>  
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'positiveDifferences') {
        return  <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>

                        <span className="blueCardHeader">Positive Differences</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="blueCardText">{text}</textarea>    
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'whenToAsk') {
        return  <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>

                        <span className="blueCardHeader">When To Ask</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="blueCardText">{text}</textarea>   
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'badArguments') {
        return  <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>

                        <span className="redCardHeader">Bad Arguments</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="redCardText">{text}</textarea>  
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'howWeLose') {
        return  <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>

                        <span className="redCardHeader">How We Lose</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="redCardText">{text}</textarea>   
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'negativeDifferences') {
        return  <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>

                        <span className="redCardHeader">Negative Differences</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="redCardText">{text}</textarea> 
                    </div> 
                    <br></br>
                </div>
    }
    if (cardType === 'whenNotToAsk') {
        return  <div>
                    <div className="cards" onClick={() => activateCardEdit(battleCardId, cardId, section)}>
                        <button className="deleteCardButton" onClick={(e) => deleteCard(e, battleCardId, cardId, section)}>
                            <span className="cardTrash">
                                <i className="fa fa-trash"></i>
                            </span>
                        </button>
                        
                        <span className="redCardHeader">When Not To Ask</span>
                        <textarea style={{height: height}} id={cardId} rows='3' data-min-rows='3' onBlur={(e) => editCard(e.target.value, battleCardId, cardId, section)}
                                    onKeyPress={(e) => editCard(e.target.value, battleCardId, cardId, section)} 
                                    placeholder="Content for this tile goes here" className="redCardText">{text}</textarea>  
                    </div> 
                    <br></br>
                </div>
    }
}
