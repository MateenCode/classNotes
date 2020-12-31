const message = "React Tic Tac Toe";

// document.addEventListener('DOMContentLoaded', () => {
//     const div = document.querySelector('.container');
//     div.innerHTML = `<h1> ${message} </h1>`;
// });

class Player extends React.Component {
    render() {
        return (
            <div className={this.props.whichPlayer}>
                <h2>Player: {this.props.whichPlayer}</h2>
                <h3>Wins: </h3>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        )
    }
}

class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
        )
    }
}

class Square extends React.Component {
    render() {
        return (
            <div>
                <h4>Square</h4>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="My React Tic Tac Toe" />
                <Player whichPlayer="X" />
                <Player whichPlayer="O" />
                <Board />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));