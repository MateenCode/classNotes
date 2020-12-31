const React = require('react');

class Edit extends React.Component {
    render() {
        const { _id, name, color, readyToEat} = this.props.fruit;
        return (
            <div>
                <h1>Edit Page</h1>
                {/* url - /fruits/id_of_fruit? parameter to indicate the request */}
                <form action={`/fruits/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name}/> <br/>
                    Color: <input type="text" name="color" defaultValue={color}/> <br/>
                    Is Ready to Eat: 
                    <input type="checkbox" name="readyToEat" checked={readyToEat}/>
                    <br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;