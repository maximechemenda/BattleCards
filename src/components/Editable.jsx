/* THIS COMPONENET IS NEVER USED BUT I KEEP IT JUST IN CASE I'LL NEED IT LATER*/
import React from 'react';

export default ({section, battleCardId, editing, cardId, value, editCard, ...props}) => {
  if(editing) {
    return <Edit section={section} battleCardId={battleCardId} cardId={cardId} value={value} editCard={editCard} {...props} />;
  }

  return <span {...props}>{value}</span>;

}

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  render() {
    const {battleCardId, value, cardId, editCard, section, ...props} = this.props;

    return <input
      type="text"
      //value={this.state.inputValue}
      //onChange={e => this.updateInputValue(e)}
      autoFocus={true}
      defaultValue={value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter}
      //onBlur={editCard.bind(null, value, cardId, battleCardId)}
      {...props} />;
  }
  
  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  /* finishEdit = (e) => {
    const value = e.target.value;

    if(this.props.onEdit) {
      this.props.onEdit(value);
    }
  } */
  
  
   finishEdit = (e) => {
    const value = e.target.value;

    if(this.props.editCard) {
      this.props.editCard(value, this.props.cardId, this.props.battleCardId, this.props.section);
    }
  } 
  
}
