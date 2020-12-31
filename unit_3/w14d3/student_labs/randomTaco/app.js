class App extends React.Component {
    state = {
        baseURL: "http://taco-randomizer.herokuapp.com/random/?full-tack=true",
        searchURL: ""
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
        }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            searchURL: this.state.baseURL 
        }, () => {
            fetch(this.state.searchURL).then((response) => {
                return response.json();
                // console.log(response)
            }).then((data) => {
                this.setState({
                    movie: data,
                    movieTitle: ''
                })
                // console.log(data);
            }) /**pass in one its going to be a GET request */
            // console.log("state updated") /**take a second argument as a call function */
        },err => console.log(err));
        // console.log(this.state.movieTitle)
    }
    render() {
        return(
            
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="RandomTaco">Random Taco!</label> 
                    <input type="submit" value="Taco" />
                </form>
                </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('.container'))