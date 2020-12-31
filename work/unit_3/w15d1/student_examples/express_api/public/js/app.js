const ToDoItem = (props) => {
    return(

        <div>
            <li>{props.todo.description} 
                    <button onClick={() =>props.handleDelete(props.todo._id,props.index)}>Delete</button>
                    </li>
        </div>
    )
}

class App extends React.Component {
    state = {
        todos: [],
        description: ''
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        fetch('/todos')
        .then(response => response.json())
        .then(data => this.setState({todos: data}))
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
////handle form submit//////////
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.description);
        fetch('/todos', {
            body: JSON.stringify({description: this.state.description}),
            method: "POST" ,//I am making a POST request
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              }                                        //tell our server about the content
        }).then(response => response.json())
        .then(newTodo => {
            this.setState({
                todos: [newTodo, ...this.state.todos],
                description: ''
            })
        })
    }

    handleDelete = (dataId, index) => {
        fetch(`/todos/:${dataId}`, {
            method: "DELETE"
        }).then(() => {
            this.setState({
                todos: [
                    ...this.state.todos.slice(0,index),
                    ...this.state.todos.slice(index + 1)

                ]
            })
        })
    }

    render() {
        return(
            <ul>
                <h1>My To Do list</h1>
                <button onClick={this.getData}>Get Todos</button>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="description">Description</label>
                    <input type="text" value={this.state.description} id="description"  onChange={this.handleChange}/> 
                    <input type="submit"/>
                </form>
                {this.state.todos.length > 0 && this.state.todos.map((todo, index) => {
                    return <ToDoItem todo={todo} index={index} handleDelete={this.handleDelete} />
                    
                })}
            </ul>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'))