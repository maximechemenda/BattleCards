import React from 'react';
import uuid from 'uuid';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from './actionTypes';



export const addTodo = () => (
    {
        type: ADD_TODO,
        id: uuid.v4(),
        
        
    }
)

export const toggleTodo = (id) => (
    {
        type: TOGGLE_TODO,
        id

    }
)

export const deleteTodo = (id) => (
    {
        type: DELETE_TODO,
        id
  
    }
)

export const setFilter = (filter) => (
    {
        type: SET_FILTER,
        filter

    }
)