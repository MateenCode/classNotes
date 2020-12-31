
const MovieInfo = ({ movie }) => {
    const { Title, Rated } = movie;
    return (
        <div>
            <h1>{Title}</h1>
            <h1>{Rated}</h1>
        </div>
    )
}

class App extends React.Component {

    state = {
        movieTitle: '',
        baseURL: "http://www.omdbapi.com/?",
        apikey: "apikey=98e3fb1f",
        query: "&t=",
        searchUrl: "",
        movie: {}
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            searchUrl: this.state.baseURL + this.state.apikey + this.state.query + this.state.movieTitle
        }, () => {
            fetch(this.state.searchUrl).then((response) => {
                return response.json();
            }).then((data) => {
                this.setState({
                    movie: data,
                    movieTitle: ''
                })
            }, err => console.log(err));
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="movieTitle">Title</label>
                    <input id="movieTitle" type="text" value={this.state.movieTitle} onChange={this.handleChange} />
                    <input type="submit" value="Search for a movie" />
                </form>
                <h2>{this.state.searchUrl}</h2>
                {this.state.movie && <MovieInfo movie={this.state.movie} />}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));