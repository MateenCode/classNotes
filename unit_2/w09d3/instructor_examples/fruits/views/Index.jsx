const React = require('react');

class Index extends React.Component {
    render(){
        console.log(this.props);
        return (
                <h1>{this.props.title}</h1>
        )
    }
}

module.exports = Index;