const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render(){
        // console.log(this.props);
        // const title = this.props.title;
        // const fruits = this.props.fruits;
        const { title, fruits,} = this.props;
        return (
            <Default>
                <h1>{title}</h1>
                <a href="/fruits/new">Add New Fruit</a>
                <div>
                    {fruits.map((fruit, index) => {
                        return (
                            <div>
                                <p>The {fruit.name} is {fruit.color}</p>
                                <p>{fruit.readyToEat ? "Its ready to eat" : "It is not ready to eat"}</p>
                                <a href={`/fruits/${index}`}>See More</a><br/>
                                <a href={`/fruits/${index}/edit`}>Edit</a>
                                <form action={`/fruits/${index}?_method=DELETE`} method="post">
                                    <input type="submit" value="DELETE"/>
                                </form>
                            </div>
                        )
                    })}
                </div>
            </Default>
        )
    }
}

module.exports = Index;