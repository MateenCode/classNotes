const React = require('react')
const Default = require('./Default');

class Edit extends React.Component {
    render() {
        const {pokemon, index} = this.props 
        return(
            <Default>
            <form action={`/pokemon/${index}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" value={pokemon.name}/><br/>
                    type: <input type="text" name="type" value={pokemon.type}/><br/>
                    HP: <input required type="number" name="hp" value={pokemon.stats.hp}/><br/>
                    Attack: <input required type="number" name="attack" value={pokemon.stats.attack}/><br/>
                    Defense: <input required type="number" name="defense" value={pokemon.stats.defense}/><br/>
                    HP: <input required type="number" name="hp" value={pokemon.stats.hp}/><br/>
                    Special Attack <input type="number" name="special attack" value={pokemon.stats.spattack}/><br/>
                    Special Defense: <input required type="number" name="special defense" value={pokemon.stats.spdefense}/><br/>
                    Speed: <input required type="number" name="speed" value={pokemon.stats.speed}/><br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
                <img class="card card-1" src={`${pokemon.img}`}/>
            </Default>

        )
    }
}

module.exports = Edit;
