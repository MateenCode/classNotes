const React = require('react');

class Index extends React.Component {
    render() {
        const { fruits } = this.props;
        return (
            <div>
                <h1>Fruits Index Page</h1>
                <nav>
                    <a href="/fruits/new">Create a New Fruit</a>
                </nav>
                <ul>
                    {
                        fruits.map((fruit, i) => {
                            console.log(fruit._id)
                            return (
                                <li>
                                    The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color} <br></br>
                                    {fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat`}
                                    <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    <a href={`/fruits/${fruit._id}/edit`}>Edit</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;