  
import React from 'react'
import { connect } from 'react-redux'
//import { _ } from 'underscore'
import _ from 'lodash'
import { FILTER_ALL, FILTER_COMPLETED } from '../redux/actionTypes'
import { toggleTodo } from '../redux/actions'
import { deleteTodo } from '../redux/actions'
import { addTodo } from '../redux/actions'
import '../App.css'  


const TodoList = ({todos, deleteTodo, addTodo}) => (
    <div>

        <button onClick={() => addTodo()}>+</button>
        <div>
            {todos.map(todo => 
                <div key={todo.id}>
                    <Todo text={todo.text} deleteTodo={deleteTodo} id={todo.id}/>
                </div>   
            )}
        </div> 
    </div>
     
)


const Todo = ({text, deleteTodo, id}) => (
    <div className='cards'>
        <button onClick={() => deleteTodo(id)}>x</button>
        <span>{text}</span>
    </div>
    
)           

const mapState = (state) => {
    return ({
        todos: state.todos.todos
    })
}

export default connect(mapState, { deleteTodo, addTodo })(TodoList);

/* const Todo = ({ todo, id, toggleTodo }) => (
    <li className={todo.completed ? 'completed' : ''} onClick={() => toggleTodo(id)}>{todo.content}</li>
) */

/* function TodoList({ todos, toggleTodo }) {
    return (
        _.keys(todos).map((id) => (
            <Todo key={id} id={id} toggleTodo={toggleTodo} todo={todos[id]} />
        ))
    )
} */

/* const mapState = (state) => {
    if (state.visibilityFilter.activeFilter === FILTER_ALL) {
        return { todos: state.todos.todos }
    } else if (state.visibilityFilter.activeFilter === FILTER_COMPLETED) {
        return ({
            todos: _.pick(state.todos.todos, (todo) => todo.completed)
        })
    } else {
        return ({
            todos: _.pick(state.todos.todos, (todo) => !todo.completed)
        })
    }
} */

