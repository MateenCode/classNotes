
class App extends React.Component {

    state = {
        todos: [],
        description: ''
    }

    componentDidMount() {
        fetch('/todos')
        .then(response =>  response.json())
        .then(todos => 
            this.setState({
                todos: todos
            })
        );
    }

    handleChange = (event) =>{
        this.setState({ [event.target.id]: event.target.value })
    }
      
    handleSubmit = (event) =>{
        event.preventDefault()
        fetch('/todos', {
            body: JSON.stringify({description: this.state.description}),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdToDo => {
            return createdToDo.json();
        }).then(jsonedToDo => {
            this.setState({
                description: '',
                todos: [jsonedToDo, ...this.state.todos]
            })
        }).catch(error => console.log(error));
    }

    deleteToDo = (id, index) => {
       fetch('todos/' + id, {
           method: "DELETE"
       }).then(data => {
           this.setState({
               todos: [
                   ...this.state.todos.slice(0, index),
                   ...this.state.todos.slice(index + 1)
               ]
           })
       })
    }


    

    render() {
        return(
            <div>
                <h1>To do List:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='description'>Description</label>
                    <input type='text' value={this.state.description} onChange={this.handleChange} id='description' />
                    <input type='submit' />
                </form>
                <h2>{this.state.description}</h2>
                <table>
                    <tbody>
                        {this.state.todos.map((todo,index) => {
                            return (
                                <tr>
                                    <td> {todo.description} </td>
                                    <td onClick={() => this.deleteToDo(todo._id, index)}> X </td>
                                    <td> complete </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));