const React = require('react');

class Edit extends React.Component {
    render() {
        const { _id, name, color, readyToEat } = this.props.fruit
        
        return (
            <form action={`/fruits/${_id}?_method=PUT`} method="POST">
                  Name: <input type="text" name="name" defaultValue={name} /><br/>
                  Color: <input type="text" name="color" defaultValue={color} /><br/>
                  Is Ready To Eat: <input type="checkbox" name="readyToEat" checked={readyToEat} /><br/>
                  <input type="submit" name="" value="Submit Changes"/>
               </form>
        )
    }
}

module.exports = Edit;