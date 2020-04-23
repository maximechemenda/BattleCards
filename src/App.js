import React from 'react';
import uuid from 'uuid';
import Cards from './components/Cards';

const cards = [
  {
      id: uuid.v4(),
      text: 'first caard'
  },
  {
      id: uuid.v4(),
      text: 'second card'
  }  
];

export default () => (
  <Cards cards = {cards} />
)
