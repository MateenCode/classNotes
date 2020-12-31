const React = require('react');


class New extends React.Component {
    render() {
        return (
            <>
            <head>
                <link rel="stylesheet" href="/normalize.css"/>
                <link rel="stylesheet" href="/skeleton.css"/>
            </head>
                <div class="container">
                    <h1>Add New item</h1>
                    <form action="/fruits" method="POST"> 
                Date: <input type="text" name="date" placeholder="April 1" /><br/>
                Name: <input type="text" name="name"  /><br/>
                Amount: <input type="number" name="amount" /><br/>
                From: <input type="text" name="from" /><br/>
                <input type="submit" name="" value="CREATE NEW ITEM"/>
                </form>
                </div>
                
            </>
        )     
    }
}

module.exports = New;