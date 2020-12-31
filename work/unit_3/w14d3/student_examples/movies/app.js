// class Form extends React.Component {
//     render() {
//         return(
//             <form>
//                 <label htmlFor="movieTitle">Title</label> 
//                 <input id="MovieTitle" type="text" value={this.state.movieTitle} onChange={this.handleChange}/>
//                 <input type="submit" value="Search for a movie" />
//             </form>
//         )
//     }
// }
const MovieInfo = ({movie}) => {
    const {Title,Rated} = movie;
    return(
        <div>
            <h1>{Title}</h1>
            <h2>{Rated}</h2>
        </div>
    )
}

class App extends React.Component {
    state = {
        movieTitle: '',
        baseURL: "http://www.omdbapi.com/?",
        apikey:"apikey=98e3fb1f",
        query:"&t=",
        searchURL: ""
    }
    //handle change when
    handleChange = (event) => {
    this.setState({
        [event.target.id] : event.target.value
    })
    }
//submit button
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            searchURL: this.state.baseURL + this.state.apikey + this.state.query + this.state.movieTitle
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
        return (
            <div>Hello Movies!
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="movieTitle">Title</label> 
                    <input id="movieTitle" type="text" value={this.state.movieTitle} onChange={this.handleChange}/>
                    <input type="submit" value="Search for a movie" />
                </form>
                <h2>{this.state.searchURL}</h2>
                {this.state.movie &&
                    <MovieInfo movie={this.state.movie} />
                }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))