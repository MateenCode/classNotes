const React = require('react');
const Default = require('./Default')

class Show extends React.Component {
    render(){  //render is a method built in react component
        const budget = this.props.budget;
        return (
            <>
        <head>
        <link rel="stylesheet" href="/normalize.css"/>
        <link rel="stylesheet" href="/skeleton.css"/>
        </head>
                <div class="container"> 
                    <h1>Retirement</h1>
                    <button><a href="/budgets">Back</a></button>
                    <h3>Date</h3>
                    <p>{budget.date}</p>
                    <h3>Name</h3>
                    <p>{budget.name}</p>
                    <h3>From</h3>
                    <p>{budget.from}</p>
                    <h3>amount</h3>
                    <p>{budget.amount}</p>
                    <h3>tags</h3>
                    <p>{budget.tags}</p>
                </div>
            </>
        );
    }
}


module.exports = Show;   //exporting the components


