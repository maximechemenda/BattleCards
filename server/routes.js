const { fetchItems, addItem, updateItem, redirectUser } = require('./controller');

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
    {
      method: 'GET',
      url: '/app',
      handler: redirectUser
    }, /*
    {
      method: 'GET',
      url: '/application',
      handler: showApp
    } */
  ]
  
  module.exports = routes