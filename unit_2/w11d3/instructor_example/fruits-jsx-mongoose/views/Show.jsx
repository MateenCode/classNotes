const React = require('react');

class Show extends React.Component {
    render() {
        // const name = this.props.fruit.name;
        // const color = this.props.fruit.color;
        // const readyToEat = this.props.fruit.readyToEat;
        // destructuring
        const { name, color, readyToEat } = this.props.fruit;
        return (
            <div>
                <h1>Fruits Show Page</h1>
                <p>The {name} is {color} </p>
                <p>{readyToEat ? `It is ready to eat` : `Is not ready to eat`}</p>
            </div>
        )
    }
}

module.exports = Show;