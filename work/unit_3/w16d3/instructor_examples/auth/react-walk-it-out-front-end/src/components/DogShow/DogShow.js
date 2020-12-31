import React, { Component } from 'react'
import './DogShow.css'

class DogShow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dog: this.props.info
    }
  }

  render () {
    return (
      <div className='dog-preview'>
        <img src={this.state.dog.imageUrl} alt={this.state.dog.name} className='dog-image' />
        <h3>{this.state.dog.name}</h3>
        {this.props.isLoggedIn ? <h4>Age: {this.state.dog.age}</h4> : ''}
        {this.props.isLoggedIn ? <h4>Walk Frequency: {this.state.dog.frequency}</h4> : ''}
      </div>
    )
  }
}

export default DogShow
