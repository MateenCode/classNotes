const JeopardyStuff = (props) => {
return (
    <div>
        <h1 className="category">Category: {props.category}</h1>
        <h2>{props.question}</h2>
        <h2>Points:{props.value}</h2>
        <div className="toggle">
        {/* Answer: {props.answer} {props.onClick} */}
        {props.show ? `${props.answer}`: ""}
    </div>
    </div>
    );
};
const KeepScore = (props) => {
    return (
    <div className= "button">
        <h2> Score: {props.score}</h2>
        <button className="sub" onClick={() => props.decrease()} id="subtract">
        {" "}
        Decrease
        </button>
        <button className="add" onClick={() => props.increase()} id="add">
        {" "}
        Increase
        </button>
        
    </div>
    );
};


class App extends React.Component {
    state = {
    baseURL: "http://jservice.io/api/random",
    show: false,
    score: 0
   
};
    handleChange = (event) => {
    this.setState({
        [event.target.id]: event.target.value,
    });
  };
    handleSubmit = (event) => {
    event.preventDefault();
    fetch(this.state.baseURL)
        .then((response)=> {
            return response.json();
        }).then((data)=> {
            this.setState({
                category: data[0]
            })
        })
    // this.setState(
    //     {
    //         searchURL: this.state.baseURL + this.state.api,
    //     },
    //     () => {
    //     fetch(this.state.searchURL)
    //       .then((response) => {
    //         return response.json();
    //       })
    //       .then((data) => {
    //         this.setState({
    //           category: data,
    //         });
    //       });
    //   },
    //   (err) => console.log(err)
    // );
  };

  toggleAnswer = () => {
      this.setState({
          show:! this.state.show
      })
    // let x = document.querySelector(".toggle");
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  };

  decreaseScore = () => {
    console.log(this.state.score)
    this.setState({
        score: this.state.score - 1
    })
  };

  increaseScore = () => {
    this.setState({
        score: this.state.score + 1
    })
  };

  render() {
    return (
      <div className="container">
        <header>
        <h1>Welcome to Jeopardy</h1>
        </header>
        <div className="score">
        <KeepScore score={this.state.score} decrease={this.decreaseScore} increase={this.increaseScore}/>
        </div>
        <h3 className="play">Let's Play</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="question"></label>
          <input type="submit" value="Get Question" />
        </form>
        {this.state.category && (
          <content>
          <JeopardyStuff
            category={this.state.category.category.title}
            question={this.state.category.question}
            value={this.state.category.value}
            answer={this.state.category.answer}
            show={this.state.show}
          />
          </content>
        )}
        <button onClick={this.toggleAnswer}>Click to see answer</button>
       
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
