const React = require('react')

class Edit extends React.Component {
    render() {
        const {fruit, index} = this.props 
        return (
            <div>
                <h1>{fruit.name} Edit page</h1>
                <form action={`/fruits/${index}?_method=PUT`} method="post">
                    Name: <input type="text" name="name" value={fruit.name}/><br/>
                    Color: <input type="text" name="color" value={fruit.color}/><br/>
                    Is ready To Eat: <input type="checkbox" name="readyToEat" checked={fruit.readyToEat}/><br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;