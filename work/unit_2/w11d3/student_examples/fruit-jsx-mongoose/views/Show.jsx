const React = require('react');

class Show extends React.Component {
    render() {
        const {name, color, readyToEat} = this.props.fruit;
        return (
            <div>
                <h1>Fruits Show Page</h1>
                <p>The {name} is  {color}</p> 
                <p>{readyToEat ? `It is ready to eat` : `Is not ready to eat`}</p>
                <a href="/fruits">Back Home</a>
            </div>
        )
    }
}

module.exports = Show;