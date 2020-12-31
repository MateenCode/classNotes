const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
      
        const {pokemon} = this.props;
        const {stats} = pokemon;
        // const keys = Object.keys(stats)
        const arr = [];
        for(let object in stats) {
            let stat = `${object}: ${stats[object]}`
            arr.push(stat)
            console.log(stat)
        }
        return (
            <Default>
                <h1>{pokemon.name}</h1>
                <img class="card card-1" src={`${pokemon.img}`}/>
                <ul>
                    <h3>Type</h3>
                    {pokemon.type.map((type, index) => {
                        return (
                            
                        <li>{type}</li>
                        )
                    })}
                </ul>
                <ul>
                <h3>Stats</h3>
                    {arr.map((item)=> {
                        return (
                        <li>{item}</li>
                        )
                    })}

                </ul>
            
            </Default>
            
        )
    }
}

module.exports = Show;
