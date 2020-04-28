import { connect } from 'react-redux';
import { addBattleCard } from '../actions';
import AddBattleCardButton from '../components/AddBattleCardButton';

const mapDispatchToProps = dispatch => ({
  addBattleCard: () => dispatch(addBattleCard())
})

export default connect(mapDispatchToProps)(AddBattleCardButton)