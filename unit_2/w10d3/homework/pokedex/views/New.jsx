const React = require('react');
const Default = require('./Default');

class New extends React.Component {
    render() {
        return (
        <Default>
            <form action="/pokemon" method="POST">
                Name: <input type="text" name="name" /><br/>
                Color: <input type="text" name="color" /><br/>
                HP: <input required type="number" name="hp" /><br/>
                Attack: <input required type="number" name="attack" /><br/>
                Defense: <input required type="number" name="defense" /><br/>
                HP: <input required type="number" name="hp" /><br/>
                Special Attack <input type="number" name="special attack" /><br/>
                Special Defense: <input required type="number" name="special defense" /><br/>
                Speed: <input required type="number" name="speed" /><br/>
                <input type="submit" name="" value="Add a Pokemon"/>
            </form>
        </Default>

        )
    }
}

module.exports = New;