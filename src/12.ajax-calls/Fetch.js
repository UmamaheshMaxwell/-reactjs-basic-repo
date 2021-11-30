import React, { Component } from 'react'

class Fetch extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             todos: []
        }
        console.log('We are fetching the data using FetchAPI')
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => this.setState({todos: data}))
    }

    render() {
        return (
            <div className="container">
                <h1>My Todos</h1>
                {
                    this.state.todos.map((todo) => (
                        <ul key={todo.id}>
                            <li>{todo.userId}</li>
                            <li>{todo.id}</li>
                            <li>{todo.title}</li>
                            <li>{todo.completed ? "True": "False"}</li>
                        </ul>
                    ))
                }
            </div>
        )
    }
}

export default Fetch
