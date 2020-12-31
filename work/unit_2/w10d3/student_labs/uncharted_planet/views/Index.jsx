const React = require('react');

class Index extends React.Component {
   
    render() {
        const {scientist} = this.props;
        return (
            <h1>{scientist}</h1>
        )
    }
}
module.exports = Index;
