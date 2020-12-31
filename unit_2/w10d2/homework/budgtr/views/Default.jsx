const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                <link rel="stylesheet" href="/public/normalize.css"/>
                <link rel="stylesheet" href="/public/skeleton.css"/>
                    <title>Budget App</title>
                </head>
                <body>
                   {this.props.children} {/**wraps another component and renders another Component */}
                </body>
            </html>
        )

    }
}
module.exports = Default;
