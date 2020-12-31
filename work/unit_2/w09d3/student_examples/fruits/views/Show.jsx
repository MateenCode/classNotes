// class components extend react class///
const React = require('react');
const Default = require('./Default')


class Show extends React.Component {
    render(){  //render is a method built in react component
        const fruit = this.props.fruit;
        return (
            <Default> 
                <h1>Show Page</h1>
                <p> The {fruit.name} is {fruit.color}</p>
                <p>{fruit.readyToEat ? 'It is ready to eat' : 'It is not ready to eat'}</p>
            </Default>
        );
    }
}


module.exports = Show;   //exporting the components