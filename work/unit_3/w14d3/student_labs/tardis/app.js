const TheName = (props) => {
        return(
            <div>
                <div>
                    <h3 onClick={() => props.changeIt(props.name)}  >{props.name}</h3>
                </div> 
            </div>
        ) 
    
}
class DivOne extends React.Component {
    state = {
        caps: false
    }

    toggleCaps = () => {
        this.setState({caps : !this.state.caps })
    }
    render() {
        return(
            <div>
                <h3 onClick={() => {this.toggleCaps()}}>
                    {this.state.caps ? this.props.name.toUpperCase() : this.props.name.toLowerCase()}
                </h3>
            </div>
        )
    
    }
}
    


const DivTwo = (props) => {
    
        return(
            <div>
                <h3 onClick={() => props.changeIt(props.name)}>{props.name} </h3>
            </div>
        )

}

const DivThree = (props) => {
    return(
        <div>
            <h3>{props.name}</h3>
        </div>
    )
}
class App extends React.Component {
    state = {
        tardis: {
            name: "Time and Relative Dimensions in Space",
            caps: false
        }
    }

    changeIt = (text) => {
        this.state.tardis.cap ? this.setState({
            tardis:{
                name: text.toLowerCase(),
                caps: false
            }
        }) : this.setState({
            tardis: {
                name: text.toUpperCase(),
                caps: true
            }
        })

    }

    toggleCaps = () => {
        this.setState({caps : !this.state.caps })
    }
    
    render() {
        return(
            <div>
        <TheName  changeIt={this.changeIt} name={this.state.tardis.name} />
        <DivOne  name={this.state.tardis.name}  />
        <DivTwo  changeIt={this.changeIt} name={this.state.tardis.name} />
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('container'));