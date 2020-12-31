const React = require('react');
const Default = require('./Default')


// const {budget, sum} = this.props


class Index extends React.Component {
    render() {
        // console.log(this.props);
        const {sum, budget} = this.props;
        return (
        <>
        <head>
        <link rel="stylesheet" href="normalize.css"/>
        <link rel="stylesheet" href="skeleton.css"/>
        </head>
                    <h1>Budgtr</h1>
                    <h2 class="account">Balance:{sum < 0 ? (
                        <span class="negBalance">
                            ${sum}
                        </span>
                    ): (
                        <span class="posBalance">
                            ${sum}
                        </span>
                    )}
                    </h2>
                    <a href='/budgets/new'>Add New Item</a>
                    {this.props.budget.map((budget, index)=> {
                        return (
                            <table>
                                <tr>
                                <div className="account">
                                    
                                </div>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>Amount</th>
                                </tr>
                                <tr>
                                    <td>{budget.date}</td>
                                    <td><a href={`/budgets/${index}`}>{budget.name}</a></td>
                                    <td>{budget.amount}</td>
                                </tr>
                            </table>
                        )
                    })}
                    </>

        )
    }
}

module.exports = Index;

// let sum = 0
// for let budget.length

// sum += budget {1}.amount

// write if else statement

// resizeBy,render (index, {sum:sum, budget})