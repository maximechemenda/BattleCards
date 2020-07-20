const { BattleCards } = require('./models/battleCards');

// Reads all the items present in database
const fetchItems = async (req, reply) => {
    try {
      const battleCards = await BattleCards.find();
      return battleCards
    }
    catch (err) { console.log(err) }
  }

// Adds an item to database
const addItem = async (req, reply) => {
    try {
      const newBattleCard = new BattleCards({ ...req.body });
      return newBattleCard.save()
    }
    catch (err) { console.log(err) }
  }

// Updates the item present in database
const updateItem = async (req, reply) => {
  try {
    const { id } = req.params;
    const update = await BattleCards.findOneAndUpdate({id}, req.body, { new: true });
    return update;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = { fetchItems, addItem, updateItem };
