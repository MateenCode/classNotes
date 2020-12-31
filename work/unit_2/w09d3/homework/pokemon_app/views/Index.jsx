const React = require('react');

const myStyle = {
    color: '#FFDE00',
    backgroundColor: '#3B4CCA',
    height: 200,
    textAlign: 'center',
    justifyContent: 'center'
  };

 
  class Index extends React.Component {
    render() {
        console.log(this.props.pokemon[0].name)
    return (
        <div>
            <h1 style={myStyle}>{this.props.title}</h1>
            <ul style={{listStyleType:'none'}}>
                {this.props.pokemon.map((item, index) => {
                    return (
                    <li key={index}><a href={`/pokemon/${index}`}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a></li>
                    )
                })}
                </ul> 
  
        </div>
        

    )  
    }
}

module.exports = Index;

/**<h2>{this.props.fruit.map((item, index) => {
                    return (
                        <li key={index }><a href={`/fruits/${index}`}></a>{item.name}</li>
                    )
                })}**/