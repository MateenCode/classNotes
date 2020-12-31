import React, { Component } from 'react';

class Daters extends Component {
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
   
    .then(jsonedDaters => this.setState({daters: jsonedDaters}))
    .catch( error => console.error(error))
  }

  render () {
    return (
        <>
          
          {this.state.daters.map( dater => {
            return (
              <div key={dater.id}>
                <h3>Name: {dater.name} </h3>
                <img src={dater.img} alt={dater.name}/>
                <h4>Starsign: {dater.starsign} </h4>
                <h4>Age: {dater.age} </h4>
                {dater.ltl
                  ? <h5> Loves to laugh and have a good time</h5>
                  : <h5> Hates laughing, does not like having a good time</h5>
                }
              </div>
            )
          })}
        </>
      )
    }
}

export default Daters;