class App extends React.Component {
    state = {
        name: '',
        species: '',
        breed: '',
        image: '',
        age: '',
        adopted: false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('/animals', {
            body: JSON.stringify(
                {name: this.state.name},
                {species: this.state.species},
                {breed: this.state.breed},
                {image: this.state.image},
                {age: this.state.age},
                {adopted: this.state.adopted}
                
                ),
            method: "POST" ,//I am making a POST request
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              }                                        //tell our server about the content
        }).then(response => response.json())
        .then(newAnimal => {
            this.setState({
                animals: [newAnimal, ...this.state.animals],
                name: '',
                species: '',
                
            })
        })
    }
    render() {
        return(
            <div>
                <h1>Sunny Philadelphia Animal Shelter</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={this.state.name} id="name"  onChange={this.handleChange} /> 
                    <label htmlFor="species">Species</label>
                    <input type="text" value={this.state.species} id="species"  onChange={this.handleChange}/> 
                    <input type="submit"/>
                </form>
        </div>


        )
    }
}
ReactDOM.render(<App/>, document.querySelector('.container'))