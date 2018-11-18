import React from 'react';

const Todo = ({todos, removeToDo}) => {
    return(
        <ul>
            {todos.map((todo, i) => {
                return(
                    <li key={i} onClick={e => removeToDo(i)}>{todo}</li>
                )
            })}
        </ul>
    )
}

export default Todo;