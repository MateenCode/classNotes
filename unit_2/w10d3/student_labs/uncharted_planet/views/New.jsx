const React = require('react');

class New extends React.Component {
    render() {
        return (
            <form action="scientist" method="POST">
                Name:<input type="text" name="name"/><br/>
                Description: <input type="text" name="description"/><br/>
                <input type="submit" name="" value="Add scientist"/><br/>
            </form>
        )
    }
}

module.exports = New;