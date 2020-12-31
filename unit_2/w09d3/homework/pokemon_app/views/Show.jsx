const React = require('react');

const myStyle = {
    color: '#FFDE00',
    backgroundColor: '#3B4CCA',
    height: 200,
    width: 1000,
    textAlign: 'center',
    justifyContent: 'center'

  };
  const divStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
     
  }

 
  class Show extends React.Component {
    render() {
        // const pokemon = this.props.pokemon;
        // console.log(this.props.pokemon[0].name)
    return (
        <div>
            <div style={divStyle} >
            <h1 style={myStyle}>Gotta Catch 'Em All</h1>
            </div>
            <h2>{this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}</h2>
            <img src={`${this.props.pokemon.img}`}/>
            <a href="/pokemon">back</a>   
        </div>
        

    )  
    }
}

module.exports = Show;