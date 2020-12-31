const React = require('react');

class New extends React.Component {
    render() {
        return (
            <>
                <div>New Baked Goods</div>
                <form action="/bakedgoods" method="POST"> 
                Name: <input type="text" name="name" /><br/>
                Price: <input type="text" name="price" /><br/>
                Image: <input type="url" id="homepage" name="image" /><br/>
                <input type="submit" name="" value="Add Baked Goods"/>
                </form>
            </>
        )     
    }
}

module.exports = New;