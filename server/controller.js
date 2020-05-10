const { BattleCards } = require('./models/battleCards');

// It reads all the items present in database
const fetchItems = async (req, reply) => {
    try {
      const battleCards = await BattleCards.find();
      console.log('ye bro its a controlller')
      console.log(battleCards)
      return battleCards
    }
    catch (err) { console.log(err) }
  }


// It adds an item to database
const addItem = async (req, reply) => {
    try {
      const newBattleCard = new BattleCards({ ...req.body });
      return newBattleCard.save()
    }
    catch (err) { console.log(err) }
  }



// It updates the item present in database
const updateItem = async (req, reply) => {
    try {
      const { id } = req.params;
      const { item } = req.body;
      const updatedBattleCards = await BattleCards.findOneAndUpdate({id}, item, { new: true });
      return updatedBattleCards;
    }
    catch (err) { console.log(err) }
  }


module.exports = { fetchItems, addItem, updateItem };
