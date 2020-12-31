import React, { Component } from "react";
import Daters from "./components/Hello";

class App extends Component {
  state = {
    daters: []
  }

  componentDidMount() {
    this.getDaters()
  }

  getDaters = () =>{
    fetch('http://localhost:3000/users'
  )
  
    .then(res => res.json())
    .then(json => console.log(json.length /2))
    .then(jsonedDaters => this.setState({daters: jsonedDaters}))
    
    // const mid = jsonedDaters.length/2
    // const l1 = jsonedDaters.slice(0,mid)
    // const l2 = jsonedDaters.slice(mid)

    .catch( error => console.error(error))
  }
  // getData = (daters) => {
  //   daters = [1,2,3,4,5,6]
  //   mid = daters.length/2
  //   l1 = daters.slice(0, mid)
  // }



  render() {
    return (
    
        <body>
          <header>Dating App Header</header>
          <div className="container">
          <main>Main Content Goes Here</main>
          <nav> <Daters /> </nav>
          <aside> <Daters /> </aside>
          <footer></footer>
          </div>
        </body>
    );
  }
}

export default App;
