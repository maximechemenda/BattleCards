import React from 'react';
import uuid from 'uuid';
import {FILTER_ALL} from './actionTypes'
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from './actionTypes'


const initialTodoState = {
    todos: [
        {
            id: uuid.v4(),
            text: 'Content 1',
            completed: false
        }
    ]
}

export const todos = (state = initialTodoState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return ({
                    todos: state.todos.concat([{
                        id: action.id,
                        text: 'NEWWW TASK',
                        completed: false
                    }])
            })
        }    
        case DELETE_TODO:{
            return ({
                todos: state.todos.filter(todo => todo.id !== action.id)
            })
            
        }
        default: {
            return state
        }
    }
}


export const visibilityFilter = (state = {activeFilter: FILTER_ALL}, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return ({
                activeFilter: action.filter
            })
        }

        default: {
            return state;
        }
    }
}






/* const initialTodoState = {
    nextId: 2,
    todos:
    {
        1: {
            content: 'Content 111',
            completed: false
        }
    }
}

export const todos = (state = initialTodoState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return (
                {
                    ...state,
                    todos: {
                        ...state.todos,
                        [state.nextId]: {
                            completed: false,
                            content: action.content
                        },
                    },

                    nextId: state.nextId + 1
                }
            )
        }
        case TOGGLE_TODO:{
            console.log(action.payload)
            return(
                {
                    ...state,
                    todos:{
                        ...state.todos,
                        [action.payload.id]:{
                            ...state.todos[action.payload.id],
                            completed: !(state.todos[action.payload.id].completed)
                        }
                    }
                }
            )
        }

        default: {
            return state
        }
    }
}


export const visibilityFilter = (state = {activeFilter: FILTER_ALL}, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return ({
                activeFilter: action.payload.filter
            })
        }

        default: {
            return state;
        }
    }
} */