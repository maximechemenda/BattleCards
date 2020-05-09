const { fetchItems, updateItem } = require('./controller');

const routes = [
    {
      method: 'GET',
      url: '/api/menuItems',
      handler: fetchItems
    },
    {
      method: 'PUT',
      url: '/api/menuItems/:id',
      handler: updateItem
    },
  ]
  
  module.exports = routes