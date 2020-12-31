const React = require('react');
const Default = require('./Default');

class New extends React.Component {
render() {
    return (
        <Default>
            <h1>New Product page</h1>
            <form action="/products" method="POST">
                Name: <input type="text" name="name" /><br/>
                Description: <input type="textarea" name="description" /><br/>
                Img: <input type="text" name="img"/><br/>
                Price:<input type="number" name="price"/><br/>
                Qty: <input type="number" name="qty"/><br/>
                <input type="submit" name="" value="Create Product"/>
            </form>
        </Default>);
    }
}

module.exports = New;