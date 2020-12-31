const React = require('react');

class Index extends React.Component {
    render() {
        const {fruits} = this.props;
        return (
            <div>
                <h1>Fruits Index Page</h1>
            <nav>
                <a href="/fruits/new">Create New Fruit</a>
            </nav>
                <ul>
                    {fruits.map((fruit, index) => {
                        return(
                        <li>
                            The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color} <br/>
                            {fruit.readyToEat ? ` and it is ready to eat` : `It is not ready to eat`}
                        </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Index;