import React from 'react';

class Todo extends React.Component {
    render() {
        const {todos} = this.props
        return(
            <ul>
                {todos.map((todo, i) => {
                    return(
                        <li key={i} onClick={e => this.props.removeToDo(i)}>{todo}</li>
                    )
                })}
            </ul>
        )
    }
}

export default Todo;