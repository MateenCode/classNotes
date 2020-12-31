const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css"/>
                    <title>Fruits App</title>
                </head>
                <body>
                   {this.props.children} {/**wraps another component and renders another Component */}
                </body>
            </html>
        )

    }
}
module.exports = Default;
