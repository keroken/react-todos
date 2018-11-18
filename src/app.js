import React from 'react';
import Todo from './todos';
import Time from './time';
import style from './css/app.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            input: "",
            todos: [],
            time: new Date(),
            intervalId: ""
        }
        this.addToDo = this.addToDo.bind(this)
        this.removeToDo = this.removeToDo.bind(this)
        this.tick = this.tick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.keyPress = this.keyPress.bind(this)
    }

    addToDo() {
        let {todos, input} = this.state
        todos = todos.concat(input)
        this.setState({
            todos: todos,
            input: ""
        })
    }

    removeToDo(i) {
        let {todos} = this.state
        todos = todos.slice(0, i).concat(todos.slice(i+1))
        this.setState({todos: todos, input: ""})
    }

    tick() {
        let {time} = this.state
        time.setSeconds(time.getSeconds()+1)
        this.setState({time: time})
    }

    handleChange(e) {
        this.setState({input: e.target.value})
    }

    keyPress(e) {
        if(e.keyCode == 13){
            this.setState({input: e.target.value})
            this.addToDo()
        }
    }

    componentDidMount() {
        let id = setInterval(this.tick, 1000)
        this.setState({intrevalId: id})
    }
    
    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }

    render(){
        return (
            <div className="main">
                <Time time={this.state.time}/>
                <h1>Todos</h1>
                <input type="text"
                    onChange={this.handleChange}
                    onKeyDown={this.keyPress}
                    value={this.state.input} />
                <button className="input-button"
                    onClick={this.addToDo}>
                    <i className="fas fa-plus-circle"></i>
                </button>
                <Todo todos={this.state.todos} removeToDo={this.removeToDo} />
            </div>
        )
    }
}

export default App;