const { fetchItems, addItem, updateItem } = require('./controller');

const routes = [
    {
      method: 'GET',
      url: '/api/BattleCards',
      handler: fetchItems
    },
    {
        method: 'POST',
        url: '/api/BattleCards',
        handler: addItem,
    },
    {
      method: 'PUT',
      url: '/api/BattleCards',
      handler: updateItem
    },
  ]
  
  module.exports = routes