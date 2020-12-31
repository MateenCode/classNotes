const React = require('react');
const Default = require('./Default')

class New extends React.Component {
    render() {
        return (
            <Default>
                <div>New Page</div>
                <form action="/fruits" method="POST"> 
                Name: <input type="text" name="name" /><br/>
                Color: <input type="text" name="color" /><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                <input type="submit" name="" value="Create Fruit"/>
                </form>
            </Default>
        )     
    }
}

module.exports = New;