import React, { Component } from 'react'
import axios from 'axios'

import DogShow from '../DogShow/DogShow'

class DogList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dogs: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3001/api/dogs')
            .then(response => {
              this.setState({
                dogs: response.data
              })
            })
  }

  render () {
    var showDogs = this.state.dogs.map((dog, i) => {
      return (
        <div key={i}>
          <DogShow info={dog} isLoggedIn={this.props.isLoggedIn} />
        </div>
      )
    })
    return (
      <div>
        {showDogs}
      </div>
    )
  }
}

export default DogList
