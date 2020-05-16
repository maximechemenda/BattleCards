const { fetchItems, addItem, updateItem } = require('./controller');

const routes = [
    {
      method: 'GET',
      url: '/api/battleCards',
      handler: fetchItems
    },
    {
        method: 'POST',
        url: '/api/battleCards',
        handler: addItem,
    },
    {
      method: 'PUT',
      url: '/api/battleCards/:id',
      handler: updateItem
    },
  ]
  
  module.exports = routes