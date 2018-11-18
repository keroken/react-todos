import React from 'react';
import style from './css/todos.css';

const Todo = ({todos, removeToDo}) => {
    return(
        <div className="todo-list">
            <ul>
                {todos.map((todo, i) => {
                    return(
                        <li key={i} onClick={e => removeToDo(i)}>{todo}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todo;